import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";
import typescript from "rollup-plugin-typescript2";
import replace from "rollup-plugin-replace";
import { terser } from "rollup-plugin-terser";

// eslint-disable-next-line import/extensions
import pkg from "./package.json";

const env = process.env.NODE_ENV;

export default {
  input: "src/index.js",
  output: {
    format: ["es", "cjs"].indexOf(env) >= 0 ? env : "umd",
    file:
      env === "es"
        ? pkg.module
        : env === "cjs"
          ? pkg.main
          : `dist/cesium-react${env === "production" ? ".min" : ""}.js`,
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
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          declaration: true,
          declarationDir: "dist/types",
          module: "es2015",
        },
      },
      useTsconfigDeclarationDir: true,
    }),
    resolve(),
    commonjs(),
  ].concat(
    env === "production"
      ? [
          replace({
            "process.env.NODE_ENV": JSON.stringify("production"),
          }),
          terser(),
        ]
      : [],
  ),
  external: ["react", "react-dom/server.browser", "prop-types", "cesium"],
};
