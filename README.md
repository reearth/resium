![Resium](https://raw.githubusercontent.com/reearth/resium/main/docs/public/resium.gif)

[![ci](https://github.com/reearth/resium/actions/workflows/ci.yml/badge.svg)](https://github.com/reearth/resium/actions/workflows/ci.yml) [![npm version](https://badge.fury.io/js/resium.svg)](https://badge.fury.io/js/resium)

React component library for 🌏[Cesium](https://cesium.com/)

- **Declarative Cesium** 🌏: create a highly maintainable Cesium app in React
- **Blazing Fast Development** 👨: HMR works perfectly
- **Strongly Typed** 💪: TypeScript is fully supported

[**Documentation**](https://resium.reearth.io) | [**Installation**](https://resium.reearth.io/installation) | [**Getting Started**](https://resium.reearth.io/getting_started) | [**Guide**](https://resium.reearth.io/guide) | [**Examples**](https://resium.reearth.io/examples/)

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

![Screenshot](https://raw.githubusercontent.com/reearth/resium/main/docs/public/screenshot.png)

![Usage](https://raw.githubusercontent.com/reearth/resium/main/docs/public/usage.gif)

## Contributors

If you want to contribute, follow the [documentation](https://resium.reearth.io/contribution).

### Code Contributors

This project exists thanks to all the people who contribute.

<a href="https://github.com/reearth/resium/graphs/contributors"><img src="https://contrib.rocks/image?repo=reearth/resium" /></a>

## License

[MIT License](LICENSE)
