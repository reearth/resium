/// <reference types="react" />
import Cesium from "cesium";
import EventManager, { EventProps } from "./core/EventManager";
export interface BillboardCesiumProps {
    alignAxis?: Cesium.Cartesian3;
    color?: Cesium.Color;
    disableDepthTestDistance?: number;
    distanceDisplayCondition?: Cesium.DistanceDisplayCondition;
    height?: number;
    heightReference?: Cesium.HeightReference;
    horizontalOrigin?: Cesium.HorizontalOrigin;
    id?: any;
    image?: string;
    pixelOffset?: Cesium.Cartesian2;
    pixelOffsetScaleByDistance?: Cesium.NearFarScalar;
    position?: Cesium.Cartesian3;
    rotation?: number;
    scale?: number;
    scaleByDistance?: Cesium.NearFarScalar;
    show?: boolean;
    sizeInMeters?: boolean;
    translucencyByDistance?: Cesium.NearFarScalar;
    verticalOrigin?: Cesium.VerticalOrigin;
    width?: number;
}
export interface BillboardProps extends BillboardCesiumProps, EventProps<Cesium.Label> {
}
export interface BillboardContext {
    billboardCollection?: Cesium.BillboardCollection;
    __RESIUM_EVENT_MANAGER?: EventManager;
}
declare const Billboard: import("react").ForwardRefExoticComponent<BillboardProps & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<Cesium.Billboard>>>;
export default Billboard;
