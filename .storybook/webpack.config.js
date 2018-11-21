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
      {
        test: /.glb$/,
        use: "file-loader",
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      CESIUM_BASE_URL: JSON.stringify("/cesium"),
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
