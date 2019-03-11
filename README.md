![Resium](https://raw.githubusercontent.com/darwin-education/resium/master/docs/resources/resium.gif)

[![Build Status](https://travis-ci.org/darwin-education/resium.svg?branch=master)](https://travis-ci.org/darwin-education/resium) [![npm version](https://badge.fury.io/js/resium.svg)](https://badge.fury.io/js/resium)

React components for 🌏[Cesium](https://cesiumjs.org/)

- **Declarative Cesium** 🌏: high maintainable Cesium app with React
- **Blazing Fast Development** 👨: HMR works perfectly
- **Strongly Typed** 💪: TypeScript is fully supported

[**Documentation**](https://resium.darwineducation.com) | [**Installation**](https://resium.darwineducation.com/installation) | [**Getting Started**](https://resium.darwineducation.com/getting_started) | [**Guide**](https://resium.darwineducation.com/guide) | [**Examples**](https://resium.darwineducation.com/examples/)

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

![Usage](https://raw.githubusercontent.com/darwin-education/resium/master/docs/resources/usage.gif)

## When you have a question...

Please don't send question e-mail as possible. Please use [GitHub issues](https://github.com/darwin-education/resium/issues).

## Contribution

See [documentation](https://resium.darwineducation.com/contribution).

## License

[MIT License](LICENSE)
