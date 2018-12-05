/// <reference types="react" />
import Cesium from "cesium";
export interface PlaneGraphicsCesiumProps {
    plane?: Cesium.Property | any;
    dimensions?: Cesium.Property | Cesium.Cartesian2;
    show?: Cesium.Property | boolean;
    fill?: Cesium.Property | boolean;
    material?: Cesium.MaterialProperty | Cesium.Color | string;
    outline?: Cesium.Property | boolean;
    outlineColor?: Cesium.Property | Cesium.Color;
    outlineWidth?: Cesium.Property | number;
    shadows?: Cesium.Property | Cesium.ShadowMode;
    distanceDisplayCondition?: Cesium.Property | Cesium.DistanceDisplayCondition;
}
export interface PlaneGraphicsProps extends PlaneGraphicsCesiumProps {
    onDefinitionChange?: () => void;
}
export interface PlaneGraphicsContext {
    entity?: Cesium.Entity;
}
declare const PlaneGraphics: import("react").ForwardRefExoticComponent<PlaneGraphicsProps & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<any>>>;
export default PlaneGraphics;
