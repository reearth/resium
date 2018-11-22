import Cesium from "cesium";

import createCesiumComponent from "./core/CesiumComponent";
import EventManager, { EventProps } from "./core/eventManager";

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

export interface PrimitiveProps
  extends PrimitiveCesiumProps,
    PrimitiveCesiumReadonlyProps,
    EventProps<Cesium.Primitive> {}

export interface PrimitiveContext {
  primitiveCollection?: Cesium.PrimitiveCollection;
  __RESIUM_EVENT_MANAGER?: EventManager;
}

const cesiumProps: Array<keyof PrimitiveCesiumProps> = [
  "appearance",
  "cull",
  "debugShowBoundingVolume",
  "depthFailAppearance",
  "modelMatrix",
  "shadows",
  "show",
];

const cesiumReadonlyProps: Array<keyof PrimitiveCesiumReadonlyProps> = [
  "allowPicking",
  "asynchronous",
  "compressVertices",
  "geometryInstances",
  "interleave",
  "releaseGeometryInstances",
  "vertexCacheOptimize",
];

const Primitive = createCesiumComponent<Cesium.Primitive, PrimitiveProps, PrimitiveContext>({
  name: "Primitive",
  create(cprops) {
    return new Cesium.Primitive(cprops);
  },
  mount(element, context, props) {
    if (context.__RESIUM_EVENT_MANAGER) {
      context.__RESIUM_EVENT_MANAGER.setEvents(element, props);
    }
    if (context.primitiveCollection) {
      context.primitiveCollection.add(element);
    }
  },
  update(element, props, prevProps, context) {
    if (context.__RESIUM_EVENT_MANAGER) {
      context.__RESIUM_EVENT_MANAGER.setEvents(element, props);
    }
  },
  unmount(element, context) {
    if (context.__RESIUM_EVENT_MANAGER) {
      context.__RESIUM_EVENT_MANAGER.clearEvents(element);
    }
    if (context.primitiveCollection && !context.primitiveCollection.isDestroyed()) {
      context.primitiveCollection.remove(element);
    }
    if (!element.isDestroyed()) {
      element.destroy();
    }
  },
  cesiumProps,
  cesiumReadonlyProps,
});

export default Primitive;
