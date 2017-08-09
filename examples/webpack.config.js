"use strict";

const path = require("path");

const webpack = require("webpack");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const port = 3000;

module.exports = opts => ({
  devServer: {
    contentBase: path.join(__dirname, "build"),
    historyApiFallback: true,
    hot: true,
    port
  },
  context: __dirname,
  devtool: (!opts || !opts.prod) && "inline-source-map",
  entry: {
    bundle: (!opts || !opts.prod ? [
      "react-hot-loader/patch",
      `webpack-dev-server/client?http://0.0.0.0:${port}`,
      "webpack/hot/only-dev-server"
    ] : []).concat([
      "./src/index.js"
    ])
  },
  externals: {
    cesium: "Cesium"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "[name].js",
    publicPath: "/"
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(opts && opts.prod ? "production" : "development")
      }
    }),
    new HtmlPlugin({
      template: "index.html"
    }),
    new CopyPlugin([
      {
        from: `../node_modules/cesium/Build/Cesium${opts && opts.prod ? "" : "Unminified"}`,
        to: "cesium"
      }
    ])
  ].concat(opts && opts.prod ? [
    new webpack.optimize.UglifyJsPlugin({
      ecma: 5,
      parallel: true
    }),
    new webpack.optimize.AggressiveMergingPlugin()
  ] : [
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ]),
  resolve: {
    alias: {
      "cesium-react": path.resolve(__dirname, "..", "src")
    }
  }
});
