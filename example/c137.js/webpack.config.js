"use strict";

const webpack = require("webpack");
const HtmlPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = (_env, args = {}) => ({
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
    new HtmlPlugin({
      template: "index.html"
    }),
    ...(args.mode === "production" ? [] : [new webpack.HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()]),
  ],
  resolve: {
    alias: {
      "cesium": "c137.js"
    }
  }
});
