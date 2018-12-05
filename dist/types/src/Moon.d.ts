/// <reference types="react" />
import Cesium from "cesium";
export interface MoonCesiumProps {
    onlySunLighting?: boolean;
    show?: boolean;
    textureUrl?: string;
}
export interface MoonCesiumReadonlyProps {
    ellipsoid?: Cesium.Ellipsoid;
}
export interface MoonProps extends MoonCesiumProps, MoonCesiumReadonlyProps {
}
export interface MoonContext {
    scene?: Cesium.Scene;
}
declare const Moon: import("react").ForwardRefExoticComponent<MoonProps & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<Cesium.Moon>>>;
export default Moon;
