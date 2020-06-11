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
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, "../../node_modules/cesium/Build/Cesium"),
            to: "cesium",
          },
        ],
      }),
    ],
  });
};
