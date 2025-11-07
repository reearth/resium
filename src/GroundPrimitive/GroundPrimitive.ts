import { GroundPrimitive as CesiumGroundPrimitive } from "cesium";

import {
  ConstructorOptions,
  createCesiumComponent,
  EventProps,
  Merge,
  PickCesiumProps,
} from "../core";

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

export type Target = Merge<CesiumGroundPrimitive, ConstructorOptions<typeof CesiumGroundPrimitive>>;

export type GroundPrimitiveCesiumProps = PickCesiumProps<Target, typeof cesiumProps>;

export type GroundPrimitiveCesiumReadonlyProps = PickCesiumProps<
  Target,
  typeof cesiumReadonlyProps
>;

export type GroundPrimitiveOtherProps = EventProps<{
  id: string;
  primitive: CesiumGroundPrimitive; // TODO: validate type
}> & {
  // GroundPrimitive
  /** Calls when [Primitive#readyPromise](https://cesium.com/docs/cesiumjs-ref-doc/GroundPrimitive.html#readyPromise) is fullfilled */
  onReady?: (primitive: CesiumGroundPrimitive) => void;
};

export type GroundPrimitiveProps = GroundPrimitiveCesiumProps &
  GroundPrimitiveCesiumReadonlyProps &
  GroundPrimitiveOtherProps;

const cesiumProps = [
  "appearance",
  "classificationType",
  "debugShowBoundingVolume",
  "debugShowShadowVolume",
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

const GroundPrimitive = createCesiumComponent<CesiumGroundPrimitive, GroundPrimitiveProps>({
  name: "GroundPrimitive",
  create(context, props) {
    if (!context.primitiveCollection) return;
    const element = new CesiumGroundPrimitive(props);
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

export default GroundPrimitive;
