/// <reference types="react" />
import Cesium from "cesium";
export interface BillboardCollectionCesiumProps {
    blendOption?: Cesium.BlendOption;
    debugShowBoundingVolume?: boolean;
    length?: number;
    modelMatrix?: Cesium.Matrix4;
}
export interface BillboardCollectionProps extends BillboardCollectionCesiumProps {
    children?: React.ReactNode;
}
export interface BillboardCollectionContext {
    primitiveCollection?: Cesium.PrimitiveCollection;
    scene?: Cesium.Scene;
}
declare const BillboardCollection: import("react").ForwardRefExoticComponent<BillboardCollectionProps & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<Cesium.BillboardCollection>>>;
export default BillboardCollection;
