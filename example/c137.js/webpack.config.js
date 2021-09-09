"use strict";

const webpack = require("webpack");
const HtmlPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = () => ({
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
    new HtmlPlugin(),
    ...(prod ? [] : [new webpack.HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()]),
  ],
  resolve: {
    alias: {
      "cesium": "c137.js"
    }
  }
});
