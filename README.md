# resium

[![Build Status](https://travis-ci.org/darwin-education/resium.svg?branch=master)](https://travis-ci.org/darwin-education/resium) [![npm version](https://badge.fury.io/js/cesium-react.svg)](https://badge.fury.io/js/cesium-react)

React components for 🌏 [Cesium](https://cesiumjs.org/) (ex- cesium-react)

```
npm install resium
```

```jsx
<Viewer full>
  <Entity
    description="test"
    name="tokyo"
    point={{ pixelSize: 10 }}
    position={Cartesian3.fromDegrees(139.767052, 35.681167, 100)}
   />
</Viewer>
```

![Screenshot](docs/resouces/screenshot.png)

**WARNING:** `master` branch now includes breaking changes for v1 (not yet released).

If you want to use beta versions, use `npm i resium@next`.

## Documentation

The documentation is currently under construction. Refer to [storybook](src/stories).

```bash
git clone https://github.com/darwin-education/resium.git
cd resium
yarn
yarn run storybook # run storybook
```

## Getting Started

### Option1: copying cesium files without bundling

See also: [example](example)

```bash
npm i --save resium cesium
npm i --save-dev copy-webpack-plugin html-webpack-plugin html-webpack-include-assets-plugin
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

### Option2: [Cesium official way](https://cesiumjs.org/tutorials/cesium-and-webpack/)

After [the article](https://cesiumjs.org/tutorials/cesium-and-webpack/), install resium:

```sh
npm i resium
```

And then, add aliases to webpack config as bellow:

```js
alias: {
  cesium$: "cesium/Cesium",
  cesium: "cesium/Source"
}
```

Notes:

- Be careful in order.
- `cesium: path.resolve(__dirname, cesiumSource)` is unnecessary.

Everything is ready!

## Contributing

Welcome PRs and issues.

## License

[MIT License](LICENSE)
