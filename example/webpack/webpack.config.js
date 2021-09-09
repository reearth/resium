"use strict";

const path = require("path");

const webpack = require("webpack");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlTagsPlugin = require("html-webpack-tags-plugin");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = (_env, args) => {
  const prod = args.mode === "production";
  return {
    externals: {
      cesium: "Cesium",
    },
    mode: prod ? "production" : "development",
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              plugins: prod ? [] : ["react-refresh/babel"],
            }
          },
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify("/cesium"),
      }),
      new CopyPlugin({
        patterns: [
          {
            from: `../node_modules/cesium/Build/Cesium${prod ? "" : "Unminified"}`,
            to: "cesium",
          },
        ],
      }),
      new HtmlPlugin({
        template: "index.html",
      }),
      new HtmlTagsPlugin({
        append: false,
        tags: ["cesium/Widgets/widgets.css", "cesium/Cesium.js"],
      }),
      ...(prod ? [] : [new webpack.HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()]),
    ],
  };
};
