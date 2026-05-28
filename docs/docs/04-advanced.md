---
id: advanced
title: Advanced
---

# Advanced

## Get Cesium context with your component

`useCesium` hooks is available with Resium:

```jsx
import { useCesium } from "resium";

const ExampleComponent = () => {
  const { viewer } = useCesium();
  return <p>Cesium Viewer object is{viewer ? "" : " not"} provided here.</p>;
};

export default ExampleComponent;
```

In TypeScript:

```tsx
import { Viewer } from "cesium";
import { useCesium } from "resium";

const ExampleComponent = () => {
  const { viewer } = useCesium();
  return <p>Cesium Viewer object is{viewer ? "" : " not"} provided here.</p>;
};

export default ExampleComponent;
```

Structure of the context is [here](https://github.com/reearth/resium/blob/master/src/core/context.ts#L22).

## Suspense for data loading

`GeoJsonDataSource`, `KmlDataSource` and `CzmlDataSource` can opt in to [React Suspense](https://react.dev/reference/react/Suspense) by passing the `suspense` prop. When enabled and `data` is a URL (or Cesium `Resource`), the data is fetched during render, so a parent `<Suspense>` boundary shows its fallback while loading and a parent error boundary catches load failures.

```tsx
import { Suspense } from "react";
import { Viewer, GeoJsonDataSource } from "resium";

const App = () => (
  <Viewer>
    <Suspense fallback={<Loading />}>
      <GeoJsonDataSource data="/path/to/data.geojson" suspense />
    </Suspense>
  </Viewer>
);
```

Fetched results are cached by URL. Pass `cacheKey` to override the key: change it to bust the cache when the content at a stable URL changes, or share it across components to dedupe a fetch.

```tsx
<GeoJsonDataSource data={url} suspense cacheKey="data-v2" />
```

Without `suspense`, these components keep their default behavior (async loading via `onLoad` / `onError` callbacks).

## Define a new Cesium component

`createCesiumComponent` function is available in Resium. For details refer to source codes of components in `src` directory.
