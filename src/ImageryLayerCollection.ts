import Cesium from "cesium";
import createCesiumComponent, { EventkeyMap } from "./core/CesiumComponent";

export interface ImageryLayerCollectionProps {
  onLayerAdd?: (layer: Cesium.ImageryLayer, index: number) => void;
  onLayerMove?: (layer: Cesium.ImageryLayer, index: number) => void;
  onLayerRemove?: (layer: Cesium.ImageryLayer, index: number) => void;
  onLayerShowOrHide?: (layer: Cesium.ImageryLayer, index: number) => void;
}

export interface ImageryLayerCollectionContext {
  globe: Cesium.Globe;
}

const cesiumEventProps: EventkeyMap<
  Cesium.ImageryLayerCollection,
  keyof ImageryLayerCollectionProps
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
