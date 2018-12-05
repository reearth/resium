import Cesium from "cesium";

import createCesiumComponent from "./core/CesiumComponent";

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
