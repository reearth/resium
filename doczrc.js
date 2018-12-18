import webpack from "webpack";
import CopyPlugin from "copy-webpack-plugin";

export default {
  typescript: true,
  title: "Resium",
  menu: [
    "Home",
    {
      name: "Installation",
      menu: ["Installation", "Set up webpack config 1", "Set up webpack config 2"],
    },
    "Getting Started",
    "Guide",
    {
      name: "Components",
    },
    "Advanced",
    "Migration Guide",
    "Contribution",
  ],
  htmlContext: {
    head: {
      links: [
        {
          rel: "stylesheet",
          href: "/cesium/Widgets/widgets.css",
        },
      ],
      raw: ["<style>img{max-width:100%;}</style>"],
    },
    body: {
      scripts: [{ src: "/cesium/Cesium.js" }],
    },
  },
  modifyBundlerConfig: config => ({
    ...config,
    externals: {
      ...config.externals,
      cesium: "Cesium",
    },
    plugins: [
      ...config.plugins,
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
      ...config.resolve,
      extensions: [...config.resolve.extensions, ".ts", ".tsx"],
    },
  }),
  themeConfig: {
    repository: "https://github.com/darwin-education/resium",
    colors: {
      primary: "#00A0E8",
      link: "#00A0E8",
    },
    logo: {
      src:
        "https://raw.githubusercontent.com/darwin-education/resium/master/docs/resources/logo-sidebar.png",
      width: 200,
    },
  },
};
