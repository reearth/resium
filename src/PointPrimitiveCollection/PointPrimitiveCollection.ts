import { PointPrimitiveCollection as CesiumPointPrimitiveCollection } from "cesium";

import { createCesiumComponent } from "../core/component";

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

const cesiumProps: (keyof PointPrimitiveCollectionCesiumProps)[] = [
  "blendOption",
  "debugShowBoundingVolume",
  "modelMatrix",
];

const PointPrimitiveCollection = createCesiumComponent<
  Cesium.PointPrimitiveCollection,
  PointPrimitiveCollectionProps,
  {
    primitiveCollection?: Cesium.PrimitiveCollection;
  }
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
