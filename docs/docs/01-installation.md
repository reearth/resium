---
id: installation
title: Installation
---

# Installation

## 1. Install Cesium and Resium

You can install `cesium` and `resium` from npm.

```bash
npm install --save cesium resium
# or
yarn add cesium resium
```

**Note for TypeScript users**: `@types/cesium` is no longer needed because Resium supports Cesium's official type definition.

## 2. Set up bundler

To use Cesium in webpack environment, preparation is a bit more necessary, because Cesium includes many asset files and uses AMD as module system.

There are some choices. Choose one.

1. If you are using `create-react-app`, [craco-cesium](https://github.com/reearth/craco-cesium) is recommended (easier, [example project is here](https://github.com/reearth/resium/tree/main/example/create-react-app))
2. [webpack: Copy whole Cesium files and load Cesium in HTML](#2-2-webpack-copy-whole-cesium-files-and-load-cesium-in-html)
3. [webpack: Copy only asset files and bundle Cesium normaly except assets](#2-3-webpack-copy-only-asset-files-and-bundle-cesium-normaly-except-assets)
4. [Vite](#2-4-vite) (**🚀 easiest and fastest to build as of 2021**)
## 2-2. webpack: Copy whole Cesium files and load Cesium in HTML

See also: [example project](https://github.com/reearth/resium/tree/main/example/webpack)

### 2-2-1. Install webpack plugins

```bash
npm install --save-dev copy-webpack-plugin html-webpack-plugin html-webpack-tags-plugin
# or
yarn add copy-webpack-plugin html-webpack-plugin html-webpack-tags-plugin
```

Then, edit your webpack configuration.

### 2-2-2. Add `cesium` to externals

Cesium will be loaded in HTML. Notify it to webpack.

```js
{
  externals: {
    cesium: "Cesium"
  }
}
```

When cesium is loaded, webpack uses `window.Cesium` instead of loading source files.

### 2-2-3. Add plugins

- Copy whole Cesium files at build time with copy-webpack-plugin
- Add tags to index.html to load JS and CSS with html-webpack-tags-plugin
- Notify Cesium to its path with webpack define plugin

```js
const webpack = require("webpack");
const HtmlPlugin = require("html-webpack-plugin");
const HtmlTagsPlugin = require("html-webpack-tags-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
```

```js
{
  plugins: [
    // ...
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "node_modules/cesium/Build/Cesium",
          to: "cesium",
        },
      ],
    }),
    new HtmlPlugin(),
    new HtmlTagsPlugin({
      append: false,
      tags: ["cesium/Widgets/widgets.css", "cesium/Cesium.js"],
    }),
    new webpack.DefinePlugin({
      CESIUM_BASE_URL: JSON.stringify("/cesium"),
    }),
  ]
}
```

Note: If `publicPath` in webpack config is changed, `CESIUM_BASE_URL` may have to be changed also.

## 2-3. webpack: Copy only asset files and bundle Cesium normaly except assets

In this way, imported and used Cesium's source codes are bundled to your app's source code with webpack.

See also: [example project](https://github.com/reearth/resium/tree/main/example/webpack2) and [Cesium's official example](https://github.com/AnalyticalGraphicsInc/cesium-webpack-example)

### 2-3-1. Install webpack plugins and loaders

```
npm install --save-dev copy-webpack-plugin css-loader style-loader url-loader
# or
yarn add --dev copy-webpack-plugin css-loader style-loader url-loader
```

Then, edit your webpack configuration.

### 2-3-2. Add plugins

- Copy only asset files at build time
- Cesium refers to `CESIUM_BASE_URL` to find asset files

```js
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
```

```js
{
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "node_modules/cesium/Build/Cesium/Workers", to: "Workers" },
        { from: "node_modules/cesium/Build/Cesium/ThirdParty", to: "ThirdParty" },
        { from: "node_modules/cesium/Build/Cesium/Assets", to: "Assets" },
        { from: "node_modules/cesium/Build/Cesium/Widgets", to: "Widgets" },
      ],
    }),
    new webpack.DefinePlugin({
      CESIUM_BASE_URL: JSON.stringify(""),
    }),
  ];
}
```

Note: If `publicPath` in webpack config is changed, `CESIUM_BASE_URL` may have to be changed also.

### 2-3-3. Add loaders and load CSS file in the entry JS

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

### 2-3-4. Load CSS in your app

Add link tag in head of index.html to load CSS:

```html
<link rel="stylesheet" href="/Widgets/widgets.css" />
```

Note: if you have changed `CESIUM_BASE_URL` (at step 2-3-4), you may also have to change this.

Tips: Using `html-webpack-tags-plugin` is also OK!

:::caution

[As reported on GitHub issues](https://github.com/CesiumGS/cesium/issues/9212), adding import statement to your entry JS (e.g. index.js) does not work for now:

```js
import "cesium/Widgets/widgets.css";
```

:::

## 2-4. Vite

[Vite](https://vitejs.dev/) is one of next generation JavaScript bundler. [vite-plugin-cesium](https://github.com/nshen/vite-plugin-cesium) is recommended to use Cesium with Vite.

See also: [example project](https://github.com/reearth/resium/tree/main/example/vite)

Init a new vite project (select "react"):

```bash
npm init vite example
# OR yarn create vite example
```

Then install Cesium, Resium, and [vite-plugin-cesium](https://github.com/)

```bash
npm install --save cesium resium
npm install --save-dev vite-plguin-cesium
# OR yarn add cesium resium; yarn add --dev vite-plguin-cesium
```

Then edit `vite.config.js`:

```js
import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import cesium from 'vite-plugin-cesium';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), cesium()]
})
```

That's all!

## 3. Ready

Everything is ready! You can import Cesium directly:

```js
import { Cartesian3 } from "cesium";
```

Warning: `import Cesium from "cesium";` may be cause an error, as default is not exported from Cesium.

Advance to [Getting Started](/getting_started).
