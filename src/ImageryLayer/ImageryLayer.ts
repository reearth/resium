import {
  ImageryLayer as CesiumImageryLayer,
  ImageryProvider,
  Rectangle,
  TextureMagnificationFilter,
  TextureMinificationFilter,
  ImagerySplitDirection,
} from "cesium";

import { createCesiumComponent } from "../core";

/*
@summary
`ImageryLayer` is a imargery layer on the globe.

Layers are added in order of JSX from the top.

```jsx
// Back layer
<ImageryLayer imageryProvider={provider1} />
<ImageryLayer imageryProvider={provider2} />
<ImageryLayer imageryProvider={provider3} />
// Front layer
```

is equivalent to:

```js
viewer.imageryLayers.add(provider1);
viewer.imageryLayers.add(provider2);
viewer.imageryLayers.add(provider3);
```

As a result, the layer added at the very end is the frontmost when actually displayed.

Note: `imageryProvider` property is read only. See also [guide](/guide#cesium-read-only-properties).
*/

/*
@scope
Either:
- Inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) component: the imargery layer will be attached to the ImageryLayerCollection of the Viewer or CesiumWidget.
- Inside [ImageryLayerCollection](/components/ImageryLayerCollection) component: same as above
*/

export interface ImageryLayerCesiumProps {
  alpha?:
    | ((
        frameState: any /* FrameState */,
        layer: CesiumImageryLayer,
        x: number,
        y: number,
        level: number,
      ) => number)
    | number;
  brightness?:
    | ((
        frameState: any /* FrameState */,
        layer: CesiumImageryLayer,
        x: number,
        y: number,
        level: number,
      ) => number)
    | number;
  contrast?:
    | ((
        frameState: any /* FrameState */,
        layer: CesiumImageryLayer,
        x: number,
        y: number,
        level: number,
      ) => number)
    | number;
  hue?:
    | ((
        frameState: any /* FrameState */,
        layer: CesiumImageryLayer,
        x: number,
        y: number,
        level: number,
      ) => number)
    | number;
  saturation?:
    | ((
        frameState: any /* FrameState */,
        layer: CesiumImageryLayer,
        x: number,
        y: number,
        level: number,
      ) => number)
    | number;
  gamma?:
    | ((
        frameState: any /* FrameState */,
        layer: CesiumImageryLayer,
        x: number,
        y: number,
        level: number,
      ) => number)
    | number;
  splitDirection?:
    | ((
        frameState: any /* FrameState */,
        layer: CesiumImageryLayer,
        x: number,
        y: number,
        level: number,
      ) => any)
    | ImagerySplitDirection;
  minificationFilter?: TextureMinificationFilter;
  magnificationFilter?: TextureMagnificationFilter;
  cutoutRectangle?: Rectangle;
  show?: boolean;
}

export interface ImageryLayerCesiumReadonlyProps {
  imageryProvider: ImageryProvider;
  rectangle?: Rectangle;
  maximumAnisotropy?: number;
  minimumTerrainLevel?: number;
  maximumTerrainLevel?: number;
}

export interface ImageryLayerProps
  extends ImageryLayerCesiumProps,
    ImageryLayerCesiumReadonlyProps {}

const cesiumProps: (keyof ImageryLayerCesiumProps)[] = [
  "alpha",
  "brightness",
  "contrast",
  "hue",
  "saturation",
  "gamma",
  "splitDirection",
  "minificationFilter",
  "magnificationFilter",
  "cutoutRectangle",
  "show",
];

const cesiumReadonlyProps: (keyof ImageryLayerCesiumReadonlyProps)[] = [
  "imageryProvider",
  "rectangle",
  "maximumAnisotropy",
  "minimumTerrainLevel",
  "maximumTerrainLevel",
];

const ImageryLayer = createCesiumComponent<CesiumImageryLayer, ImageryLayerProps>({
  name: "ImageryLayer",
  create(context, props) {
    if (!context.imageryLayerCollection) return;
    const element = new CesiumImageryLayer(props.imageryProvider, {
      rectangle: props.rectangle,
      alpha: props.alpha,
      brightness: props.brightness,
      contrast: props.contrast,
      hue: props.hue,
      saturation: props.saturation,
      gamma: props.gamma,
      splitDirection: props.splitDirection,
      minificationFilter: props.minificationFilter,
      magnificationFilter: props.magnificationFilter,
      show: props.show,
      maximumAnisotropy: props.maximumAnisotropy,
      minimumTerrainLevel: props.minimumTerrainLevel,
      maximumTerrainLevel: props.maximumTerrainLevel,
      cutoutRectangle: props.cutoutRectangle,
    });
    context.imageryLayerCollection.add(element);
    return element;
  },
  destroy(element, context) {
    if (context.imageryLayerCollection) {
      context.imageryLayerCollection.remove(element);
    }
  },
  cesiumProps,
  cesiumReadonlyProps,
});

export default ImageryLayer;
