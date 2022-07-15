import { mergeConfig } from "vite";
import cesium from "vite-plugin-cesium";
import type { StorybookViteConfig } from "@storybook/builder-vite";

const config: StorybookViteConfig = {
  core: { builder: "@storybook/builder-vite" },
  stories: ["../src/**/*.stories.@(js|ts|tsx|mdx)"],
  staticDirs: ["./public"],
  addons: [
    {
      name: "@storybook/addon-essentials",
      options: {
        backgrounds: false,
      },
    },
    "@storybook/addon-storysource",
  ],
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [cesium()],
    });
  },
};

module.exports = config;
