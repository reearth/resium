const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  stories: ["../src/**/*.stories.@(js|ts|tsx|mdx)"],
  addons: [
    {
      name: "@storybook/addon-essentials",
      options: {
        backgrounds: false,
      },
    },
    "@storybook/addon-storysource",
  ],
  webpackFinal: async config => ({
    ...config,
    externals: {
      ...config.externals,
      cesium: "Cesium",
    },
    plugins: [
      ...config.plugins,
      new webpack.DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify("./cesium"),
      }),
      new CopyPlugin({
        patterns: [
          {
            from: "node_modules/cesium/Build/Cesium",
            to: "cesium",
          },
        ],
      }),
    ],
  }),
};
