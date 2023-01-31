![Resium](https://raw.githubusercontent.com/reearth/resium/master/docs/static/resium.gif)

![main](https://github.com/reearth/resium/workflows/main/badge.svg) [![npm version](https://badge.fury.io/js/resium.svg)](https://badge.fury.io/js/resium) [![Financial Contributors on Open Collective](https://opencollective.com/resium/all/badge.svg?label=financial+contributors)](https://opencollective.com/resium)

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

![Screenshot](https://raw.githubusercontent.com/reearth/resium/master/docs/static/screenshot.png)

![Usage](https://raw.githubusercontent.com/reearth/resium/master/docs/static/usage.gif)

## Contributors

If you want to contribute, follow the [documentation](https://resium.reearth.io/contribution).

### Code Contributors

This project exists thanks to all the people who contribute. 
<a href="https://github.com/reearth/resium/graphs/contributors"><img src="https://opencollective.com/resium/contributors.svg?width=890&button=false" /></a>

### Financial Contributors

Become a [financial contributor](https://opencollective.com/resium) and help us sustain our community.

#### Individuals

Any donations, big and small, are welcome!

[![Resium Backer](https://opencollective.com/resium/backer.svg)](https://opencollective.com/resium)

#### Organizations

Support this project with your organization. Your logo will show up here with a link to your website!

[![Resium Sponsor](https://opencollective.com/resium/sponsor.svg)](https://opencollective.com/resium)

## License

[MIT License](LICENSE)
