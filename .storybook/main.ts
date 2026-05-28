import path from "node:path";

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
    // vite-plugin-cesium copies Cesium assets to `path.join(root, build.outDir)`.
    // Storybook passes an absolute `build.outDir`, and path.join mis-joins two
    // absolute paths into a doubled `<root>/Users/.../<outDir>` directory, leaking
    // a junk tree into the repo. Relativizing outDir makes the join correct.
    const root = config.root ?? process.cwd();
    if (config.build?.outDir && path.isAbsolute(config.build.outDir)) {
      config.build.outDir = path.relative(root, config.build.outDir);
    }
    return mergeConfig(config, {
      base: "",
      plugins: [cesium()],
    });
  },
};

export default config;
