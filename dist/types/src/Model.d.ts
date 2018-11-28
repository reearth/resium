/// <reference types="react" />
import Cesium from "cesium";
export interface ModelCesiumProps {
    basePath?: Cesium.Resource | string;
    show?: boolean;
    modelMatrix?: Cesium.Matrix4;
    scale?: number;
    minimumPixelSize?: number;
    maximumScale?: number;
    id?: any;
    clampAnimations?: boolean;
    shadows?: Cesium.ShadowMode;
    debugShowBoundingVolume?: boolean;
    debugWireframe?: boolean;
    scene?: Cesium.Scene;
    distanceDisplayCondition?: Cesium.DistanceDisplayCondition;
    color?: Cesium.Color;
    colorBlendMode?: any;
    colorBlendAmount?: number;
    silhouetteColor?: Cesium.Color;
    silhouetteSize?: number;
    clippingPlanes?: any;
    dequantizeInShader?: boolean;
    imageBasedLightingFactor?: Cesium.Cartesian2;
    lightColor?: Cesium.Cartesian3;
}
export interface ModelCesiumReadonlyProps {
    allowPicking?: boolean;
    asynchronous?: boolean;
    gltf?: object | ArrayBuffer | Uint8Array;
    incrementallyLoadTextures?: boolean;
    url?: Cesium.Resource | string;
}
export interface ModelProps extends ModelCesiumProps, ModelCesiumReadonlyProps {
    onReady?: (model: Cesium.Model) => void;
}
export interface ModelContext {
    primitiveCollection: Cesium.PrimitiveCollection;
}
declare const Model: import("react").ForwardRefExoticComponent<ModelProps & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<Cesium.Model>>>;
export default Model;
