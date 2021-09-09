import { ClassificationPrimitive as CesiumClassificationPrimitive } from "cesium";

import { createCesiumComponent, EventProps, PickCesiumProps } from "../core";

/*
@summary
`ClassificationPrimitive` is a classification primitive in the `PrimitiveCollection`.

Primitive is a low layer API for geographical visualization.
[Entity](/components/entity) is more recommended unless performance issues.
*/

/*
@scope
Inside [Viewer](/components/Viewer), [CesiumWidget](/components/CesiumWidget), or [GroundPrimitiveCollection](/components/GroundPrimitiveCollection) component.
If this component is inside GroundPrimitiveCollection component, a classification primitive object will be attached to the ground primitive collection of the scene.
Otherwise, a classification primitive object will be attached to the PrimitiveCollection of the Viewer or CesiumWidget.
*/

export type ClassificationPrimitiveCesiumProps = PickCesiumProps<
  CesiumClassificationPrimitive,
  typeof cesiumProps
>;

export type ClassificationPrimitiveCesiumReadonlyProps = PickCesiumProps<
  CesiumClassificationPrimitive,
  typeof cesiumReadonlyProps
>;

export type ClassificationPrimitiveOtherProps = {
  // ClassificationPrimitive
  /** Calls when [Primitive#readyPromise](https://cesium.com/docs/cesiumjs-ref-doc/ClassificationPrimitive.html#readyPromise) is fullfilled */
  onReady?: (primitive: CesiumClassificationPrimitive) => void;
};

export type ClassificationPrimitiveProps = ClassificationPrimitiveCesiumProps &
  ClassificationPrimitiveCesiumReadonlyProps &
  EventProps<CesiumClassificationPrimitive> &
  ClassificationPrimitiveOtherProps;

const cesiumProps = [
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

const ClassificationPrimitive = createCesiumComponent<
  CesiumClassificationPrimitive,
  ClassificationPrimitiveProps
>({
  name: "ClassificationPrimitive",
  create(context, props) {
    if (!context.primitiveCollection) return;
    const element = new CesiumClassificationPrimitive(props);
    if (props.onReady) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
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

export default ClassificationPrimitive;
