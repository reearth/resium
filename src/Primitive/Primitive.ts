import { Primitive as CesiumPrimitive } from "cesium";

import { createCesiumComponent, EventProps, PickCesiumProps } from "../core";

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

export type PrimitiveCesiumProps = PickCesiumProps<CesiumPrimitive, typeof cesiumProps>;

export type PrimitiveCesiumReadonlyProps = PickCesiumProps<
  CesiumPrimitive,
  typeof cesiumReadonlyProps
>;

export type PrimtiiveOtherProps = {
  /** Calls when [Primitive#readyPromise](https://cesium.com/docs/cesiumjs-ref-doc/Primitive.html#readyPromise) is fullfilled */
  onReady?: (primitive: CesiumPrimitive) => void;
};

export type PrimitiveProps = PrimitiveCesiumProps &
  PrimitiveCesiumReadonlyProps &
  EventProps<{ id: string; primitive: CesiumPrimitive }> &
  PrimtiiveOtherProps;

const cesiumProps = [
  "appearance",
  "cull",
  "debugShowBoundingVolume",
  "depthFailAppearance",
  "modelMatrix",
  "shadows",
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
