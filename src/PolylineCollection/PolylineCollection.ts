import { PolylineCollection as CesiumPolylineCollection, Matrix4 } from "cesium";

import { createCesiumComponent, PickCesiumProps, UnusedCesiumProps, AssertNever } from "../core";

/*
@summary
`PolylineCollection` is a collection of polyline primitives.
It can have some `Polyline` components as children.

Primitive is a low layer API for geographical visualization.
[Entity](/components/entity) is more recommended unless performance issues.
*/

/*
@scope
Inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) component.
A PolylineCollection object will be attached to the PrimitiveCollection of the Viewer or CesiumWidget.
*/

export type PolylineCollectionCesiumProps = PickCesiumProps<
  CesiumPolylineCollection,
  typeof cesiumProps
> & {
  debugShowBoundingVolume?: boolean;
  length?: number;
  modelMatrix?: Matrix4;
};

export type PolylineCollectionProps = PolylineCollectionCesiumProps & {
  children?: React.ReactNode;
};

const cesiumProps = ["debugShowBoundingVolume", "length", "modelMatrix"] as const;

// Unused prop check
type IgnoredProps = never;
type UnusedProps = UnusedCesiumProps<CesiumPolylineCollection, typeof cesiumProps>;
type AssertUnusedProps = AssertNever<Exclude<UnusedProps, IgnoredProps>>;

const PolylineCollection = createCesiumComponent<CesiumPolylineCollection, PolylineCollectionProps>(
  {
    name: "PolylineCollection",
    create(context, props) {
      if (!context.primitiveCollection) return;
      const element = new CesiumPolylineCollection({
        modelMatrix: props.modelMatrix,
        debugShowBoundingVolume: props.debugShowBoundingVolume,
        length: props.length, // WORKAROUND: missing field
        scene: context.scene,
      } as any);
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
        polylineCollection: element,
      };
    },
    cesiumProps,
  },
);

export default PolylineCollection;
