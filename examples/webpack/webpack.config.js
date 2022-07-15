"use strict";

const path = require("path");

const webpack = require("webpack");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlTagsPlugin = require("html-webpack-tags-plugin");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = (_env, args) => ({
  externals: {
    cesium: "Cesium",
  },
  mode: args.mode === "production" ? "production" : "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: args.mode === "production" ? [] : ["react-refresh/babel"],
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
          from: "node_modules/cesium/Build/Cesium",
          to: "cesium",
        },
      ],
    }),
    new HtmlPlugin({
      template: "index.html"
    }),
    new HtmlTagsPlugin({
      append: false,
      tags: ["cesium/Widgets/widgets.css", "cesium/Cesium.js"],
    }),
    ...(args.mode === "production" ? [] : [new webpack.HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()]),
  ],
});
