/// <reference types="react" />
import Cesium from "cesium";
export interface PointPrimitiveCesiumProps {
    color?: Cesium.Color;
    disableDepthTestDistance?: boolean;
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
export interface PointPrimitiveContext {
    pointPrimitiveCollection: Cesium.PointPrimitiveCollection;
}
declare const PointPrimitive: import("react").ForwardRefExoticComponent<PointPrimitiveCesiumProps & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<Cesium.PointPrimitive>>>;
export default PointPrimitive;
