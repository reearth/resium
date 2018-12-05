/// <reference types="react" />
import Cesium from "cesium";
export interface ScreenSpaceEventHandlerContext {
    scene: Cesium.Scene;
}
declare const ScreenSpaceEventHandler: import("react").ForwardRefExoticComponent<{
    children?: import("react").ReactNode;
} & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<Cesium.ScreenSpaceEventHandler>>>;
export default ScreenSpaceEventHandler;
