/// <reference types="react" />
import Cesium from "cesium";
export interface ImageryLayerCesiumProps {
    alpha?: ((frameState: any, layer: Cesium.ImageryLayer, x: number, y: number, level: number) => number) | number;
    brightness?: ((frameState: any, layer: Cesium.ImageryLayer, x: number, y: number, level: number) => number) | number;
    contrast?: ((frameState: any, layer: Cesium.ImageryLayer, x: number, y: number, level: number) => number) | number;
    hue?: ((frameState: any, layer: Cesium.ImageryLayer, x: number, y: number, level: number) => number) | number;
    saturation?: ((frameState: any, layer: Cesium.ImageryLayer, x: number, y: number, level: number) => number) | number;
    gamma?: ((frameState: any, layer: Cesium.ImageryLayer, x: number, y: number, level: number) => number) | number;
    splitDirection?: ((frameState: any, layer: Cesium.ImageryLayer, x: number, y: number, level: number) => any) | any;
    minificationFilter?: any;
    magnificationFilter?: any;
    cutoutRectangle?: Cesium.Rectangle;
    show?: boolean;
}
export interface ImageryLayerCesiumReadonlyProps {
    imageryProvider: Cesium.ImageryProvider;
    rectangle?: Cesium.Rectangle;
    maximumAnisotropy?: number;
    minimumTerrainLevel?: number;
    maximumTerrainLevel?: number;
}
export interface ImageryLayerProps extends ImageryLayerCesiumProps, ImageryLayerCesiumReadonlyProps {
}
export interface ImageryLayerContext {
    imageryLayerCollection?: Cesium.ImageryLayerCollection;
}
declare const ImageryLayer: import("react").ForwardRefExoticComponent<ImageryLayerProps & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<Cesium.ImageryLayer>>>;
export default ImageryLayer;
