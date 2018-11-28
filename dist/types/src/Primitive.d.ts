/// <reference types="react" />
import Cesium from "cesium";
import EventManager, { EventProps } from "./core/EventManager";
export interface PrimitiveCesiumProps {
    appearance?: Cesium.Appearance;
    cull?: boolean;
    debugShowBoundingVolume?: boolean;
    depthFailAppearance?: Cesium.Appearance;
    modelMatrix?: Cesium.Matrix4;
    shadows?: Cesium.ShadowMode;
    show?: boolean;
}
export interface PrimitiveCesiumReadonlyProps {
    allowPicking?: boolean;
    asynchronous?: boolean;
    compressVertices?: boolean;
    geometryInstances?: Cesium.GeometryInstance[] | Cesium.GeometryInstance;
    interleave?: boolean;
    releaseGeometryInstances?: boolean;
    vertexCacheOptimize?: boolean;
}
export interface PrimitiveProps extends PrimitiveCesiumProps, PrimitiveCesiumReadonlyProps, EventProps<Cesium.Primitive> {
    onReady?: (primitive: Cesium.Primitive) => void;
}
export interface PrimitiveContext {
    primitiveCollection?: Cesium.PrimitiveCollection;
    __RESIUM_EVENT_MANAGER?: EventManager;
}
declare const Primitive: import("react").ForwardRefExoticComponent<PrimitiveProps & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<Cesium.Primitive>>>;
export default Primitive;
