/// <reference types="react" />
import Cesium from "cesium";
export interface LabelGraphicsCesiumProps {
    text?: Cesium.Property | string;
    font?: Cesium.Property | string;
    style?: Cesium.Property | Cesium.LabelStyle;
    fillColor?: Cesium.Property | Cesium.Color;
    outlineColor?: Cesium.Property | Cesium.Color;
    outlineWidth?: Cesium.Property | number;
    show?: Cesium.Property | boolean;
    showBackground?: Cesium.Property | boolean;
    backgroundColor?: Cesium.Property | Cesium.Color;
    backgroundPadding?: Cesium.Property | number;
    scale?: Cesium.Property | number;
    horizontalOrigin?: Cesium.Property | Cesium.HorizontalOrigin;
    verticalOrigin?: Cesium.Property | Cesium.VerticalOrigin;
    eyeOffset?: Cesium.Property | Cesium.Cartesian3;
    pixelOffset?: Cesium.Property | Cesium.Cartesian2;
    translucencyByDistance?: Cesium.Property | Cesium.NearFarScalar;
    pixelOffsetScaleByDistance?: Cesium.Property | Cesium.NearFarScalar;
    scaleByDistance?: Cesium.Property | Cesium.NearFarScalar;
    heightReference?: Cesium.Property | Cesium.HeightReference;
    distanceDisplayCondition?: Cesium.Property | Cesium.DistanceDisplayCondition;
    disableDepthTestDistance?: Cesium.Property | number;
}
export interface LabelGraphicsProps extends LabelGraphicsCesiumProps {
    onDefinitionChange?: () => void;
}
export interface LabelGraphicsContext {
    entity?: Cesium.Entity;
}
declare const LabelGraphics: import("react").ForwardRefExoticComponent<LabelGraphicsProps & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<Cesium.LabelGraphics>>>;
export default LabelGraphics;
