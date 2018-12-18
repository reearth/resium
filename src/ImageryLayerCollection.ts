import Cesium from "cesium";
import createCesiumComponent, { EventkeyMap } from "./core/CesiumComponent";

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

export interface ImageryLayerCollectionCesiumEvents {
  onLayerAdd?: (layer: Cesium.ImageryLayer, index: number) => void;
  onLayerMove?: (layer: Cesium.ImageryLayer, index: number) => void;
  onLayerRemove?: (layer: Cesium.ImageryLayer, index: number) => void;
  onLayerShowOrHide?: (layer: Cesium.ImageryLayer, index: number) => void;
}

// tslint:disable-next-line:no-empty-interface
export interface ImageryLayerCollectionProps extends ImageryLayerCollectionCesiumEvents {}

export interface ImageryLayerCollectionContext {
  globe: Cesium.Globe;
}

const cesiumEventProps: EventkeyMap<
  Cesium.ImageryLayerCollection,
  keyof ImageryLayerCollectionCesiumEvents
> = {
  layerAdded: "onLayerAdd",
  layerMoved: "onLayerMove",
  layerRemoved: "onLayerRemove",
  layerShownOrHidden: "onLayerShowOrHide",
};

const ImageryLayerCollection = createCesiumComponent<
  Cesium.ImageryLayerCollection,
  ImageryLayerCollectionProps,
  ImageryLayerCollectionContext
>({
  name: "ImageryLayerCollection",
  create(cprops, props, context) {
    return context.globe.imageryLayers;
  },
  cesiumEventProps,
});

export default ImageryLayerCollection;
