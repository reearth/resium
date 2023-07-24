---
id: installation
title: Installation
---

# Installation

Install `cesium` and `resium`:

```bash
npm install --save cesium resium
# OR
yarn add cesium resium
```

:::note
**For TypeScript users**: `@types/cesium` is no longer needed because Resium supports Cesium official type definition.
:::

Then, to use Cesium in webpack environment, preparation is a bit more necessary, because Cesium includes many asset files.

There are some choices. Choose one.

- [create-react-app](#1-create-react-app) (not recommended)
- [Next.js](#2-nextjs)
- webpack
   - [Copy whole Cesium files and load Cesium in HTML](#3-webpack-copy-whole-cesium-files-and-load-cesium-in-html)
   - [Copy only asset files and bundle Cesium normaly except assets](#4-webpack-copy-only-asset-files-and-bundle-cesium-normaly-except-assets)
- [Vite](#5-vite) (**🚀 recommended**)

When you finish set up, you can import Cesium:

```js
import { Cartesian3 } from "cesium";
```

Then advance to [Getting Started](/getting_started).

:::caution
`import Cesium from "cesium";` causes an error, as default is not exported from Cesium. Use `import * as Cesium from "cesium";`.
:::

## 1. create-react-app

:::caution
Currently create-react-app is not developed actively and craco-cesium is not maintained. We recommend using [Vite](#5-vite) instead of.
:::

If you are using create-react-app, [craco-cesium](https://github.com/reearth/craco-cesium) is recommended.

Refer to [the documentation](https://github.com/reearth/craco-cesium#craco-cesium) and [example project](https://github.com/reearth/resium/tree/main/example/create-react-app).

## 2. Next.js

See also: [example project](https://github.com/reearth/resium/tree/main/examples/next)

The steps for initializing Next.js are not explained here. We will assume that your Next.js project already exists.


### 2-1. Edit `next.config.js`

Add a webpack define pugin:

```js
const webpack = require('webpack');

module.exports = {
  reactStrictMode: true,
  webpack: config => {
    config.plugins.push(
      new webpack.DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify('cesium'),
      }),
    );
    return config;
  }
}
```

### 2-2. Set up script to copy Cesium files automatically

Install `symlink-dir`:

```bash
npm install --save-dev symlink-dir
# OR
yarn add --dev symlink-dir
```

:::note
`ln -s` commands is also OK, but I recommend `symlink-dir` because it supports multi-platform.
:::

Then edit `package.json`:

```js title="package.json"
{
  "scripts": {
    "postinstall": "symlink-dir node_modules/cesium/Build/Cesium public/cesium"
  }
}
```

Finally execute postinstall scripts to create the symbolic link:

```bash
npm install
# OR
yarn
```

Adding `/public/cesium` to `.gitignore` is good:

```markup title=".gitignore"
/public/cesium
```

:::note
Using `copy-webpack-plugin` in `next.config.js` does not work because the copied files won't be delivered correctly from the server.
:::

### 2-3: Implement your component

Cesium cannot be used in SSR, so components using Cesium should be separated from page components. Define your Cesium component in any location other than `pages` directory.

```jsx title="components/Cesium.js"
import { Viewer } from 'resium'

export default function Cesium() {
  return (
    <Viewer full />
  )
}
```

Then dynamically import components using Cesium with `next/dynamic`. Don't forget `{ ssr: false }` option. Also load Cesium CSS file with `next/head`.

```jsx title="pages/index.js"
import Head from 'next/head'
import dynamic from 'next/dynamic'

const Cesium = dynamic(
  () => import('../components/Cesium'),
  { ssr: false }
)

export default function Home() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="cesium/Widgets/widgets.css" />
      </Head>
      <Cesium />
    </>
  )
}
```

If you want to import a TypeScript file (`.tsx`), `() => import('../components/Cesium.tsx')` works instead.

That's all!

## 3. webpack: Copy whole Cesium files and load Cesium in HTML

See also: [example project](https://github.com/reearth/resium/tree/main/example/webpack)

### 3-1. Install webpack plugins

```bash
npm install --save-dev copy-webpack-plugin html-webpack-plugin html-webpack-tags-plugin
# OR
yarn add copy-webpack-plugin html-webpack-plugin html-webpack-tags-plugin
```

Then, edit your webpack configuration.

### 3-2. Add `cesium` to externals

Cesium will be loaded in HTML. Notify it to webpack.

```js
{
  externals: {
    cesium: "Cesium"
  }
}
```

When cesium is loaded, webpack uses `window.Cesium` instead of loading source files.

### 3-3. Add plugins

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
    new HtmlPlugin({
      template: "index.html",
    }),
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

## 4. webpack: Copy only asset files and bundle Cesium normaly except assets

In this way, imported and used Cesium source codes are bundled to your app's source code with webpack.

See also: [example project](https://github.com/reearth/resium/tree/main/example/webpack2) and [Cesium official example](https://github.com/AnalyticalGraphicsInc/cesium-webpack-example)

### 4-1. Install webpack plugins and loaders

```bash
npm install --save-dev html-webpack-plugin copy-webpack-plugin css-loader style-loader url-loader
# OR
yarn add --dev html-webpack-plugin copy-webpack-plugin css-loader style-loader url-loader
```

Then, edit your webpack configuration.

### 4-2. Add plugins

- Copy only asset files at build time
- Cesium refers to `CESIUM_BASE_URL` to find asset files

```js
const webpack = require("webpack");
const HtmlPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
```

```js
{
  plugins: [
    new HtmlPlugin({
      template: "index.html",
    }),
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

### 4-3. Add loaders and load CSS file in the entry JS

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

### 4-4. Load CSS in your app

Add a link tag in head of your `index.html` to load CSS:

```html
<link rel="stylesheet" href="/Widgets/widgets.css" />
```

Note: if you have changed `CESIUM_BASE_URL`, you may also have to change this.

Tips: Using `html-webpack-tags-plugin` is also OK!

:::caution

[As reported on GitHub issues](https://github.com/CesiumGS/cesium/issues/9212), adding import statement to your entry JS (e.g. index.js) does not work for now:

```js
import "cesium/Widgets/widgets.css";
```

:::

## 5. Vite

[Vite](https://vitejs.dev/) is one of next generation JavaScript bundler. [vite-plugin-cesium](https://github.com/nshen/vite-plugin-cesium) is recommended to use Cesium with Vite.

See also: [example project](https://github.com/reearth/resium/tree/main/example/vite)

Init a new vite project (select "react"):

```bash
npm init vite example
# OR
yarn create vite example
```

Then install Cesium, Resium, and [vite-plugin-cesium](https://github.com/)

```bash
npm install --save cesium resium
npm install --save-dev vite-plugin-cesium
# OR
yarn add cesium resium
yarn add --dev vite-plugin-cesium
```

Then edit `vite.config.js`:

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import cesium from 'vite-plugin-cesium';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), cesium()]
})
```

That's all!
