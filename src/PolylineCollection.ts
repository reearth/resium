import Cesium from "cesium";

import createCesiumComponent from "./core/CesiumComponent";

export interface PolylineCollectionCesiumProps {
  debugShowBoundingVolume?: boolean;
  length?: number;
  modelMatrix?: Cesium.Matrix4;
}

export interface PolylineCollectionProps extends PolylineCollectionCesiumProps {
  children?: React.ReactNode;
}

export interface PolylineCollectionContext {
  primitiveCollection: Cesium.PrimitiveCollection;
  scene: Cesium.Scene;
}

const cesiumProps: Array<keyof PolylineCollectionCesiumProps> = [
  "debugShowBoundingVolume",
  "length",
  "modelMatrix",
];

const PolylineCollection = createCesiumComponent<
  Cesium.PolylineCollection,
  PolylineCollectionProps,
  PolylineCollectionContext
>({
  name: "PolylineCollection",
  create(cprops, props, context) {
    return new Cesium.PolylineCollection({
      modelMatrix: cprops.modelMatrix,
      debugShowBoundingVolume: cprops.debugShowBoundingVolume,
      length: cprops.length,
      scene: context.scene,
    } as any);
  },
  mount(element, context) {
    context.primitiveCollection.add(element);
  },
  unmount(element, context) {
    if (!context.primitiveCollection.isDestroyed()) {
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
});

export default PolylineCollection;
