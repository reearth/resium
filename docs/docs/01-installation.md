---
id: installation
title: Installation
---

# Installation

## 1. Install Cesium and Resium

You can install `cesium` and `resium` from npm.

```sh
npm install --save cesium resium
# or
yarn add cesium resium
```

**Note for TypeScript users**: `@types/cesium` is no longer needed because Resium supports Cesium's official type definition.

## 2. Set up bundler

To use Cesium in webpack environment, preparation is a bit more necessary, because Cesium includes many asset files and uses AMD as module system.

There are some choices. Choose one.

1. If you are using `create-react-app`, [craco-cesium](https://github.com/darwin-education/craco-cesium) is recommended (easiest)
2. [webpack: Copy whole Cesium files and load Cesium in HTML](#2-2-copy-whole-cesium-files-and-load-cesium-in-html) (easier)
3. [webpack: Copy only asset files and load Cesium partially](#2-3-copy-only-asset-files-and-load-cesium-partially)
4. vite: [vite-plugin-cesium](https://github.com/nshen/vite-plugin-cesium) is recommended

## 2-2. webpack: Copy whole Cesium files and load Cesium in HTML

See also: [example project](https://github.com/darwin-education/resium/tree/master/example)

### 2-2-1. Install webpack plugins

```
npm install --save-dev copy-webpack-plugin html-webpack-plugin html-webpack-include-assets-plugin
# or
yarn add copy-webpack-plugin html-webpack-plugin html-webpack-include-assets-plugin
```

Then, edit your webpack configuration.

### 2-2-2. Add `cesium` to externals

Cesium will be loaded in HTML. Notify it to webpack.

```js
{
  externals: {
    cesium: "Cesium";
  }
}
```

When cesium is loaded, webpack uses `window.Cesium` instead of loading source files.

### 2-2-3. Add copy-webpack-plugin

Copy whole Cesium files at build time.

```js
const CopyWebpackPlugin = require("copy-webpack-plugin");
```

```js
{
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "node_modules/cesium/Build/Cesium",
          to: "cesium",
        },
      ],
    }),
  ];
}
```

`node_modules/cesium/Build/Cesium` is already minified. If you want to debug Cesium, use unminified version: `node_modules/cesium/Build/CesiumUnminified`.

The recommended way is to load the minified version in production mode, and the unminified version in development mode.

```js
module.exports = (env, argv) => {
  const prod = argv.mode === "production";

  return {
    // ...
    plugins: [
      // ...
      new CopyWebpackPlugin({
        patterns: [
          {
            from: `node_modules/cesium/Build/Cesium${prod ? "" : "Unminified"}`,
            to: "cesium",
          },
        ],
      }),
    ],
  };
};
```

But Cesium is a heavy library, so you can also use the minified version even in development mode.

### 2-2-4. Add html-webpack-plugin and html-webpack-include-assets-plugin

Load Cesium js and css files in HTML.

```js
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackIncludeAssetsPlugin = require("html-webpack-include-assets-plugin");
```

```js
{
  plugins: [
    // ...
    new HtmlWebpackPlugin(),
    new HtmlWebpackIncludeAssetsPlugin({
      append: false,
      assets: ["cesium/Widgets/widgets.css", "cesium/Cesium.js"],
    }),
  ];
}
```

### 2-2-5. Add definition of CESIUM_BASE_URL

Cesium refers to `CESIUM_BASE_URL` to find asset files.

```js
const webpack = require("webpack");
```

```js
{
  plugins: [
    new webpack.DefinePlugin({
      CESIUM_BASE_URL: JSON.stringify("/cesium"),
    }),
  ];
}
```

Note: If `publicPath` in webpack config is changed, CESIUM_BASE_URL may have to be changed also.

## 2-3. webpack: Copy only asset files and load Cesium partially

In this way, imported and used Cesium's source codes are bundled to your app's source code with webpack.

See also: [example project](https://github.com/darwin-education/resium/tree/master/example/webpack.config.2.js) and [Cesium's official example](https://github.com/AnalyticalGraphicsInc/cesium-webpack-example)

### 2-3-1. Install webpack plugins and loaders

```
npm install --save-dev copy-webpack-plugin css-loader style-loader url-loader strip-pragma-loader
# or
yarn add --dev copy-webpack-plugin css-loader style-loader url-loader strip-pragma-loader
```

Then, edit your webpack configuration.

### 2-3-2. Define Cesium path

```js
const cesiumSource = "node_modules/cesium/Source";
const cesiumWorkers = "../Build/Cesium/Workers";
```

Note: if you changed `context` in webpack config, you may have to change cesiumSource also to indicate node_modules path exactly. e.g. if context is `path.join(__dirname, "src")`, cesiumSource may be `../node_modules/cesium/Source`.

### 2-3-3. Add aliases

Be careful in order. Reversing them does not work.

```js
{
  resolve: {
    alias: {
      cesium$: 'cesium/Cesium',
      cesium: 'cesium/Source'
    }
  }
}
```

### 2-3-4. Add copy-webpack-plugin

Copy only asset files at build time.

```js
const CopyWebpackPlugin = require("copy-webpack-plugin");
```

```js
{
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(cesiumSource, cesiumWorkers),
          to: "Workers",
        },
        {
          from: path.join(cesiumSource, "Assets"),
          to: "Assets",
        },
        {
          from: path.join(cesiumSource, "Widgets"),
          to: "Widgets",
        },
      ],
    }),
  ];
}
```

### 2-3-5. Add definition of CESIUM_BASE_URL

Cesium refers to `CESIUM_BASE_URL` to find asset files.

```js
const webpack = require("webpack");
```

```js
{
  plugins: [
    // ...
    new webpack.DefinePlugin({
      CESIUM_BASE_URL: JSON.stringify(""),
    }),
  ];
}
```

Note: If `publicPath` in webpack config is changed, CESIUM_BASE_URL may have to be changed also.

### 2-3-6. Add loaders and load CSS file in the entry JS

```js
{
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|gif|jpg|jpeg|svg|xml|json)$/,
        use: ["url-loader"],
      },
    ];
  }
}
```

In your entry JS (e.g. index.js):

```js
import "cesium/Widgets/widgets.css";
```

### 2-3-7. Remove extra code in production build

This is optional, but it is recommended for production build.

```js
module.exports = (env, argv) => {
  const prod = argv.mode === "production";

  return {
    // ...
    module: {
      rules: [
        // ...
        ...[
          prod
            ? {
                // Strip cesium pragmas
                test: /\.js$/,
                enforce: "pre",
                include: path.resolve(__dirname, cesiumSource),
                use: [
                  {
                    loader: "strip-pragma-loader",
                    options: {
                      pragmas: {
                        debug: false,
                      },
                    },
                  },
                ],
              }
            : {},
        ]
    }
  }
}
```

## 3. Ready

Everything is ready! You can import Cesium directly:

```js
import { Cartesian3 } from "cesium";
```

Warning: `import Cesium from "cesium";` may be cause an error, as default is not exported from Cesium.

Advance to [Getting Started](/getting_started).

Pro tip: you can enable HMR (hot module replacement) with [react-refresh-webpack-plugin](https://github.com/pmmmwh/react-refresh-webpack-plugin).
