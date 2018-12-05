/// <reference types="react" />
import Cesium from "cesium";
export interface PolylineCollectionCesiumProps {
    debugShowBoundingVolume?: boolean;
    length?: number;
    modelMatrix?: Cesium.Matrix4;
}
export interface PolylineCollectionProps extends PolylineCollectionCesiumProps {
    children?: React.ReactNode;
}
export interface PolylineCollectionContext {
    primitiveCollection?: Cesium.PrimitiveCollection;
    scene: Cesium.Scene;
}
declare const PolylineCollection: import("react").ForwardRefExoticComponent<PolylineCollectionProps & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<Cesium.PolylineCollection>>>;
export default PolylineCollection;
