"use strict";

const env = process.env.NODE_ENV;
const coverage = env === "coverage";

module.exports = function(config) {
  config.set({
    browsers: ["ChromeHeadless"],
    frameworks: ["jasmine"],
    files: [
      "node_modules/cesium/Build/CesiumUnminified/Cesium.js"
    ].concat(coverage ? [
      "src/**/*.js"
    ] : [
        "src/**/*.test.js"
      ]),
    preprocessors: {
      [coverage ? "src/**/*.js" : "src/**/*.test.js"]: ["rollup"]
    },
    reporters: ["progress"].concat(env === "coverage" ? ["coverage"] : []),
    autoWatch: false,
    singleRun: true,
    rollupPreprocessor: {
      plugins: [
        require("rollup-plugin-node-resolve")(),
        require("rollup-plugin-commonjs")(),
        require("rollup-plugin-babel")({
          exclude: "node_modules/**"
        }),
        require("rollup-plugin-replace")({
          "process.env.NODE_ENV": JSON.stringify("development")
        })
      ],
      format: "iife",
      sourceMap: "inline",
      globals: {
        cesium: "Cesium"
      },
      external: ["cesium"],
      moduleName: "CesiumReact"
    },
    coverageReporter: {
      type: "lcov"
    }
  });
};
