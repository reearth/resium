import { ClassificationPrimitive as CesiumClassificationPrimitive } from "cesium";

import {
  ConstructorOptions,
  createCesiumComponent,
  EventProps,
  Merge,
  PickCesiumProps,
} from "../core";

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

export type Target = Merge<
  CesiumClassificationPrimitive,
  ConstructorOptions<typeof CesiumClassificationPrimitive>
>;

export type ClassificationPrimitiveCesiumProps = PickCesiumProps<Target, typeof cesiumProps>;

export type ClassificationPrimitiveCesiumReadonlyProps = PickCesiumProps<
  Target,
  typeof cesiumReadonlyProps
>;

export type ClassificationPrimitiveOtherProps = EventProps<CesiumClassificationPrimitive> & {
  // ClassificationPrimitive
  /** Calls when [Primitive#readyPromise](https://cesium.com/docs/cesiumjs-ref-doc/ClassificationPrimitive.html#readyPromise) is fullfilled */
  onReady?: (primitive: CesiumClassificationPrimitive) => void;
};

export type ClassificationPrimitiveProps = ClassificationPrimitiveCesiumProps &
  ClassificationPrimitiveCesiumReadonlyProps &
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
  "appearance",
] as const;

export const otherProps = ["onReady"] as const;

const ClassificationPrimitive = createCesiumComponent<
  CesiumClassificationPrimitive,
  ClassificationPrimitiveProps
>({
  name: "ClassificationPrimitive",
  async create(context, props) {
    if (!context.primitiveCollection) return;
    const element = new CesiumClassificationPrimitive(props);
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

export default ClassificationPrimitive;
