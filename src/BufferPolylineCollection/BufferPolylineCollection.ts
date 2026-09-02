import type { BlendOption, BoundingSphere, HeightReference, Matrix4 } from "cesium";
import {
  BufferPolylineCollection as CesiumBufferPolylineCollection
} from "cesium";
import type { ReactNode } from "react";

import type { PickCesiumProps } from "../core";
import { createCesiumComponent } from "../core";

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
  /**
   * Model-to-world transform applied to every polyline. Fixed at creation time —
   * Cesium 1.141 made the property readonly post-construction. To animate, hold
   * a ref and mutate the Matrix4 in place via `Matrix4.clone(next, current)`.
   */
  modelMatrix?: Matrix4;
  /**
   * Precomputed bounding volume. **Interpreted in world space** (Cesium 1.142+);
   * apply the same `modelMatrix` to the bounding volume that you apply to the
   * polylines. Fixed at creation time.
   */
  boundingVolume?: BoundingSphere;
  /**
   * Blending mode for the collection. Pair with an alpha-aware
   * `BufferPrimitiveMaterial` to render translucent polylines. Fixed at
   * creation time.
   */
  blendOption?: BlendOption;
  /**
   * When set to a clamping value, the whole collection is draped onto terrain
   * and/or 3D Tiles (Cesium 1.145+) instead of being drawn as geometry of its
   * own. `CLAMP_TO_TERRAIN` drapes onto terrain, `CLAMP_TO_3D_TILE` onto 3D
   * Tiles, and `CLAMP_TO_GROUND` onto both. Fixed at creation time.
   */
  heightReference?: HeightReference;
  /**
   * Unit for `BufferPolyline` widths in this collection (Cesium 1.145+):
   * `"pixels"` on screen (the default), or `"meters"` in world space. Under a
   * clamped `heightReference` those meters are measured on the ellipsoid
   * surface, so elevation and terrain slope stretch the drawn width. Fixed at
   * creation time.
   */
  widthUnits?: "pixels" | "meters";
};

export type BufferPolylineCollectionOtherProps = {
  children?: ReactNode;
};

export type BufferPolylineCollectionProps = BufferPolylineCollectionCesiumProps &
  BufferPolylineCollectionConstructorProps &
  BufferPolylineCollectionOtherProps;

const cesiumProps = ["show", "debugShowBoundingVolume"] as const;

const cesiumReadonlyProps = [
  "primitiveCountMax",
  "vertexCountMax",
  "modelMatrix",
  "boundingVolume",
  "blendOption",
  "heightReference",
  "widthUnits",
] as const;

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
      modelMatrix: props.modelMatrix,
      boundingVolume: props.boundingVolume,
      blendOption: props.blendOption,
      heightReference: props.heightReference,
      widthUnits: props.widthUnits,
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
