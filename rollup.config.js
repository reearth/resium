import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import replace from "rollup-plugin-replace";
import uglify from "rollup-plugin-uglify";
import { minify } from "uglify-es";

import pkg from "./package.json";

const env = process.env.NODE_ENV;

export default {
  input: "src/index.js",
  output: {
    format: "umd",
    file: pkg.browser,
    globals: {
      react: "React",
      "prop-types": "PropTypes",
      cesium: "Cesium"
    },
    name: "CesiumReact"
  },
  plugins: [
    babel({
      exclude: "node_modules/**"
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify(env === "production" ? "production" : "development")
    }),
    resolve(),
    commonjs()
  ].concat(env === "production" ? [
    uglify({}, minify)
  ] : []),
  external: ["react", "prop-types", "cesium"]
};
