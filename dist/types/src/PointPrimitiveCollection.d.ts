/// <reference types="react" />
import Cesium from "cesium";
export interface PointPrimitiveCollectionCesiumProps {
    blendOption?: Cesium.BlendOption;
    debugShowBoundingVolume?: boolean;
    modelMatrix?: Cesium.Matrix4;
}
export interface PointPrimitiveCollectionProps extends PointPrimitiveCollectionCesiumProps {
    children?: React.ReactNode;
}
export interface PointPrimitiveCollectionContext {
    primitiveCollection?: Cesium.PrimitiveCollection;
}
declare const PointPrimitiveCollection: import("react").ForwardRefExoticComponent<PointPrimitiveCollectionProps & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<Cesium.PointPrimitiveCollection>>>;
export default PointPrimitiveCollection;
