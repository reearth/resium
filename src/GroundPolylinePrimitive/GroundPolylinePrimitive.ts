import { GroundPolylinePrimitive as CesiumGroundPolylinePrimitive } from "cesium";

import {
  EventProps,
  createCesiumComponent,
  PickCesiumProps,
  UnusedCesiumProps,
  AssertNever,
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

export type GroundPolylinePrimitiveCesiumProps = PickCesiumProps<
  CesiumGroundPolylinePrimitive,
  typeof cesiumProps
>;

export type GroundPolylinePrimitiveCesiumReadonlyProps = PickCesiumProps<
  CesiumGroundPolylinePrimitive,
  typeof cesiumReadonlyProps
>;

export type GroundPolylinePrimitiveProps = GroundPolylinePrimitiveCesiumProps &
  GroundPolylinePrimitiveCesiumReadonlyProps &
  EventProps<CesiumGroundPolylinePrimitive> & {
    // Cesium.GroundPolylinePrimitive
    // Calls when [Primitive#readyPromise](https://cesiumjs.org/Cesium/Build/Documentation/GroundPolylinePrimitive.html#readyPromise) is fullfilled
    onReady?: (primitive: CesiumGroundPolylinePrimitive) => void;
  };

const cesiumProps = [
  "appearance",
  "classificationType",
  "debugShowBoundingVolume",
  "debugShowShadowVolume",
  "depthFailAppearance",
  "show",
] as const;

const cesiumReadonlyProps = [
  "allowPicking",
  "asynchronous",
  "geometryInstances",
  "interleave",
  "releaseGeometryInstances",
] as const;

// Unused prop check
type IgnoredProps = never;
type UnusedProps = UnusedCesiumProps<
  CesiumGroundPolylinePrimitive,
  typeof cesiumProps | typeof cesiumReadonlyProps
>;
type AssertUnusedProps = AssertNever<Exclude<UnusedProps, IgnoredProps>>;

const GroundPolylinePrimitive = createCesiumComponent<
  CesiumGroundPolylinePrimitive,
  GroundPolylinePrimitiveProps
>({
  name: "GroundPolylinePrimitive",
  create(context, props) {
    if (!context.primitiveCollection) return;
    const element = new CesiumGroundPolylinePrimitive(props);
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

export default GroundPolylinePrimitive;
