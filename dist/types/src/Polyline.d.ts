/// <reference types="react" />
import Cesium from "cesium";
import EventManager, { EventProps } from "./core/EventManager";
export interface PolylineCesiumProps {
    distanceDisplayCondition?: Cesium.DistanceDisplayCondition;
    id?: any;
    loop?: boolean;
    material?: Cesium.Material;
    positions?: Cesium.Cartesian3[];
    show?: boolean;
    width?: number;
}
export interface PolylineProps extends PolylineCesiumProps, EventProps<Cesium.Polyline> {
}
export interface PolylineContext {
    polylineCollection?: Cesium.PolylineCollection;
    __RESIUM_EVENT_MANAGER?: EventManager;
}
declare const Polyline: import("react").ForwardRefExoticComponent<PolylineProps & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<Cesium.Polyline>>>;
export default Polyline;
