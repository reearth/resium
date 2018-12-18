import Cesium from "cesium";

import createCesiumComponent from "./core/CesiumComponent";

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

export interface PointPrimitiveCollectionCesiumProps {
  blendOption?: Cesium.BlendOption;
  debugShowBoundingVolume?: boolean;
  modelMatrix?: Cesium.Matrix4;
}

export interface PointPrimitiveCollectionProps extends PointPrimitiveCollectionCesiumProps {
  children?: React.ReactNode;
}

export interface PointPrimitiveCollectionContext {
  primitiveCollection?: Cesium.PrimitiveCollection;
}

const cesiumProps: Array<keyof PointPrimitiveCollectionCesiumProps> = [
  "blendOption",
  "debugShowBoundingVolume",
  "modelMatrix",
];

const PointPrimitiveCollection = createCesiumComponent<
  Cesium.PointPrimitiveCollection,
  PointPrimitiveCollectionProps,
  PointPrimitiveCollectionContext
>({
  name: "PointPrimitveCollection",
  create(cprops) {
    return new Cesium.PointPrimitiveCollection(cprops);
  },
  mount(element, context) {
    if (context.primitiveCollection) {
      context.primitiveCollection.add(element);
    }
  },
  unmount(element, context) {
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
