import { createCesiumComponent, EventkeyMap } from "../core/component";

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

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ImageryLayerCollectionProps extends ImageryLayerCollectionCesiumEvents {}

const cesiumEventProps: EventkeyMap<
  Cesium.ImageryLayerCollection,
  ImageryLayerCollectionCesiumEvents
> = {
  onLayerAdd: "layerAdded",
  onLayerMove: "layerMoved",
  onLayerRemove: "layerRemoved",
  onLayerShowOrHide: "layerShownOrHidden",
};

const ImageryLayerCollection = createCesiumComponent<
  Cesium.ImageryLayerCollection,
  ImageryLayerCollectionProps,
  {
    globe?: Cesium.Globe;
  }
>({
  name: "ImageryLayerCollection",
  create: context => context.globe?.imageryLayers,
  cesiumEventProps,
});

export default ImageryLayerCollection;
