"use strict";

const path = require("path");

const webpack = require("webpack");
const HtmlPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlIncludeAssetsPlugin = require("html-webpack-include-assets-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = (env, args) => {
  const prod = args.mode === "production";
  const port = (env && env.port) || 3000;

  return {
    context: __dirname,
    devServer: {
      clientLogLevel: "none",
      contentBase: path.join(__dirname, "build"),
      // disableHostCheck: true,
      historyApiFallback: true,
      hot: true,
      port,
      stats: prod ? "normal" : "minimal",
    },
    devtool: !prod ? void 0 : "inline-source-map",
    entry: {
      bundle: (!prod
        ? [
            "react-hot-loader/patch",
            `webpack-dev-server/client?http://0.0.0.0:${port}`,
            "webpack/hot/only-dev-server",
          ]
        : []
      ).concat(["./src/index.js"]),
    },
    externals: {
      cesium: "Cesium",
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: "babel-loader",
        },
        {
          test: /\.css$/,
          use: [
            prod ? MiniCssExtractPlugin.loader : "style-loader",
              {
                loader: "css-loader",
                options: {
                  sourceMap: !prod,
                  // minimized by OptimizeCssAssetsPlugin
                  minimize: false,
                },
              },
          ],
        },
      ],
    },
    node: {
      dgram: "empty",
      fs: "empty",
      net: "empty",
      tls: "empty",
      child_process: "empty",
    },
    optimization: {},
    output: {
      path: path.join(__dirname, "build"),
      filename: "[name].js",
      publicPath: "/",
    },
    performance: {
      hints: prod ? "warning" : false,
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify(prod ? "production" : "development"),
          CESIUM_BASE_URL: JSON.stringify("/cesium"),
        },
      }),
      new HtmlPlugin({
        template: "index.html",
      }),
      new CopyPlugin([
        {
          from: `../node_modules/cesium/Build/Cesium${prod ? "" : "Unminified"}`,
          to: "cesium",
        },
      ]),
      new HtmlIncludeAssetsPlugin({
        append: false,
        assets: ["cesium/Widgets/widgets.css", "cesium/Cesium.js"],
      }),
    ].concat(
      prod
        ? [new MiniCssExtractPlugin("style.css"), new OptimizeCssAssetsPlugin()]
        : [new webpack.HotModuleReplacementPlugin()],
    ),
    resolve: {
      alias: {
        "cesium-react": path.resolve(__dirname, "..", "src"),
      },
    },
  };
};
