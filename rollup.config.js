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
    format: ["es", "cjs"].indexOf(env) >= 0 ? env : "umd",
    file:
      env === "es"
        ? pkg.module
        : env === "cjs" ? pkg.main : `dist/cesium-react${env === "production" ? ".min" : ""}.js`,
    globals: {
      react: "React",
      "react-dom/server.browser": "ReactDOMServer",
      "prop-types": "PropTypes",
      cesium: "Cesium",
    },
    name: "CesiumReact",
  },
  plugins: [
    babel({
      exclude: "node_modules/**",
    }),
    resolve(),
    commonjs(),
  ].concat(
    env === "production"
      ? [
          replace({
            "process.env.NODE_ENV": JSON.stringify("production"),
          }),
          uglify({}, minify),
        ]
      : [],
  ),
  external: ["react", "prop-types", "cesium"],
};
