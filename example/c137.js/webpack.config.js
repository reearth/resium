"use strict";

const path = require("path");

const webpack = require("webpack");
const HtmlPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = (_env, args) => {
  const prod = args.mode === "production";
  return {
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
      new HtmlPlugin({
        template: "index.html",
      }),
      ...(prod ? [] : [new webpack.HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()]),
    ],
    resolve: {
      alias: {
        "cesium": "c137.js"
      }
    }
  };
};
