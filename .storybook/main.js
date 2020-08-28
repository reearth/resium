const path = require("path");
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
  webpackFinal: async (config, { configType }) => ({
    ...config,
    externals: {
      ...config.externals,
      cesium: "Cesium",
    },
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /.(glb|pnts)$/,
          use: "file-loader",
        },
      ],
    },
    plugins: [
      ...config.plugins,
      new webpack.DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify("/cesium"),
      }),
      ...(configType === "PRODUCTION"
        ? []
        : [
            new CopyPlugin({
              patterns: [
                {
                  from: "node_modules/cesium/Build/Cesium",
                  to: "cesium",
                },
              ],
            }),
          ]),
    ],
    resolve: {
      ...config.resolve,
      alias: {
        ...config.alias,
        assets: path.resolve(__dirname, "assets"),
      },
    },
  }),
};
