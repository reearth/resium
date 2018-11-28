/// <reference types="react" />
import Cesium from "cesium";
export interface SunCesiumProps {
    glowFactor?: number;
    show?: boolean;
}
export interface SunProps extends SunCesiumProps {
}
export interface SunContext {
    scene?: Cesium.Scene;
}
declare const Sun: import("react").ForwardRefExoticComponent<SunProps & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<Cesium.Sun>>>;
export default Sun;
