import {
  BufferPointCollection as CesiumBufferPointCollection,
} from "cesium";
import { ReactNode } from "react";

import { createCesiumComponent, PickCesiumProps } from "../core";

/*
@summary
`BufferPointCollection` is a high-performance collection of buffer point primitives (experimental).
It can have `BufferPoint` components as children.

This is a low-level primitive API for rendering large numbers of points efficiently.
Note: This API is experimental and subject to change without standard deprecation.
*/

/*
@scope
Inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) component.
A BufferPointCollection object will be attached to the PrimitiveCollection of the Viewer or CesiumWidget.
*/

export type BufferPointCollectionCesiumProps = PickCesiumProps<
  CesiumBufferPointCollection,
  typeof cesiumProps
>;

export type BufferPointCollectionConstructorProps = {
  /** The maximum number of points this collection can hold. Fixed at creation time. */
  primitiveCountMax?: number;
};

export type BufferPointCollectionOtherProps = {
  children?: ReactNode;
};

export type BufferPointCollectionProps = BufferPointCollectionCesiumProps &
  BufferPointCollectionConstructorProps &
  BufferPointCollectionOtherProps;

const cesiumProps = ["show", "debugShowBoundingVolume", "modelMatrix"] as const;

const cesiumReadonlyProps = ["primitiveCountMax"] as const;

const BufferPointCollection = createCesiumComponent<
  CesiumBufferPointCollection,
  BufferPointCollectionProps
>({
  name: "BufferPointCollection",
  create(context, props) {
    if (!context.primitiveCollection) return;
    const element = new CesiumBufferPointCollection({
      primitiveCountMax: props.primitiveCountMax,
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
      bufferPointCollection: element,
    };
  },
  cesiumProps,
  cesiumReadonlyProps,
  setCesiumPropsAfterCreate: true,
});

export default BufferPointCollection;
