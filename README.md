![Resium](https://raw.githubusercontent.com/darwin-education/resium/master/docs/resources/resium.gif)

[![Build Status](https://travis-ci.org/darwin-education/resium.svg?branch=master)](https://travis-ci.org/darwin-education/resium) [![npm version](https://badge.fury.io/js/cesium-react.svg)](https://badge.fury.io/js/cesium-react)

React components for 🌏 [Cesium](https://cesiumjs.org/) (ex- cesium-react)

[**Documantation**](https://resium.darwineducation.com) | [**Installation**](https://resium.darwineducation.com/installation) | [**Getting Started**](https://resium.darwineducation.com/getting_startef) | [**Guide**](https://resium.darwineducation.com/guide)

## Features

- **Declarative Cesium**: high maintainable Cesium app with React
- **Blazing Fast Development**: HMR works perfectly
- **Strongly Typed**: TypeScript is fully supported

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

![Screenshot](https://raw.githubusercontent.com/darwin-education/resium/master/docs/resources/screenshot.png)

**WARNING:** `master` branch now includes breaking changes for v1 (not yet released). If you want to use beta versions, use `npm i resium@next`.

## Contribution

See [documentation](https://resium.darwineducation.com/contribution).

## License

[MIT License](LICENSE)
