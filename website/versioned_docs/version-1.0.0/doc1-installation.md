---
id: version-1.0.0-doc1
title: Installation
sidebar_label: Installation
original_id: doc1
---

## Case1: webpack + copy-webpack-plugin + html-webpack-plugin + html-webpack-include-assets-plugin

```bash
$ npm i resium cesium copy-webpack-plugin html-webpack-plugin html-webpack-include-assets-plugin --save-dev
```

webpack.config.js:

```js
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');

module.exports = (env, args) => {
  const prod = args.mode === "production";

  return {
    externals: {
      cesium: 'Cesium'
    },
    plugins: {
      new CopyWebpackPlugin([
        {
          from: `node_modules/cesium/Build/Cesium${prod ? '' : 'Unminified'}`,
          to: 'cesium'
        }
      ]),
      new HtmlWebpackPlugin(),
      new HtmlWebpackIncludeAssetsPlugin({
        append: false,
        assets: [
          'cesium/Widgets/widgets.css',
          'cesium/Cesium.js'
        ]
      }),
      new webpack.DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify('cesium')
      })
      // ...
    }
    // ...
  };
}
```

---

## Case2: Cesium official way(under construction)



---

## Case3: Create React App(under construction)