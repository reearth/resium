const path = require("path");

module.exports = {
  settings: {
    "import/resolver": {
      webpack: {
        config: {
          resolve: {
            alias: {
              cesium: path.resolve(__dirname, "../../node_modules/cesium/Build/Cesium/Cesium"),
              "cesium-react": path.resolve(__dirname, "../../src"),
            },
          },
        },
      },
    },
  },
  rules: {
    "import/no-unresolved": 2,
    "node/no-missing-import": 0,
  },
};
