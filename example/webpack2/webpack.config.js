"use strict";

const path = require("path");

const webpack = require("webpack");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

// See also: https://github.com/CesiumGS/cesium-webpack-example

module.exports = () => {
  return {
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
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|gif|jpg|jpeg|svg|xml|json)$/,
          use: ["url-loader"],
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify(""),
      }),
      new CopyPlugin({
        patterns: [
          { from: "node_modules/cesium/Build/Cesium/Workers", to: "Workers" },
          { from: "node_modules/cesium/Build/Cesium/ThirdParty", to: "ThirdParty" },
          { from: "node_modules/cesium/Build/Cesium/Assets", to: "Assets" },
          { from: "node_modules/cesium/Build/Cesium/Widgets", to: "Widgets" },
        ],
      }),
      new HtmlPlugin(),
      ...(prod ? [] : [new webpack.HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()]),
    ],
  };
};
