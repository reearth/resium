/// <reference types="react" />
import Cesium from "cesium";
export interface PolylineVolumeGraphicsCesiumProps {
    positions?: Cesium.Property | Cesium.Cartesian3[];
    shape?: Cesium.Property | Cesium.Cartesian2[];
    cornerType?: Cesium.Property | Cesium.CornerType;
    show?: Cesium.Property | boolean;
    fill?: Cesium.Property | boolean;
    material?: Cesium.MaterialProperty | Cesium.Color | string;
    outline?: Cesium.Property | boolean;
    outlineColor?: Cesium.Property | Cesium.Color;
    outlineWidth?: Cesium.Property | number;
    granularity?: Cesium.Property | number;
    shadows?: Cesium.Property | Cesium.ShadowMode;
    distanceDisplayCondition?: Cesium.Property | Cesium.DistanceDisplayCondition;
}
export interface PolylineVolumeGraphicsProps extends PolylineVolumeGraphicsCesiumProps {
    onDefinitionChange?: () => void;
}
export interface PolylineVolumeGraphicsContext {
    entity?: Cesium.Entity;
}
declare const PolylineVolumeGraphics: import("react").ForwardRefExoticComponent<PolylineVolumeGraphicsProps & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<Cesium.PolylineVolumeGraphics>>>;
export default PolylineVolumeGraphics;
