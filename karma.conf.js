"use strict";

const env = process.env.NODE_ENV;
const coverage = env === "coverage";

const files = [
  coverage ? "src/**/*.js" : "src/**/*.test.js",
  coverage ? "src/**/*.ts" : "src/**/*.test.ts",
  coverage ? "src/**/*.tsx" : "src/**/*.test.tsx",
];

module.exports = function(config) {
  config.set({
    browsers: process.env.TRAVIS ? ["ChromeTravisCI"] : ["ChromeHeadless"],
    frameworks: ["jasmine"],
    files: ["node_modules/cesium/Build/CesiumUnminified/Cesium.js"].concat(files),
    exclude: ["src/**/*.stories.js"],
    preprocessors: {
      [coverage ? "src/**/*.js" : "src/**/*.test.js"]: ["rollup"],
      [coverage ? "src/**/*.ts" : "src/**/*.test.ts"]: ["rollup"],
      [coverage ? "src/**/*.tsx" : "src/**/*.test.tsx"]: ["rollup"],
    },
    reporters: ["progress"].concat(env === "coverage" ? ["coverage"] : []),
    autoWatch: false,
    singleRun: true,
    rollupPreprocessor: {
      plugins: [
        require("rollup-plugin-typescript2")({
          exclude: "node_modules/**",
          tsconfigOverride: {
            compilerOptions: {
              module: "es2015",
            },
          },
        }),
        require("rollup-plugin-babel")({
          exclude: "node_modules/**",
        }),
        require("rollup-plugin-replace")({
          "process.env.NODE_ENV": JSON.stringify("development"),
        }),
        require("rollup-plugin-node-resolve")(),
        require("rollup-plugin-commonjs")(),
      ],
      external: ["cesium"],
      output: {
        name: "Resium",
        globals: {
          cesium: "Cesium",
        },
        format: "iife",
        sourcemap: "inline",
      },
    },
    coverageReporter: {
      type: "lcov",
    },
    customLaunchers: {
      ChromeTravisCI: {
        base: "ChromeHeadless",
        flags: ["--no-sandbox"],
      },
    },
  });
};
