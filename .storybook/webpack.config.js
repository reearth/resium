"use strict";

const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  externals: {
    cesium: "Cesium",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development"),
        CESIUM_BASE_URL: JSON.stringify("/cesium"),
      },
    }),
    new CopyPlugin([
      {
        from: "node_modules/cesium/Build/CesiumUnminified",
        to: "cesium",
      },
    ]),
  ],
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
};
