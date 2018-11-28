/// <reference types="react" />
import Cesium from "cesium";
export interface WallGraphicsCesiumProps {
    positions?: Cesium.Property | Cesium.Cartesian3[];
    maximumHeights?: Cesium.Property | number[];
    minimumHeights?: Cesium.Property | number[];
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
export interface WallGraphicsProps extends WallGraphicsCesiumProps {
    onDefinitionChange?: () => void;
}
export interface WallGraphicsContext {
    entity?: Cesium.Entity;
}
declare const WallGraphics: import("react").ForwardRefExoticComponent<WallGraphicsProps & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<Cesium.WallGraphics>>>;
export default WallGraphics;
