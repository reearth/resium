/// <reference types="react" />
import Cesium from "cesium";
export interface EllipseGraphicsCesiumProps {
    semiMajorAxis?: Cesium.Property | number;
    semiMinorAxis?: Cesium.Property | number;
    height?: Cesium.Property | number;
    heightReference?: Cesium.Property | Cesium.HeightReference;
    extrudedHeight?: Cesium.Property | number;
    show?: Cesium.Property | boolean;
    fill?: Cesium.Property | boolean;
    material?: Cesium.MaterialProperty | Cesium.Color | string;
    outline?: Cesium.Property | boolean;
    outlineColor?: Cesium.Property | Cesium.Color;
    outlineWidth?: Cesium.Property | number;
    numberOfVerticalLines?: Cesium.Property | number;
    rotation?: Cesium.Property | number;
    stRotation?: Cesium.Property | number;
    granularity?: Cesium.Property | number;
    shadows?: Cesium.Property | Cesium.ShadowMode;
    distanceDisplayCondition?: Cesium.Property | Cesium.DistanceDisplayCondition;
    zIndex?: Cesium.Property | number;
    classificationType?: Cesium.Property | any;
}
export interface EllipseGraphicsProps extends EllipseGraphicsCesiumProps {
    onDefinitionChange?: () => void;
}
export interface EllipseGraphicsContext {
    entity?: Cesium.Entity;
}
declare const EllipseGraphics: import("react").ForwardRefExoticComponent<EllipseGraphicsProps & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<Cesium.EllipseGraphics>>>;
export default EllipseGraphics;
