/// <reference types="react" />
import Cesium from "cesium";
export interface RectangleGraphicsCesiumProps {
    coordinates?: Cesium.Property | Cesium.Rectangle;
    height?: Cesium.Property | number;
    heightReference?: Cesium.Property | Cesium.HeightReference;
    extrudedHeight?: Cesium.Property | number;
    extrudedHeightReference?: Cesium.Property | Cesium.HeightReference;
    show?: Cesium.Property | boolean;
    fill?: Cesium.Property | boolean;
    material?: Cesium.MaterialProperty | Cesium.Color | string;
    outline?: Cesium.Property | boolean;
    outlineColor?: Cesium.Property | Cesium.Color;
    outlineWidth?: Cesium.Property | number;
    rotation?: Cesium.Property | number;
    stRotation?: Cesium.Property | number;
    granularity?: Cesium.Property | number;
    shadows?: Cesium.Property | Cesium.ShadowMode;
    distanceDisplayCondition?: Cesium.Property | Cesium.DistanceDisplayCondition;
    zIndex?: Cesium.Property | number;
    classificationType?: Cesium.Property | any;
}
export interface RectangleGraphicsProps extends RectangleGraphicsCesiumProps {
    onDefinitionChange?: () => void;
}
export interface RectangleGraphicsContext {
    entity?: Cesium.Entity;
}
declare const RectangleGraphics: import("react").ForwardRefExoticComponent<RectangleGraphicsProps & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<Cesium.RectangleGraphics>>>;
export default RectangleGraphics;
