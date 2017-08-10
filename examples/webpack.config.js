"use strict";

const path = require("path");

const webpack = require("webpack");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlIncludeAssetsPlugin = require("html-webpack-include-assets-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const port = 3000;

module.exports = opts => ({
  context: __dirname,
  devServer: {
    contentBase: path.join(__dirname, "build"),
    historyApiFallback: true,
    hot: true,
    port
  },
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
      },
      {
        test: /\.css$/,
        use: opts && opts.prod ? ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: {
            loader: "css-loader",
            options: {
              camelCase: true,
              localIdentName: "[local]_[hash:base64:5]",
              minimize: false,
              modules: true,
              sourceMaps: !opts || !opts.prod
            }
          }
        }) : [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              camelCase: true,
              localIdentName: "[local]_[hash:base64:5]",
              minimize: false,
              modules: true,
              sourceMaps: !opts || !opts.prod
            }
          }
        ]
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
    ]),
    new HtmlIncludeAssetsPlugin({
      append: false,
      assets: [
        "cesium/Widgets/widgets.css",
        "cesium/Cesium.js"
      ]
    })
  ].concat(opts && opts.prod ? [
    new ExtractTextPlugin("style.css"),
    new OptimizeCssAssetsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      ecma: 5,
      parallel: true
    }),
    new webpack.optimize.AggressiveMergingPlugin()
  ] : [
      new webpack.NamedModulesPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ]),
  resolve: {
    alias: {
      "cesium-react": path.resolve(__dirname, "..", "src")
    }
  }
});
