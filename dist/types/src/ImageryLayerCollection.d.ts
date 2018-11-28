/// <reference types="react" />
import Cesium from "cesium";
export interface ImageryLayerCollectionProps {
    onLayerAdd?: (layer: Cesium.ImageryLayer, index: number) => void;
    onLayerMove?: (layer: Cesium.ImageryLayer, index: number) => void;
    onLayerRemove?: (layer: Cesium.ImageryLayer, index: number) => void;
    onLayerShowOrHide?: (layer: Cesium.ImageryLayer, index: number) => void;
}
export interface ImageryLayerCollectionContext {
    globe: Cesium.Globe;
}
declare const ImageryLayerCollection: import("react").ForwardRefExoticComponent<ImageryLayerCollectionProps & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<Cesium.ImageryLayerCollection>>>;
export default ImageryLayerCollection;
