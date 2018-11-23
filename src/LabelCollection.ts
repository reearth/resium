import Cesium from "cesium";

import createCesiumComponent from "./core/CesiumComponent";

export interface LabelCollectionCesiumProps {
  blendOption?: Cesium.BlendOption;
  debugShowBoundingVolume?: boolean;
  modelMatrix?: Cesium.Matrix4;
}

export interface LabelCollectionProps extends LabelCollectionCesiumProps {
  children?: React.ReactNode;
}

export interface LabelCollectionContext {
  primitiveCollection?: Cesium.PrimitiveCollection;
  scene: Cesium.Scene;
}

const cesiumProps: Array<keyof LabelCollectionCesiumProps> = [
  "blendOption",
  "debugShowBoundingVolume",
  "modelMatrix",
];

const LabelCollection = createCesiumComponent<
  Cesium.LabelCollection,
  LabelCollectionProps,
  LabelCollectionContext
>({
  name: "LabelCollection",
  create(cprops, props, context) {
    return new Cesium.LabelCollection({
      scene: context.scene,
      modelMatrix: cprops.modelMatrix,
      blendOption: cprops.blendOption,
      debugShowBoundingVolume: cprops.debugShowBoundingVolume,
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
      labelCollection: element,
    };
  },
  cesiumProps,
});

export default LabelCollection;
