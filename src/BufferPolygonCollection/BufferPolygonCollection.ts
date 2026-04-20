import {
  BufferPolygonCollection as CesiumBufferPolygonCollection,
  ComponentDatatype,
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
};

export type BufferPolygonCollectionOtherProps = {
  children?: ReactNode;
};

export type BufferPolygonCollectionProps = BufferPolygonCollectionCesiumProps &
  BufferPolygonCollectionConstructorProps &
  BufferPolygonCollectionOtherProps;

const cesiumProps = ["show", "debugShowBoundingVolume", "modelMatrix"] as const;

const cesiumReadonlyProps = [
  "primitiveCountMax",
  "vertexCountMax",
  "holeCountMax",
  "triangleCountMax",
  "positionDatatype",
  "allowPicking",
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
    });
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
});

export default BufferPolygonCollection;
