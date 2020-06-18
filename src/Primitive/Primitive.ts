import {
  Primitive as CesiumPrimitive,
  Appearance,
  ShadowMode,
  Matrix4,
  GeometryInstance,
} from "cesium";

import { createCesiumComponent } from "../core/component";
import { EventProps } from "../core/EventManager";

/*
@summary
`Primitive` is a basic primitive in the `PrimitiveCollection`.

Primitive is a low layer API for geographical visualization.
[Entity](/components/entity) is more recommended unless performance issues.
*/

/*
@scope
Inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) component.
A primitive object will be attached to the PrimitiveCollection of the Viewer or CesiumWidget.
*/

export interface PrimitiveCesiumProps {
  appearance?: Appearance;
  cull?: boolean;
  debugShowBoundingVolume?: boolean;
  depthFailAppearance?: Appearance;
  modelMatrix?: Matrix4;
  shadows?: ShadowMode;
  show?: boolean;
}

export interface PrimitiveCesiumReadonlyProps {
  allowPicking?: boolean;
  asynchronous?: boolean;
  compressVertices?: boolean;
  geometryInstances?: GeometryInstance[] | GeometryInstance;
  interleave?: boolean;
  releaseGeometryInstances?: boolean;
  vertexCacheOptimize?: boolean;
}

export interface PrimitiveProps
  extends PrimitiveCesiumProps,
    PrimitiveCesiumReadonlyProps,
    EventProps<CesiumPrimitive> {
  // Calls when [Primitive#readyPromise](https://cesiumjs.org/Cesium/Build/Documentation/Primitive.html#readyPromise) is fullfilled
  onReady?: (primitive: CesiumPrimitive) => void;
}

const cesiumProps: (keyof PrimitiveCesiumProps)[] = [
  "appearance",
  "cull",
  "debugShowBoundingVolume",
  "depthFailAppearance",
  "modelMatrix",
  "shadows",
  "show",
];

const cesiumReadonlyProps: (keyof PrimitiveCesiumReadonlyProps)[] = [
  "allowPicking",
  "asynchronous",
  "compressVertices",
  "geometryInstances",
  "interleave",
  "releaseGeometryInstances",
  "vertexCacheOptimize",
];

const Primitive = createCesiumComponent<CesiumPrimitive, PrimitiveProps>({
  name: "Primitive",
  create(context, props) {
    if (!context.primitiveCollection) return;
    const element = new CesiumPrimitive(props);
    if (props.onReady) {
      element.readyPromise.then(props.onReady);
    }
    context.primitiveCollection.add(element);
    return element;
  },
  destroy(element, context) {
    if (context.primitiveCollection && !context.primitiveCollection.isDestroyed()) {
      context.primitiveCollection.remove(element);
    }
    if (!element.isDestroyed()) {
      element.destroy();
    }
  },
  cesiumProps,
  cesiumReadonlyProps,
  useCommonEvent: true,
});

export default Primitive;
