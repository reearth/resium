import {
  BufferPolygonCollection as CesiumBufferPolygonCollection,
  ComponentDatatype,
  Matrix4,
} from "cesium";
import { ReactNode } from "react";

import { createCesiumComponent, PickCesiumProps } from "../core";

/*
@summary
`BufferPolygonCollection` is a high-performance collection of buffer polygon primitives (experimental).
It can have `BufferPolygon` components as children.

This is a low-level primitive API for rendering large numbers of polygons efficiently.
Note: This API is experimental and subject to change without standard deprecation.
*/

/*
@scope
Inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) component.
A BufferPolygonCollection object will be attached to the PrimitiveCollection of the Viewer or CesiumWidget.
*/

export type BufferPolygonCollectionCesiumProps = PickCesiumProps<
  CesiumBufferPolygonCollection,
  typeof cesiumProps
>;

export type BufferPolygonCollectionConstructorProps = {
  /** The maximum number of polygons this collection can hold. Fixed at creation time. */
  primitiveCountMax?: number;
  /** The maximum number of vertices across all polygons in this collection. Fixed at creation time. */
  vertexCountMax?: number;
  /** The maximum number of holes across all polygons in this collection. Fixed at creation time. */
  holeCountMax?: number;
  /** The maximum number of triangles across all polygons in this collection. Fixed at creation time. */
  triangleCountMax?: number;
  /** The component datatype for position data. Fixed at creation time. */
  positionDatatype?: ComponentDatatype;
  /** Whether primitives in the collection can be picked. Fixed at creation time. */
  allowPicking?: boolean;
  /**
   * Model-to-world transform applied to every polygon. Fixed at creation time —
   * Cesium 1.141 made the property readonly post-construction. To animate, hold
   * a ref and mutate the Matrix4 in place via `Matrix4.clone(next, current)`.
   */
  modelMatrix?: Matrix4;
};

// Cesium 1.141's BufferPolygonCollection subclass constructor type omits the
// inherited `modelMatrix` option even though the base class accepts it at
// runtime via super(). Widen the constructor option type so we can forward
// the prop without losing typechecking on the rest of the options.
type BufferPolygonCollectionCtorOptions = ConstructorParameters<
  typeof CesiumBufferPolygonCollection
>[0] & { modelMatrix?: Matrix4 };

export type BufferPolygonCollectionOtherProps = {
  children?: ReactNode;
};

export type BufferPolygonCollectionProps = BufferPolygonCollectionCesiumProps &
  BufferPolygonCollectionConstructorProps &
  BufferPolygonCollectionOtherProps;

const cesiumProps = ["show", "debugShowBoundingVolume"] as const;

const cesiumReadonlyProps = [
  "primitiveCountMax",
  "vertexCountMax",
  "holeCountMax",
  "triangleCountMax",
  "positionDatatype",
  "allowPicking",
  "modelMatrix",
] as const;

const BufferPolygonCollection = createCesiumComponent<
  CesiumBufferPolygonCollection,
  BufferPolygonCollectionProps
>({
  name: "BufferPolygonCollection",
  create(context, props) {
    if (!context.primitiveCollection) return;
    const element = new CesiumBufferPolygonCollection({
      primitiveCountMax: props.primitiveCountMax,
      vertexCountMax: props.vertexCountMax,
      holeCountMax: props.holeCountMax,
      triangleCountMax: props.triangleCountMax,
      positionDatatype: props.positionDatatype,
      allowPicking: props.allowPicking,
      modelMatrix: props.modelMatrix,
    } as BufferPolygonCollectionCtorOptions);
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
  provide(element) {
    return {
      bufferPolygonCollection: element,
    };
  },
  cesiumProps,
  cesiumReadonlyProps,
  setCesiumPropsAfterCreate: true,
});

export default BufferPolygonCollection;
