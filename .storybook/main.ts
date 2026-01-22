import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import cesium from "vite-plugin-cesium";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|ts|tsx|mdx)"],
  core: {
    builder: "@storybook/builder-vite",
    disableTelemetry: true,
  },
  framework: "@storybook/react-vite",
  staticDirs: ["./public"],
  addons: [],
  typescript: {
    reactDocgen: false,
  },
  viteFinal(config) {
    return mergeConfig(config, {
      base: "",
      plugins: [cesium()],
    });
  },
};

export default config;
