/// <reference types="react" />
import Cesium from "cesium";
export interface LabelCollectionCesiumProps {
    blendOption?: Cesium.BlendOption;
    debugShowBoundingVolume?: boolean;
    modelMatrix?: Cesium.Matrix4;
}
export interface LabelCollectionProps extends LabelCollectionCesiumProps {
    children?: React.ReactNode;
}
export interface LabelCollectionContext {
    primitiveCollection?: Cesium.PrimitiveCollection;
    scene: Cesium.Scene;
}
declare const LabelCollection: import("react").ForwardRefExoticComponent<LabelCollectionProps & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<Cesium.LabelCollection>>>;
export default LabelCollection;
