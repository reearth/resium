import { GroundPrimitive as CesiumGroundPrimitive } from "cesium";

import { createCesiumComponent } from "../core/component";
import { EventProps } from "../core/EventManager";

/*
@summary
`GroundPrimitive` is a ground primitive in the `PrimitiveCollection`.

Primitive is a low layer API for geographical visualization.
[Entity](/components/entity) is more recommended unless performance issues.
*/

/*
@scope
Inside [Viewer](/components/Viewer), [CesiumWidget](/components/CesiumWidget), or [GroundPrimitiveCollection](/components/GroundPrimitiveCollection) component.
If this component is inside GroundPrimitiveCollection component, a ground primitive object will be attached to the ground primitive collection of the scene.
Otherwise, a primitive object will be attached to the PrimitiveCollection of the Viewer or CesiumWidget.
*/

export interface GroundPrimitiveCesiumProps {
  appearance?: Cesium.Appearance;
  debugShowBoundingVolume?: boolean;
  debugShowShadowVolume?: boolean;
  classificationType?: any; // Cesium.ClassificationType
  depthFailAppearance?: Cesium.Appearance;
  show?: boolean;
}

export interface GroundPrimitiveCesiumReadonlyProps {
  allowPicking?: boolean;
  asynchronous?: boolean;
  compressVertices?: boolean;
  geometryInstances?: Cesium.GeometryInstance[] | Cesium.GeometryInstance;
  interleave?: boolean;
  releaseGeometryInstances?: boolean;
  vertexCacheOptimize?: boolean;
}

export interface GroundPrimitiveProps
  extends GroundPrimitiveCesiumProps,
    GroundPrimitiveCesiumReadonlyProps,
    EventProps<any> {
  // Cesium.GroundPrimitive
  // Calls when [Primitive#readyPromise](https://cesiumjs.org/Cesium/Build/Documentation/GroundPrimitive.html#readyPromise) is fullfilled
  onReady?: (primitive: Cesium.GroundPrimitive) => void;
}

const cesiumProps: (keyof GroundPrimitiveCesiumProps)[] = [
  "appearance",
  "classificationType",
  "debugShowBoundingVolume",
  "debugShowShadowVolume",
  "depthFailAppearance",
  "show",
];

const cesiumReadonlyProps: (keyof GroundPrimitiveCesiumReadonlyProps)[] = [
  "allowPicking",
  "asynchronous",
  "compressVertices",
  "geometryInstances",
  "interleave",
  "releaseGeometryInstances",
  "vertexCacheOptimize",
];

const GroundPrimitive = createCesiumComponent<
  Cesium.GroundPrimitive,
  GroundPrimitiveProps,
  {
    primitiveCollection?: Cesium.PrimitiveCollection;
  }
>({
  name: "GroundPrimitive",
  create(context, props) {
    if (!context.primitiveCollection) return;
    const element = new CesiumGroundPrimitive(props);
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

export default GroundPrimitive;
