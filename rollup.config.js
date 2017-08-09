import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import replace from "rollup-plugin-replace";
import uglify from "rollup-plugin-uglify";
import { minify } from "uglify-es";

import pkg from "./package.json";

const env = process.env.NODE_ENV;

export default {
  entry: "src/index.js",
  dest: pkg.browser,
  format: "umd",
  moduleName: pkg.name,
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: "node_modules/**"
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify(env)
    })
  ].concat(env === "production" ? [
    uglify({}, minify)
  ] : [])
};
