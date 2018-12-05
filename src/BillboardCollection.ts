import Cesium from "cesium";

import createCesiumComponent from "./core/CesiumComponent";

export interface BillboardCollectionCesiumProps {
  blendOption?: Cesium.BlendOption;
  debugShowBoundingVolume?: boolean;
  length?: number;
  modelMatrix?: Cesium.Matrix4;
}

export interface BillboardCollectionProps extends BillboardCollectionCesiumProps {
  children?: React.ReactNode;
}

export interface BillboardCollectionContext {
  primitiveCollection?: Cesium.PrimitiveCollection;
  scene?: Cesium.Scene;
}

const cesiumProps: Array<keyof BillboardCollectionCesiumProps> = [
  "blendOption",
  "debugShowBoundingVolume",
  "length",
  "modelMatrix",
];

const BillboardCollection = createCesiumComponent<
  Cesium.BillboardCollection,
  BillboardCollectionProps,
  BillboardCollectionContext
>({
  name: "BillboardCollection",
  create(cprops, props, context) {
    return new Cesium.BillboardCollection({
      modelMatrix: cprops.modelMatrix,
      debugShowBoundingVolume: cprops.debugShowBoundingVolume,
      scene: context.scene,
      blendOption: cprops.blendOption,
    } as any);
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
      billboardCollection: element,
    };
  },
  cesiumProps,
});

export default BillboardCollection;
