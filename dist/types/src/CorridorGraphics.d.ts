/// <reference types="react" />
import Cesium from "cesium";
export interface CorridorGraphicsCesiumProps {
    positions?: Cesium.Property | Cesium.Cartesian3[];
    width?: Cesium.Property | number;
    cornerType?: Cesium.Property | Cesium.CornerType;
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
    granularity?: Cesium.Property | number;
    shadows?: Cesium.Property | boolean;
    distanceDisplayCondition?: Cesium.Property | Cesium.DistanceDisplayCondition;
    zIndex?: Cesium.ConstantProperty | number;
    classificationType?: Cesium.Property | any;
}
export interface CorridorGraphicsProps extends CorridorGraphicsCesiumProps {
    onDefinitionChange?: () => void;
}
export interface CorridorGraphicsContext {
    entity?: Cesium.Entity;
}
declare const CorridorGraphics: import("react").ForwardRefExoticComponent<CorridorGraphicsProps & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<Cesium.CorridorGraphics>>>;
export default CorridorGraphics;
