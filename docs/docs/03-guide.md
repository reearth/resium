---
id: guide
title: Guide
---

# Guide

## Component Lifecycle

Resium brings React's component lifecycle to Cesium. The relationship between Cesium elements and React's lifecycle is as follows:

1. Render: Nothing is rendered, as a cesium element is not initialized yet.
2. Initalize Cesium element: An Cesium element is initialized, and it is added to its parent if the parent exists.
3. Re-render: After Cesium element's initalization, children of the component are rendered. DOM never be rendered except root components (Viewer and CesiumWidget).
4. Update: Changed properties of the Cesium element are updated. If "Cesium read-only properties" are changed, the Cesium element will be reinitialized.
5. Unmount: The Cesium element is destroyed.

## Context and component availability

Some components provide some Cesium elements to children via React's context API. Many components use the closest component's context. If the context does not exists, components are not rendered.

All components except root components have to be mounted inside root components. Root components are `Viewer` and `CesiumWidget`.

For example:

If `Entity` component is mounted under `Viewer` component, an Entity object is added to `Viewer#entities`.

```jsx
<Viewer>
  <Entity />
</Viewer>
```

is equivalent to

```js
const viewer = new Cesium.Viewer();
const entity = new Cesium.Entity();

viewer.entities.add(entity);
```

If `Entity` component is mounted under `CustomDataSource` component, an Entity object is added to `CustomDataSource#entities`. At that time, the CustomDataSource object is added to `Viewer#dataSources`. Of course `CustomDataSource` component should be under `Viewer` component.

```jsx
<Viewer>
  <CustomDataSource>
    <Entity />
  </CustomDataSource>
</Viewer>
```

is equivalent to

```js
const viewer = new Cesium.Viewer();
const dataSource = new Cesium.CustomDataSource();
const entity = new Cesium.Entity();

customDataSource.entities.add(entity);
viewer.dataSources.add(dataSource);
```

Such cases are also in other components. For details, refer to "Availability" in the document of each component.

## Component location

Please place each component as close as possible under Viewer or CesiumWidget component to avoid extra rendering. Make component hierarchy shallow as possible.

Exception are:

- `Entity` > `*Graphics`
- `Entity` > `EntityDescription`
- `ScreenSpaceEventHandler` > `ScreenSpaceEvent`
- `xCollection` > `x`
- `CustomDataSource` > `Entity`
- `GroundPrimitiveCollection` > `GroundPrimitive`

e.g.: `Scene` > `Camera` or `Camera` > `Entity` is not recommended.

```jsx
// not recomended
<Viewer>
  <Scene>
    <Camera>
      <Entity />
    </Camera>
  </Scene>
</Viewer>
```

```jsx
// recomended
<Viewer>
  <Scene />
  <Camera />
  <Entity />
</Viewer>
```

## Properties

Each components of resium have 4 kinds of properties as bellow.

### Cesium properties

"Cesium property" is a property derived from Cesium. Each properties are correspond to a property of the cesium element. All "cesium properties" are variable, so when they are updated in React component, the corresponding properties will be updated seamlessly.

### Cesium read-only properties

"Cesium read-only property" is also a property derived from Cesium, but it is immutable. They are available only when initializing the element.

**If "Cesium read-only props" are changed in React component, the Cesium element will be destroyed and reinitialized.** It can be a cause of performance deterioration. Please use carefully to avoid changing as much as possible.

For example, `imageryProvider` property of `ImageryLayer` component is a "Cesium read-only property". So in the following code, ImageryLayer is reinitialized in every rendering time!

```jsx
const Example = () => (
  <Viewer>
    <ImageryLayer
      imageryProvider={
        new ArcGisMapServerImageryProvider({
          url: "//services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer",
        })
      }
    />
  </Viewer>
);
```

If `imageryProvider` property is constant, The following is recommended.

```jsx
import React from "react";
import { Viewer, ImageryLayer } from "resium";
import { ArcGisMapServerImageryProvider } from "cesium";

const imageryProvider = new ArcGisMapServerImageryProvider({
  url: "//services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer",
});

const ExampleComponent = () => (
  <Viewer>
    <ImageryLayer imageryProvider={imageryProvider} />
  </Viewer>
);
```

If `imageryProvider` property is variable, use `useMemo` hooks:

```jsx
import React, { useMemo } from "react";
import { Viewer, ImageryLayer } from "resium";
import { ArcGisMapServerImageryProvider } from "cesium";

const ExampleComponent = ({ url }) => {
  const imageryProvider = useMemo(() => new ArcGisMapServerImageryProvider({ url }), [url]);

  return (
    <Viewer>
      <ImageryLayer imageryProvider={imageryProvider} />
    </Viewer>
  );
};
```

### Cesium events

"Cesium event" is a event propery of Cesium element. It can be used in the same way as normal React component events.

They are renamed according to React's custom. For example, `Viewer#trackedEntityChanged` => `onTrackedEntityChange`.

### Other properties

Some components have convenient properties that do not exist in the Cesium element. They can be used in the same way as normal React component properties.

## Accessing to a raw Cesium's element

If you want to access a raw Cesium's element, you cab use `ref` prop of components. It can be get by `cesiumElement` property of the component object that can be get by them.

To know what is a Cesium element of each component, refer to "Cesium element" in the document of each component.

Note: `cesiumElement` property in the ref object can be `undefined`: e.g. when an initialization error is occurred. Please check if it's not `undefined` when using `cesiumElement`.

### Way 1: useRef hooks (function component)

Function component:

```jsx
import React, { useEffect, useRef } from "react";
import { Viewer } from "resium";

const ExampleComponent = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current && ref.current.cesiumElement) {
      // ref.current.cesiumElement is Cesium's Viewer
      // DO SOMETHING
    }
  }, []);

  return <Viewer ref={ref} />;
};
```

Function component in TypeScript:

```tsx
import React, { useEffect, useRef } from "react";
import { Viewer as CesiumViewer } from "cesium";
import { Viewer, CesiumComponentRef } from "resium";

const ExampleComponent = () => {
  const ref = useRef<CesiumComponentRef<CesiumViewer>>(null);

  useEffect(() => {
    if (ref.current?.cesiumElement) {
      // ref.current.cesiumElement is Cesium's Viewer
      // DO SOMETHING
    }
  }, []);

  return <Viewer ref={ref} />;
};
```

### Way 2: use a function (class component)

Class component:

```jsx
import React, { Component } from "react";
import { Viewer } from "resium";

class ExampleComponent extends Component {
  componentDidMount() {
    if (this.viewer) {
      // this.viewer is Cesium's Viewer
      // DO SOMETHING
    }
  }

  render() {
    return (
      <Viewer
        ref={e => {
          this.viewer = e ? e.cesiumElement : undefined;
        }}
      />
    );
  }
}
```

Class component in TypeScript:

```tsx
import React, { Component } from "react";
import { Viewer as CesiumViewer } from "cesium";
import { Viewer } from "resium";

class ExampleComponent extends Component {
  private viewer: CesiumViewer | undefined;

  componentDidMount() {
    if (this.viewer) {
      // this.viewer is Cesium's Viewer
      // DO SOMETHING
    }
  }

  render() {
    return (
      <Viewer
        ref={e => {
          this.viewer = e ? e.cesiumElement : undefined;
        }}
      />
    );
  }
}
```

### Way 3: use createRef (class component)

Class component:

```jsx
import React, { Component, createRef } from "react";
import { Viewer } from "resium";

class ExampleComponent extends Component {
  constructor(props) {
    super(props);
    this.ref = createRef();
  }

  componentDidMount() {
    if (this.ref.current && this.ref.current.cesiumElement) {
      // this.ref.current.cesiumElement is Cesium's Viewer
      // DO SOMETHING
    }
  }

  render() {
    return <Viewer ref={this.ref} />;
  }
}
```

Class component in TypeScript:

```tsx
import React, { Component, createRef } from "react";
import { Viewer as CesiumViewer } from "cesium";
import { Viewer } from "resium";

class ExampleComponent extends Component {
  private ref = createRef<CesiumViewer | undefined>();

  componentDidMount() {
    if (this.ref.current?.cesiumElement) {
      // this.ref.current.cesiumElement is Cesium's Viewer
      // DO SOMETHING
    }
  }

  render() {
    return <Viewer ref={this.ref} />;
  }
}
```

## Limitations

- Server side rendering is not supported. Cesium can be rendered only in web browsers.
- React Native is not supported. Resium runs only with `react-dom`, as Cesium depends on APIs of web browsers (DOM, WebGL, Web Worker and so on).
