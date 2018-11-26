# resium

[![Build Status](https://travis-ci.org/darwin-education/resium.svg?branch=master)](https://travis-ci.org/darwin-education/resium) [![npm version](https://badge.fury.io/js/cesium-react.svg)](https://badge.fury.io/js/cesium-react)

React components for 🌏 [Cesium](https://cesiumjs.org/) (ex- cesium-react)

```
npm install resium
```

**WARN:** `master` branch now includes braking changes for v1 (not yet released).

```js
import React from "react";
import { Cartesian3 } from "cesium";
import { Viewer, Entity } from "resium";

export default class Cesium extends React.PureComponent {

  render() {
    return (
      <Viewer full>
        <Entity
          name="tokyo"
          position={Cartesian3.fromDegrees(139.767052, 35.681167, 100)}
          point={{ pixelSize: 10 }}>
          test
        </Entity>
      </Viewer>
    );
  }

}
```

![Screenshot](docs/screenshot.png)

Available components:

- `<Viewer>`
- `<CesiumWidget>`
- `<Scene>`
- `<Camera>`
- `<Entity>`
- `<CustomDataSource>`
- `<CzmlDataSource>`
- `<GeoJsonDataSource>`
- `<KmlDataSource>`
- `<Primitive>`
- `<PointPrimitive>`
- `<PointPrimitiveCollection>`
- `<ScreenSpaceEvent>`
- `<ScreenSpaceEventHandler>`
- `<ScreenSpaceCameraController>`
- `<ImageryLayer>`
- ...

## Documentation

The documentation is currently under construction. Refer to [storybook](src/stories).

```bash
git clone https://github.com/darwin-education/resium.git
cd resium
yarn
yarn run storybook # run storybook
```

## Getting Started

### Option1: webpack + copy-webpack-plugin + html-webpack-plugin  + html-webpack-include-assets-plugin

See also: [example](example)

```bash
npm i --save resium cesium
npm i --save-dev copy-webpack-plugin html-webpack-plugin html-webpack-include-assets-plugin --save-dev
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

**⚠ Unconfirmed**

After the article:

```bash
npm i resium
```

```js
module.exports = {
  // ...
  alias: {
    cesiumSource: "cesium",
    cesium: "cesium/Cesium"
  },
  // ...
}
```

Then replace as bellow:

```js
import Color from "cesium/Core/Color";
```

to

```js
import Color from "cesiumSource/Core/Color";
```

## TODO

Refer to GitHub issues.

## Contributing

Welcome PRs and issues.

## License

[MIT License](LICENSE)
