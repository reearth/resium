import { PointPrimitiveCollection as CesiumPointPrimitiveCollection } from "cesium";
import { ReactNode } from "react";

import { createCesiumComponent, PickCesiumProps } from "../core";

/*
@summary
`PointPrimitiveCollection` is a collection of point primitives.
It can have some `PointPrimitive` components as children.

Primitive is a low layer API for geographical visualization.
[Entity](/components/entity) is more recommended unless performance issues.
*/

/*
@scope
Inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) component.
A PointPrimitiveCollection object will be attached to the PrimitiveCollection of the Viewer or CesiumWidget.
*/

export type PointPrimitiveCollectionCesiumProps = PickCesiumProps<
  CesiumPointPrimitiveCollection,
  typeof cesiumProps
>;

export type PointPrimitiveCollectionOtherProps = {
  children?: ReactNode;
};

export type PointPrimitiveCollectionProps = PointPrimitiveCollectionCesiumProps &
  PointPrimitiveCollectionOtherProps;

const cesiumProps = ["blendOption", "debugShowBoundingVolume", "modelMatrix", "show"] as const;

const PointPrimitiveCollection = createCesiumComponent<
  CesiumPointPrimitiveCollection,
  PointPrimitiveCollectionProps
>({
  name: "PointPrimitveCollection",
  create(context, props) {
    if (!context.primitiveCollection) return;
    const element = new CesiumPointPrimitiveCollection(props);
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
      pointPrimitiveCollection: element,
    };
  },
  cesiumProps,
});

export default PointPrimitiveCollection;
