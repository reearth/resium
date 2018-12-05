/// <reference types="react" />
import Cesium from "cesium";
export interface EllipsoidGraphicsCesiumProps {
    heightReference?: Cesium.Property | Cesium.HeightReference;
    radii?: Cesium.Property | Cesium.Cartesian3;
    show?: Cesium.Property | boolean;
    fill?: Cesium.Property | boolean;
    material?: Cesium.MaterialProperty | Cesium.Color | string;
    outline?: Cesium.Property | boolean;
    outlineColor?: Cesium.Property | Cesium.Color;
    outlineWidth?: Cesium.Property | number;
    subdivisions?: Cesium.Property | number;
    stackPartitions?: Cesium.Property | number;
    slicePartitions?: Cesium.Property | number;
    shadows?: Cesium.Property | Cesium.ShadowMode;
    distanceDisplayCondition?: Cesium.Property | Cesium.DistanceDisplayCondition;
}
export interface EllipsoidGraphicsProps extends EllipsoidGraphicsCesiumProps {
    onDefinitionChange?: () => void;
}
export interface EllipsoidGraphicsContext {
    entity?: Cesium.Entity;
}
declare const EllipsoidGraphics: import("react").ForwardRefExoticComponent<EllipsoidGraphicsProps & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<Cesium.EllipsoidGraphics>>>;
export default EllipsoidGraphics;
