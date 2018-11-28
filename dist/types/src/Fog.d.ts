/// <reference types="react" />
import Cesium from "cesium";
export interface FogCesiumProps {
    density?: number;
    enabled?: boolean;
    minimumBrightness?: number;
    screenSpaceErrorFactor?: number;
}
export interface FogProps extends FogCesiumProps {
}
export interface FogContext {
    scene?: Cesium.Scene;
}
declare const Fog: import("react").ForwardRefExoticComponent<FogProps & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<Cesium.Fog>>>;
export default Fog;
