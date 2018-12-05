/// <reference types="react" />
import Cesium from "cesium";
export interface PolylineGraphicsCesiumProps {
    positions?: Cesium.Property | Cesium.Cartesian3[];
    followSurface?: Cesium.Property | boolean;
    clampToGround?: Cesium.Property | boolean;
    width?: Cesium.Property | number;
    show?: Cesium.Property | boolean;
    material?: Cesium.MaterialProperty | Cesium.Color | string;
    depthFailMaterial?: Cesium.MaterialProperty | Cesium.Color | string;
    granularity?: Cesium.Property | number;
    shadows?: Cesium.Property | Cesium.ShadowMode;
    distanceDisplayCondition?: Cesium.Property | Cesium.DistanceDisplayCondition;
    zIndex?: Cesium.Property | number;
}
export interface PolylineGraphicsProps extends PolylineGraphicsCesiumProps {
    onDefinitionChange?: () => void;
}
export interface PolylineGraphicsContext {
    entity?: Cesium.Entity;
}
declare const PolylineGraphics: import("react").ForwardRefExoticComponent<PolylineGraphicsProps & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<Cesium.PolylineGraphics>>>;
export default PolylineGraphics;
