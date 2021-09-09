import { GroundPrimitive as CesiumGroundPrimitive } from "cesium";

import { createCesiumComponent, EventProps, PickCesiumProps } from "../core";

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

export type GroundPrimitiveCesiumProps = PickCesiumProps<CesiumGroundPrimitive, typeof cesiumProps>;

export type GroundPrimitiveCesiumReadonlyProps = PickCesiumProps<
  CesiumGroundPrimitive,
  typeof cesiumReadonlyProps
>;

export type GroundPrimitiveOtherProps = {
  // GroundPrimitive
  /** Calls when [Primitive#readyPromise](https://cesium.com/docs/cesiumjs-ref-doc/GroundPrimitive.html#readyPromise) is fullfilled */
  onReady?: (primitive: CesiumGroundPrimitive) => void;
};

export type GroundPrimitiveProps = GroundPrimitiveCesiumProps &
  GroundPrimitiveCesiumReadonlyProps &
  EventProps<{ id: string; primitive: CesiumGroundPrimitive }> & // TODO: validate type
  GroundPrimitiveOtherProps;

const cesiumProps = [
  "appearance",
  "classificationType",
  "debugShowBoundingVolume",
  "debugShowShadowVolume",
  "depthFailAppearance",
  "show",
] as const;

const cesiumReadonlyProps = [
  "allowPicking",
  "asynchronous",
  "compressVertices",
  "geometryInstances",
  "interleave",
  "releaseGeometryInstances",
  "vertexCacheOptimize",
] as const;

const GroundPrimitive = createCesiumComponent<CesiumGroundPrimitive, GroundPrimitiveProps>({
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
