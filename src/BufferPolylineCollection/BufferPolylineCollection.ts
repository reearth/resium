import {
  BufferPolylineCollection as CesiumBufferPolylineCollection,
} from "cesium";
import { ReactNode } from "react";

import { createCesiumComponent, PickCesiumProps } from "../core";

/*
@summary
`BufferPolylineCollection` is a high-performance collection of buffer polyline primitives (experimental).
It can have `BufferPolyline` components as children.

This is a low-level primitive API for rendering large numbers of polylines efficiently.
Note: This API is experimental and subject to change without standard deprecation.
*/

/*
@scope
Inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) component.
A BufferPolylineCollection object will be attached to the PrimitiveCollection of the Viewer or CesiumWidget.
*/

export type BufferPolylineCollectionCesiumProps = PickCesiumProps<
  CesiumBufferPolylineCollection,
  typeof cesiumProps
>;

export type BufferPolylineCollectionConstructorProps = {
  /** The maximum number of polylines this collection can hold. Fixed at creation time. */
  primitiveCountMax?: number;
  /** The maximum number of vertices across all polylines in this collection. Fixed at creation time. */
  vertexCountMax?: number;
};

export type BufferPolylineCollectionOtherProps = {
  children?: ReactNode;
};

export type BufferPolylineCollectionProps = BufferPolylineCollectionCesiumProps &
  BufferPolylineCollectionConstructorProps &
  BufferPolylineCollectionOtherProps;

const cesiumProps = ["show", "debugShowBoundingVolume", "modelMatrix"] as const;

const cesiumReadonlyProps = ["primitiveCountMax", "vertexCountMax"] as const;

const BufferPolylineCollection = createCesiumComponent<
  CesiumBufferPolylineCollection,
  BufferPolylineCollectionProps
>({
  name: "BufferPolylineCollection",
  create(context, props) {
    if (!context.primitiveCollection) return;
    const element = new CesiumBufferPolylineCollection({
      primitiveCountMax: props.primitiveCountMax,
      vertexCountMax: props.vertexCountMax,
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
      bufferPolylineCollection: element,
    };
  },
  cesiumProps,
  cesiumReadonlyProps,
  setCesiumPropsAfterCreate: true,
});

export default BufferPolylineCollection;
