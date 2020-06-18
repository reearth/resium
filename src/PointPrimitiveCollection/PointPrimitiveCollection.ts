import {
  PointPrimitiveCollection as CesiumPointPrimitiveCollection,
  Matrix4,
  BlendOption,
} from "cesium";

import { createCesiumComponent, PickCesiumProps, UnusedCesiumProps, AssertNever } from "../core";

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
> & {
  blendOption?: BlendOption;
  debugShowBoundingVolume?: boolean;
  modelMatrix?: Matrix4;
};

export type PointPrimitiveCollectionProps = PointPrimitiveCollectionCesiumProps & {
  children?: React.ReactNode;
};

const cesiumProps = ["blendOption", "debugShowBoundingVolume", "modelMatrix"] as const;

// Unused prop check
// length: for read only
type IgnoredProps = "length";
type UnusedProps = UnusedCesiumProps<CesiumPointPrimitiveCollection, typeof cesiumProps>;
type AssertUnusedProps = AssertNever<Exclude<UnusedProps, IgnoredProps>>;

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
