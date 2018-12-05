/// <reference types="react" />
import Cesium from "cesium";
export interface PointGraphicsCesiumProps {
    color?: Cesium.Property | Cesium.Color;
    pixelSize?: Cesium.Property | number;
    outlineColor?: Cesium.Property | Cesium.Color;
    outlineWidth?: Cesium.Property | number;
    show?: Cesium.Property | boolean;
    scaleByDistance?: Cesium.Property | Cesium.NearFarScalar;
    translucencyByDistance?: Cesium.Property | Cesium.NearFarScalar;
    heightReference?: Cesium.Property | Cesium.HeightReference;
    distanceDisplayCondition?: Cesium.Property | Cesium.DistanceDisplayCondition;
    disableDepthTestDistance?: Cesium.Property | number;
}
export interface PointGraphicsProps extends PointGraphicsCesiumProps {
    onDefinitionChange?: () => void;
}
export interface PointGraphicsContext {
    entity?: Cesium.Entity;
}
declare const PointGraphics: import("react").ForwardRefExoticComponent<PointGraphicsProps & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<Cesium.PointGraphics>>>;
export default PointGraphics;
