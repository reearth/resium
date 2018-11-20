import React from "react";
import Cesium from "cesium";
export interface ScreenSpaceEventProps {
    action: (e: {
        position: Cesium.Cartesian2;
    }) => void;
    modifier?: number;
    type: number;
}
interface ScreenSpaceEventContext {
    screenSpaceEventHandler: Cesium.ScreenSpaceEventHandler;
}
declare const _default: React.ForwardRefExoticComponent<ScreenSpaceEventProps & React.RefAttributes<React.ComponentType<import("./core/context").WithContextProps<ScreenSpaceEventProps, ScreenSpaceEventContext>>>>;
export default _default;
