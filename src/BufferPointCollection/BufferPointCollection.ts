import type { BlendOption, BoundingSphere, Matrix4 } from "cesium";
import {
  BufferPointCollection as CesiumBufferPointCollection
} from "cesium";
import type { ReactNode } from "react";

import type { PickCesiumProps } from "../core";
import { createCesiumComponent } from "../core";

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
  /**
   * Model-to-world transform applied to every point. Fixed at creation time —
   * Cesium 1.141 made the property readonly post-construction. To animate, hold
   * a ref and mutate the Matrix4 in place via `Matrix4.clone(next, current)`.
   */
  modelMatrix?: Matrix4;
  /**
   * Precomputed bounding volume. **Interpreted in world space** (Cesium 1.142+);
   * apply the same `modelMatrix` to the bounding volume that you apply to the
   * points. Providing this skips the per-frame recompute cost on large animated
   * collections. Fixed at creation time.
   */
  boundingVolume?: BoundingSphere;
  /**
   * Blending mode for the collection. Use `BlendOption.OPAQUE_AND_TRANSLUCENT`
   * (or `TRANSLUCENT`) together with a `BufferPrimitiveMaterial` whose
   * `color.alpha`/`outlineColor.alpha` is less than 1 to render translucent
   * points. Fixed at creation time.
   */
  blendOption?: BlendOption;
};

// Cesium 1.141's BufferPointCollection subclass constructor type omits the
// inherited `modelMatrix` option even though the base class accepts it at
// runtime via super(). Widen the constructor option type so we can forward
// the prop without losing typechecking on the rest of the options.
type BufferPointCollectionCtorOptions = ConstructorParameters<
  typeof CesiumBufferPointCollection
>[0] & { modelMatrix?: Matrix4; boundingVolume?: BoundingSphere; blendOption?: BlendOption };

export type BufferPointCollectionOtherProps = {
  children?: ReactNode;
};

export type BufferPointCollectionProps = BufferPointCollectionCesiumProps &
  BufferPointCollectionConstructorProps &
  BufferPointCollectionOtherProps;

const cesiumProps = ["show", "debugShowBoundingVolume"] as const;

const cesiumReadonlyProps = [
  "primitiveCountMax",
  "modelMatrix",
  "boundingVolume",
  "blendOption",
] as const;

const BufferPointCollection = createCesiumComponent<
  CesiumBufferPointCollection,
  BufferPointCollectionProps
>({
  name: "BufferPointCollection",
  create(context, props) {
    if (!context.primitiveCollection) return;
    const element = new CesiumBufferPointCollection({
      primitiveCountMax: props.primitiveCountMax,
      modelMatrix: props.modelMatrix,
      boundingVolume: props.boundingVolume,
      blendOption: props.blendOption,
    } as BufferPointCollectionCtorOptions);
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
