import { Primitive as CesiumPrimitive } from "cesium";

import {
  ConstructorOptions,
  createCesiumComponent,
  EventProps,
  Merge,
  PickCesiumProps,
} from "../core";

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

export type Target = Merge<CesiumPrimitive, ConstructorOptions<typeof CesiumPrimitive>>;

export type PrimitiveCesiumProps = PickCesiumProps<Target, typeof cesiumProps>;

export type PrimitiveCesiumReadonlyProps = PickCesiumProps<Target, typeof cesiumReadonlyProps>;

export type PrimtiiveOtherProps = EventProps<{ id: string; primitive: CesiumPrimitive }> & {
  /** Calls when [Primitive#readyPromise](https://cesium.com/docs/cesiumjs-ref-doc/Primitive.html#readyPromise) is fullfilled */
  onReady?: (primitive: CesiumPrimitive) => void;
};

export type PrimitiveProps = PrimitiveCesiumProps &
  PrimitiveCesiumReadonlyProps &
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

export const otherProps = ["onReady"] as const;

const Primitive = createCesiumComponent<CesiumPrimitive, PrimitiveProps>({
  name: "Primitive",
  create(context, props) {
    if (!context.primitiveCollection) return;
    const element = new CesiumPrimitive(props);
    if (props.onReady) {
      const handlePostRender = () => {
        if (element.ready) {
          props.onReady?.(element);
          context.scene?.postRender.removeEventListener(handlePostRender);
        }
      };
      context.scene?.postRender.addEventListener(handlePostRender);
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
  otherProps,
  useCommonEvent: true,
});

export default Primitive;
