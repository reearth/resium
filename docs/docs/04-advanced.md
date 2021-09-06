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

Structure of the context is [here](https://github.com/darwin-education/resium/blob/master/src/core/context.ts#L22).

## Define a new Cesium component

`createCesiumComponent` function is available in Resium. For details refer to source codes of components in `src` directory.
