import { ImageryLayer as CesiumImageryLayer, ImageryProvider } from "cesium";

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

export type Target = Merge<CesiumImageryLayer, ConstructorOptions2<typeof CesiumImageryLayer>> & {
  index?: number;
};

export type ImageryLayerCesiumProps = PickCesiumProps<Target, typeof cesiumProps>;

export type ImageryLayerCesiumReadonlyProps = PickCesiumProps<Target, typeof cesiumReadonlyProps>;

export type ImageryLayerOtherProps = {
  imageryProvider: ImageryProvider | Promise<ImageryProvider>;
};

export type ImageryLayerProps = ImageryLayerCesiumProps &
  ImageryLayerCesiumReadonlyProps &
  ImageryLayerOtherProps;

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
  "index",
] as const;

const cesiumReadonlyProps = [
  "rectangle",
  "maximumAnisotropy",
  "minimumTerrainLevel",
  "maximumTerrainLevel",
  "readyEvent",
] as const;

const otherProps = ["imageryProvider"] as const;

const ImageryLayer = createCesiumComponent<CesiumImageryLayer, ImageryLayerProps>({
  name: "ImageryLayer",
  async create(context, props) {
    if (!context.imageryLayerCollection) return;

    const maybePromise = props.imageryProvider;

    let result: ImageryProvider;
    if (
      maybePromise &&
      typeof maybePromise === "object" &&
      typeof (maybePromise as Promise<unknown>).then === "function"
    ) {
      result = await maybePromise;
    } else {
      result = maybePromise as ImageryProvider;
    }

    const element = new CesiumImageryLayer(result, props);
    context.imageryLayerCollection.add(element, props.index);
    return element;
  },
  destroy(element, context) {
    if (context.imageryLayerCollection) {
      context.imageryLayerCollection.remove(element);
    }
  },
  cesiumProps,
  cesiumReadonlyProps,
  otherProps,
});

export default ImageryLayer;
