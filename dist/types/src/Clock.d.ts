/// <reference types="react" />
import Cesium, { CesiumWidget } from "cesium";
export interface ClockCesiumProps {
    canAnimate?: boolean;
    clockRange?: Cesium.ClockRange;
    clockStep?: Cesium.ClockStep;
    currentTime?: Cesium.JulianDate;
    multiplier?: number;
    shouldAnimate?: boolean;
    startTime?: Cesium.JulianDate;
    stopTime?: Cesium.JulianDate;
}
export interface ClockCesiumEventProps {
    onStop?: (clock: Cesium.Clock) => void;
    onTick?: (clock: Cesium.Clock) => void;
}
export interface ClockProps extends ClockCesiumProps, ClockCesiumEventProps {
}
export interface ClockContext {
    cesiumWidget: CesiumWidget;
}
declare const Clock: import("react").ForwardRefExoticComponent<ClockProps & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<Cesium.Clock>>>;
export default Clock;
