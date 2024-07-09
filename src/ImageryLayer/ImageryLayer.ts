import { ImageryLayer as CesiumImageryLayer, ImageryProvider } from "cesium";

import {
  createCesiumComponent,
  PickCesiumProps,
  Merge,
  ConstructorOptions2,
  isPromise,
} from "../core";

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

export type ImageryLayerCesiumReadonlyProps = Omit<
  PickCesiumProps<Target, typeof cesiumReadonlyProps>,
  "imageryProvider"
> & {
  imageryProvider: ImageryProvider | Promise<ImageryProvider>;
};

export type ImageryLayerProps = ImageryLayerCesiumProps &
  ImageryLayerCesiumReadonlyProps;

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
  "imageryProvider",
] as const;

const ImageryLayer = createCesiumComponent<CesiumImageryLayer, ImageryLayerProps>({
  name: "ImageryLayer",
  async create(context, props) {
    if (!context.imageryLayerCollection) return;

    const imageryProvider = isPromise(props.imageryProvider)
      ? props.imageryProvider
      : new Promise<ImageryProvider>(r => queueMicrotask(() => r(props.imageryProvider)));

    const imageryLayerWaitingList = context.__$internal?.imageryLayerWaitingList?.slice();
    context.__$internal?.imageryLayerWaitingList
      ? context.__$internal.imageryLayerWaitingList.push(imageryProvider)
      : undefined;

    // Make sure keeping the order of imagery layer to specify the index correctly.
    if (imageryLayerWaitingList) {
      await Promise.all(imageryLayerWaitingList.filter(v => isPromise(v)));
    }

    const result: ImageryProvider = await imageryProvider;

    // Remove the awaited result from the waiting list.
    if (context.__$internal?.imageryLayerWaitingList) {
      context.__$internal.imageryLayerWaitingList =
        context.__$internal.imageryLayerWaitingList.filter(i => i !== imageryProvider);
    }

    if (!result) return;

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
});

export default ImageryLayer;
