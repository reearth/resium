/// <reference types="react" />
import Cesium from "cesium";
export interface DefaultScreenSpaceEventHandlerContext {
    cesiumWidget: Cesium.CesiumWidget;
}
declare const DefaultScreenSpaceEventHandler: import("react").ForwardRefExoticComponent<import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<Cesium.ScreenSpaceEventHandler>>>;
export default DefaultScreenSpaceEventHandler;
