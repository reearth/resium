"use strict";

module.exports = function(config) {
  config.set({
    frameworks: ["jasmine"],
    files: [
      "src/**/*.test.js"
    ],
    preprocessors: {
      "src/**/*.test.js": ["babel"]
    },
    reporters: ["progress"],
    autoWatch: false,
    browsers: ["ChromeHeadless"],
    singleRun: true
  });
};
