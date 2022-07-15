/// <reference types="vite/client" />
/// <reference types="vitest" />

import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { configDefaults } from "vitest/config";

export default defineConfig({
  plugins: [
    dts({
      rollupTypes: true,
      exclude: ["./src/env.d.ts"],
    }),
  ],
  build: {
    lib: {
      formats: ["es", "umd"],
      entry: "src/index.ts",
      name: "Resium",
      fileName: "resium",
    },
    rollupOptions: {
      external: ["cesium", "react"],
      output: {
        globals: {
          cesium: "Cesium",
          react: "React",
        },
      },
    },
  },
  test: {
    environment: "jsdom",
    exclude: [...configDefaults.exclude, "docs/**/*", "example/**/*"],
    setupFiles: ["src/test/setup.ts"],
    coverage: {
      reporter: ["text", "json"],
    },
  },
});
