import {
  createCesiumComponent,
  EventkeyMap,
  UnusedCesiumProps,
  AssertNever,
  ValueOf,
} from "../core";
import { ImageryLayer, ImageryLayerCollection as CesiumImageryLayerCollection } from "cesium";

/*
@summary
`ImageryLayerCollection` is a collection of imagery layers of the globe.
It can have some `ImageryLayer` components as children.
*/

/*
@scope
Available inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) components.
This component refers to the single ImageryLayerCollection of them, so can not be used more than once for each Viewer or CesiumWidget.
*/

export type ImageryLayerCollectionCesiumEvents = {
  onLayerAdd?: (layer: ImageryLayer, index: number) => void;
  onLayerMove?: (layer: ImageryLayer, index: number) => void;
  onLayerRemove?: (layer: ImageryLayer, index: number) => void;
  onLayerShowOrHide?: (layer: ImageryLayer, index: number) => void;
};

export type ImageryLayerCollectionProps = ImageryLayerCollectionCesiumEvents;

const cesiumEventProps: EventkeyMap<
  CesiumImageryLayerCollection,
  ImageryLayerCollectionCesiumEvents
> = {
  onLayerAdd: "layerAdded",
  onLayerMove: "layerMoved",
  onLayerRemove: "layerRemoved",
  onLayerShowOrHide: "layerShownOrHidden",
};

const ImageryLayerCollection = createCesiumComponent<
  CesiumImageryLayerCollection,
  ImageryLayerCollectionProps
>({
  name: "ImageryLayerCollection",
  create: context => context.globe?.imageryLayers,
  cesiumEventProps,
});

export default ImageryLayerCollection;

// Unused prop check
// length: for read only
type IgnoredProps = "length";
type UnusedProps = UnusedCesiumProps<
  CesiumImageryLayerCollection,
  ValueOf<typeof cesiumEventProps>
>;
type AssertUnusedProps = AssertNever<Exclude<UnusedProps, IgnoredProps>>;
