import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import replace from "@rollup/plugin-replace";
import { terser } from "rollup-plugin-terser";
import sourcemaps from "rollup-plugin-sourcemaps";
import cleanup from "rollup-plugin-cleanup";

import pkg from "./package.json";

const env = process.env.NODE_ENV;

export default {
  input: "./src/index.ts",
  output: {
    format: ["es", "cjs"].indexOf(env) >= 0 ? env : "umd",
    file:
      env === "es"
        ? pkg.module
        : env === "cjs"
        ? pkg.main
        : `dist/resium${env === "production" ? ".min" : ""}.js`,
    globals: {
      react: "React",
      "react-dom": "ReactDOM",
      "react-dom/server.browser": "ReactDOMServer",
      cesium: "Cesium",
    },
    name: "Resium",
    sourcemap: true,
  },
  plugins: [
    typescript({
      tsconfigOverride: {
        compilerOptions: {
          declaration: env === "es", // only compile defs in es format
          declarationDir: "dist/types",
        },
      },
      useTsconfigDeclarationDir: true,
      check: false, // exec type check with "yarn run type" before building
      exclude: [
        "./src/**/story/**/*",
        "./src/**/story.tsx",
        "./src/**/*.stories.tsx",
        "./src/**/*.test.ts",
        "./src/**/*.test.tsx",
        "./docs/**/*",
        "./__mocks__/**/*",
      ],
    }),
    resolve(),
    commonjs(),
    sourcemaps(),
    cleanup({
      comments: ["license", "jsdoc"],
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    }),
    ...(env === "production"
      ? [
          replace({
            "process.env.NODE_ENV": JSON.stringify("production"),
          }),
          terser(),
        ]
      : []),
  ],
  external: [...Object.keys(pkg.peerDependencies || {}), "react-dom/server.browser"],
};
