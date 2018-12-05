/// <reference types="react" />
import Cesium from "cesium";
import EventManager, { EventProps } from "./core/EventManager";
export interface LabelCesiumProps {
    backgroundColor?: Cesium.Color;
    backgroundPadding?: Cesium.Cartesian2;
    disableDepthTestDistance?: number;
    distanceDisplayCondition?: Cesium.DistanceDisplayCondition;
    eyeOffset?: Cesium.Cartesian3;
    fillColor?: Cesium.Color;
    font?: string;
    heightReference?: Cesium.HeightReference;
    horizontalOrigin?: Cesium.HorizontalOrigin;
    id?: any;
    outlineColor?: Cesium.Color;
    outlineWidth?: number;
    pixelOffset?: Cesium.Cartesian2;
    pixelOffsetScaleByDistance?: Cesium.NearFarScalar;
    position?: Cesium.Cartesian3;
    scale?: number;
    scaleByDistance?: Cesium.NearFarScalar;
    show?: boolean;
    showBackground?: boolean;
    style?: Cesium.LabelStyle;
    text?: string;
    translucencyByDistance?: Cesium.NearFarScalar;
    verticalOrigin?: Cesium.VerticalOrigin;
}
export interface LabelProps extends LabelCesiumProps, EventProps<Cesium.Label> {
}
export interface LabelContext {
    labelCollection?: Cesium.LabelCollection;
    __RESIUM_EVENT_MANAGER?: EventManager;
}
declare const Label: import("react").ForwardRefExoticComponent<LabelProps & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<Cesium.Label>>>;
export default Label;
