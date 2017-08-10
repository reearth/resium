"use strict";

module.exports = function(config) {
  config.set({
    browsers: ["ChromeHeadless"],
    frameworks: ["jasmine"],
    files: [
      "node_modules/cesium/Build/CesiumUnminified/Cesium.js",
      "src/**/*.test.js"
    ],
    preprocessors: {
      "src/**/*.test.js": ["rollup"]
    },
    reporters: ["progress"],
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
      external: ["cesium"]
    }
  });
};
