const path = require("path");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  const config = getConfig();
  actions.replaceWebpackConfig({
    ...config,
    // for storybook
    externals: { cesium: "Cesium" },
    // for storybook
    plugins: [
      ...config.plugins,
      new webpack.DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify("/cesium"),
      }),
      new CopyPlugin([
        {
          from: path.resolve(__dirname, "../node_modules/cesium/Build/Cesium"),
          to: path.resolve(__dirname, "public/cesium"),
        },
      ]),
    ],
    resolve: {
      ...config.resolve,
      extensions: [...config.resolve.extensions, ".ts", ".tsx"],
    },
  });
};
