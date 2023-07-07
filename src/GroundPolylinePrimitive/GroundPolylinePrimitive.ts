import { GroundPolylinePrimitive as CesiumGroundPolylinePrimitive } from "cesium";

import {
  EventProps,
  createCesiumComponent,
  PickCesiumProps,
  Merge,
  ConstructorOptions,
} from "../core";

/*
@summary
`GroundPolylinePrimitive` is a ground polyline primitive in the `PrimitiveCollection`.

Primitive is a low layer API for geographical visualization.
[Entity](/components/entity) is more recommended unless performance issues.
*/

/*
@scope
Inside [Viewer](/components/Viewer), [CesiumWidget](/components/CesiumWidget), or [GroundPrimitiveCollection](/components/GroundPrimitiveCollection) component.
If this component is inside GroundPrimitiveCollection component, a ground primitive object will be attached to the ground primitive collection of the scene.
Otherwise, a primitive object will be attached to the PrimitiveCollection of the Viewer or CesiumWidget.
*/

export type Target = Merge<
  CesiumGroundPolylinePrimitive,
  ConstructorOptions<typeof CesiumGroundPolylinePrimitive>
>;

export type GroundPolylinePrimitiveCesiumProps = PickCesiumProps<Target, typeof cesiumProps>;

export type GroundPolylinePrimitiveCesiumReadonlyProps = PickCesiumProps<
  Target,
  typeof cesiumReadonlyProps
>;

export type GroundPolylinePrimitiveOtherProps = EventProps<{
  id: string;
  primitive: CesiumGroundPolylinePrimitive; // TODO: validate type
}> & {
  /** Calls when [Primitive#readyPromise](https://cesium.com/docs/cesiumjs-ref-doc/GroundPolylinePrimitive.html#readyPromise) is fullfilled */
  onReady?: (primitive: CesiumGroundPolylinePrimitive) => void;
};

export type GroundPolylinePrimitiveProps = GroundPolylinePrimitiveCesiumProps &
  GroundPolylinePrimitiveCesiumReadonlyProps &
  GroundPolylinePrimitiveOtherProps;

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
  "geometryInstances",
  "interleave",
  "releaseGeometryInstances",
] as const;

export const otherProps = ["onReady"] as const;

const GroundPolylinePrimitive = createCesiumComponent<
  CesiumGroundPolylinePrimitive,
  GroundPolylinePrimitiveProps
>({
  name: "GroundPolylinePrimitive",
  create(context, props) {
    if (!context.primitiveCollection) return;
    const element = new CesiumGroundPolylinePrimitive(props);
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

export default GroundPolylinePrimitive;
