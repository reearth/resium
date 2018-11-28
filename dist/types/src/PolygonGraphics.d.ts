/// <reference types="react" />
import Cesium from "cesium";
export interface PolygonGraphicsCesiumProps {
    hierarchy?: Cesium.Property | Cesium.PolygonHierarchy;
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
    stRotation?: Cesium.Property | number;
    granularity?: Cesium.Property | number;
    perPositionHeight?: Cesium.Property | boolean;
    closeTop?: boolean;
    closeBottom?: boolean;
    shadows?: Cesium.Property | Cesium.ShadowMode;
    distanceDisplayCondition?: Cesium.Property | Cesium.DistanceDisplayCondition;
    zIndex?: Cesium.Property | number;
    classificationType?: Cesium.Property | any;
}
export interface PolygonGraphicsProps extends PolygonGraphicsCesiumProps {
    onDefinitionChange?: () => void;
}
export interface PolygonGraphicsContext {
    entity?: Cesium.Entity;
}
declare const PolygonGraphics: import("react").ForwardRefExoticComponent<PolygonGraphicsProps & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<Cesium.PolygonGraphics>>>;
export default PolygonGraphics;
