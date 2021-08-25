---
id: getting_started
title: Getting Started
---

# Getting Started

After [installation](/installation), let's create a hello world application.

You can import all resium components as following.

```jsx
import { Viewer } from "resium";
```

## The simplest Resium application

The simplest resium application is as following.

Just as Cesium's root object is `Viewer`, `<Viewer>` is also a root component in resium.

`app.js`:

```jsx
import React from "react";
import { Viewer } from "resium";

const App = () => <Viewer />;

export default App;
```

`index.js`:

```jsx
import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

ReactDOM.render(<App />, document.getElementById("wrapper"));
```

This is almost equivalent to:

```js
const viewer = new Cesium.Viewer("wrapper");
```

But the viewer is displayed small because it does not have its own size.

The easiest solution is using `full` prop. It makes the viewer displayed on the full screen.

```jsx
<Viewer full />
```

This is equivalent to:

```jsx
<Viewer
  style={{
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  }}
/>
```

If you want to customize the container styles, you can use `style` and `className` prop. They are applied to `div` element rendered by a Viewer component.

It means that CSS-in-JS libraries (styled-components, emotion...) are available on a Viewer component.

Hereafter, we omit the code such as HMR in example code.

## Displaying an entity

Next, let's display an entity on Cesium. Entity component is available in resium.

Entity has many way to visualize geograohical data. Here let's try to use PointGraphics.

```jsx
import React from "react";
import { Viewer, Entity } from "resium";
import { Cartesian3 } from "cesium";

const position = Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100);
const pointGraphics = { pixelSize: 10 };

const App = () => (
  <Viewer full>
    <Entity position={position} point={pointGraphics} />
  </Viewer>
);
```

This is equivalent to:

```js
const viewer = new Cesium.Viewer("wrapper");
const entity = new Cesium.Entity({
  position: Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100),
  point: { pixelSize: 10 },
});
viewer.entities.add(entity);
```

If HMR is enabled, it fully works in resium, so entity is updated without reloading the page when the source code is changed!

The following is also the same. It uses `PointGraphics` component. This enables updating graphic properties with minimal cost.

```jsx
import React from "react";
import { Viewer, Entity, PointGraphics } from "resium";
import { Cartesian3 } from "cesium";

const position = Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100);

const App = () => (
  <Viewer full>
    <Entity position={position}>
      <PointGraphics pixelSize={10} />
    </Entity>
  </Viewer>
);
```

## Displaying description of an entity

The following example is displaying a simple name and description of the entity.

```jsx
import React from "react";
import { Viewer, Entity, PointGraphics } from "resium";
import { Cartesian3 } from "cesium";

const position = Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100);

const App = () => (
  <Viewer full>
    <Entity position={position} name="Tokyo" description="Hello, world.">
      <PointGraphics pixelSize={10} />
    </Entity>
  </Viewer>
);
```

If you want to render rich description, `EntityDescription` component is the best. It enables using JSX in the description of entities!

```jsx
import React from "react";
import { Viewer, Entity, PointGraphics, EntityDescription } from "resium";
import { Cartesian3 } from "cesium";

const position = Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100);

const App = () => (
  <Viewer full>
    <Entity position={position} name="Tokyo">
      <PointGraphics pixelSize={10} />
      <EntityDescription>
        <h1>Hello, world.</h1>
        <p>JSX is available here!</p>
      </EntityDescription>
    </Entity>
  </Viewer>
);
```

## Adding Cesium world terrain

`terrainProvider` prop of `Viewer` is available.

```jsx
import React from "react";
import { Viewer, Entity, PointGraphics, EntityDescription } from "resium";
import { Cartesian3, createWorldTerrain } from "cesium";

const terrainProvider = createWorldTerrain();
const position = Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100);

const App = () => (
  <Viewer full terrainProvider={terrainProvider}>
    <Entity position={position} name="Tokyo">
      <PointGraphics pixelSize={10} />
      <EntityDescription>
        <h1>Hello, world.</h1>
        <p>JSX is available here!</p>
      </EntityDescription>
    </Entity>
  </Viewer>
);
```

## Loading your own data

Cesium and resium support KML, GeoJSON, TopoJSON, and CZML. Let's load and display your own data!

```jsx
import React from "react";
import { Viewer, GeoJsonDataSource, KmlDataSource } from "resium";

const data = {
  type: "Feature",
  properties: {
    name: "Coors Field",
    amenity: "Baseball Stadium",
    popupContent: "This is where the Rockies play!",
  },
  geometry: {
    type: "Point",
    coordinates: [-104.99404, 39.75621],
  },
};

const App = () => (
  <Viewer full>
    <GeoJsonDataSource data={"your_geo_json.geojson"} />
    <KmlDataSource data={"your_geo_json.kml"} />
    <GeoJsonDataSource data={data} />
  </Viewer>
);
```

3D tile is also available.

```jsx
import React from "react";
import { Viewer, Cesium3DTileset } from "resium";
import { IonResource } from "cesium";

const App = () => {
  let viewer; // This will be raw Cesium's Viewer object.

  const handleReady = tileset => {
    if (viewer) {
      viewer.zoomTo(tileset);
    }
  };

  return (
    <Viewer
      full
      ref={e => {
        viewer = e && e.cesiumElement;
      }}>
      <Cesium3DTileset url={IonResource.fromAssetId(5714)} onReady={handleReady} />
    </Viewer>
  );
};
```

## What's next?

- [Guide](/guide)
- Components: see menu
- [Examples](/examples/)
- [Cesium Documentation](https://cesium.com/learn/cesiumjs/ref-doc/)
