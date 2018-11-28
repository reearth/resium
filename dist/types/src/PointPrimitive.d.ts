/// <reference types="react" />
import Cesium from "cesium";
import EventManager, { EventProps } from "./core/EventManager";
export interface PointPrimitiveCesiumProps {
    color?: Cesium.Color;
    disableDepthTestDistance?: number;
    distanceDisplayCondition?: Cesium.DistanceDisplayCondition;
    id?: any;
    outlineColor?: Cesium.Color;
    outlineWidth?: number;
    pixelSize?: number;
    position?: Cesium.Cartesian3;
    scaleByDistance?: Cesium.NearFarScalar;
    show?: boolean;
    translucencyByDistance?: Cesium.NearFarScalar;
}
export interface PointPrimitiveProps extends PointPrimitiveCesiumProps, EventProps<Cesium.PointPrimitive> {
}
export interface PointPrimitiveContext {
    pointPrimitiveCollection?: Cesium.PointPrimitiveCollection;
    __RESIUM_EVENT_MANAGER?: EventManager;
}
declare const PointPrimitive: import("react").ForwardRefExoticComponent<PointPrimitiveProps & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<Cesium.PointPrimitive>>>;
export default PointPrimitive;
