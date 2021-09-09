import { ImageryLayer as CesiumImageryLayer } from "cesium";

import { createCesiumComponent, PickCesiumProps, Merge, ConstructorOptions2 } from "../core";

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

export type ImageryLayerCesiumProps = PickCesiumProps<CesiumImageryLayer, typeof cesiumProps>;

export type ImageryLayerCesiumReadonlyProps = PickCesiumProps<
  Merge<CesiumImageryLayer, ConstructorOptions2<typeof CesiumImageryLayer>>,
  typeof cesiumReadonlyProps,
  "imageryProvider"
>;

export type ImageryLayerProps = ImageryLayerCesiumProps & ImageryLayerCesiumReadonlyProps;

const cesiumProps = [
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
  "nightAlpha",
  "dayAlpha",
  "colorToAlpha",
  "colorToAlphaThreshold",
] as const;

const cesiumReadonlyProps = [
  "imageryProvider",
  "rectangle",
  "maximumAnisotropy",
  "minimumTerrainLevel",
  "maximumTerrainLevel",
] as const;

const ImageryLayer = createCesiumComponent<CesiumImageryLayer, ImageryLayerProps>({
  name: "ImageryLayer",
  create(context, props) {
    if (!context.imageryLayerCollection) return;
    const element = new CesiumImageryLayer(props.imageryProvider, props);
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
