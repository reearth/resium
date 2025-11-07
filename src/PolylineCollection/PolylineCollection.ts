import { PolylineCollection as CesiumPolylineCollection } from "cesium";
import { ReactNode } from "react";

import { createCesiumComponent, PickCesiumProps } from "../core";

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
>;

export type PolylineCollectionOtherProps = {
  children?: ReactNode;
};

export type PolylineCollectionProps = PolylineCollectionCesiumProps & PolylineCollectionOtherProps;

const cesiumProps = ["debugShowBoundingVolume", "length", "modelMatrix", "show"] as const;

const PolylineCollection = createCesiumComponent<CesiumPolylineCollection, PolylineCollectionProps>(
  {
    name: "PolylineCollection",
    create(context, props) {
      if (!context.primitiveCollection) return;
      const element = new CesiumPolylineCollection({
        modelMatrix: props.modelMatrix,
        debugShowBoundingVolume: props.debugShowBoundingVolume,
        length: props.length,
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
