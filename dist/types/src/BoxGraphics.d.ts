/// <reference types="react" />
import Cesium from "cesium";
export interface BoxGraphicsCesiumProps {
    heightReference?: Cesium.Property | Cesium.HeightReference;
    dimensions?: Cesium.Property | Cesium.Cartesian3;
    show?: Cesium.Property | boolean;
    fill?: Cesium.Property | boolean;
    material?: Cesium.MaterialProperty | Cesium.Color | string;
    outline?: Cesium.Property | boolean;
    outlineColor?: Cesium.Property | number;
    outlineWidth?: Cesium.Property | number;
    shadows?: Cesium.Property | Cesium.ShadowMode;
    distanceDisplayCondition?: Cesium.Property | Cesium.DistanceDisplayCondition;
}
export interface BoxGraphicsProps extends BoxGraphicsCesiumProps {
    onDefinitionChange?: () => void;
}
export interface BoxGraphicsContext {
    entity?: Cesium.Entity;
}
declare const BoxGraphics: import("react").ForwardRefExoticComponent<BoxGraphicsProps & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<Cesium.BoxGraphics>>>;
export default BoxGraphics;
