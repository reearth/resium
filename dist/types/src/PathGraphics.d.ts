/// <reference types="react" />
import Cesium from "cesium";
export interface PathGraphicsCesiumProps {
    leadTime?: Cesium.Property | number;
    trailTime?: Cesium.Property | number;
    show?: Cesium.Property | boolean;
    width?: Cesium.Property | number;
    material?: Cesium.MaterialProperty | Cesium.Color | string;
    resolution?: Cesium.Property | number;
    distanceDisplayCondition?: Cesium.Property | Cesium.DistanceDisplayCondition;
}
export interface PathGraphicsProps extends PathGraphicsCesiumProps {
    onDefinitionChange?: () => void;
}
export interface PathGraphicsContext {
    entity?: Cesium.Entity;
}
declare const PathGraphics: import("react").ForwardRefExoticComponent<PathGraphicsProps & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<Cesium.PathGraphics>>>;
export default PathGraphics;
