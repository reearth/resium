/// <reference types="vite/client" />
/// <reference types="vitest" />

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { configDefaults } from "vitest/config";

export default defineConfig({
  plugins: [
    react(),
    dts({
      rollupTypes: true,
      exclude: ["./src/env.d.ts"],
    }),
  ],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "Resium",
    },
    rollupOptions: {
      external: ["cesium", "react", "react-dom"],
      output: {
        globals: {
          cesium: "Cesium",
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  test: {
    environment: "jsdom",
    exclude: [...configDefaults.exclude, "docs/**/*", "examples/**/*"],
    setupFiles: ["src/test/setup.ts"],
    coverage: {
      reporter: ["text", "json"],
    },
  },
});
