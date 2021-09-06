---
id: migration
title: Migration Guide
---

# Migration Guide

## v1.12

Changes related to TypeScript type definitions are main, but some component properties are changed also.

### Official type definition is supported!

Now Cesium's official TypeScript type definitions since Cesium v1.70 is used, so `@types/cesium` is no longer used. You can uninstall it.

### Some component properties are fixed

Some components' properties are mistakenly typed and they are fixed, but that includes some breaking changes. Some properties are changed Cesium prop type: e.g. Cesium props -> Cesium read-only props.

### `useCesium` hook is no longer needed a type argument

You can still add a type argument, but you can also omit it.

```ts
import { Viewer } from "cesium";
import { useCesium } from "resium";

// before
const { viewer } = useCesium<{ viewer?: Viewer }>();

// after
const { viewer } = useCesium();
```

## v1.9

Resium are fully reimplemented with React Hooks. There are possibilities that the behavior has changed in edge cases.

And some properties and types are changed, removed, or renamed. For details, please check [changelog](https://github.com/reearth/resium/tree/master/CHANGELOG.md).

## v1.0

### Resium are fully reimplemented

New component lifecycle and new React Context API in React v16.3 are supported.

There are possibilities that the behavior has changed in edge cases.

### Changed: Entity description

Children of Entity component are no longer rendered as description. Use `EntityDescription` component instead.

Before:

```jsx
import { Viewer, Entity } from "resium";

const Component = () => (
  <Viewer>
    <Entity>
      <h1>Hello, world</h1>
      <p>This is test</p>
    </Entity>
  </Viewer>
);
```

After:

```jsx
import { Viewer, Entity, EntityDescription } from "resium";

const Component = () => (
  <Viewer>
    <Entity>
      <EntityDescription>
        <h1>Hello, world</h1>
        <p>This is test</p>
      </EntityDescription>
    </Entity>
  </Viewer>
);
```

Now only `EntityDescription` depends on `react-dom`.

### Decrepated: PropType

PropType is no longer used. TypeScript is recommended.

### Renamed / Decrepated: properties

See [CHANGELOG](https://github.com/reearth/resium/tree/master/CHANGELOG.md).

#### `url` or `czml` prop of Kml/Czml/GeoJsonDataSource

They have been integrated to `data` prop. Now `data` prop accepts URL string, Cesium.Resouce, and data object.

#### `onMount`, `onUpdate` and `onUnmount` prop

`onMount`, `onUpdate` and `onUnmount` prop have been deprecated as they violate React's custom. Use `ref` prop instead.

Before:

```jsx
const Component = () => (
  <Viewer
    onMount={viewer => {
      // some code
    }}
  />
);
```

After:

```jsx
class Component extends React.PureComponent {
  ref = React.createRef();

  componentDidMount() {
    if (ref.current) {
      const viewer = ref.current.cesiumElement;
      // some code
    }
  }

  render() {
    return (
      <Viewer ref={this.ref} />
    );
  }
);
```
