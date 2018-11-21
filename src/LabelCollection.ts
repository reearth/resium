import Cesium from "cesium";

import createCesiumComponent from "./core/CesiumComponent";

export interface LabelCollectionCesiumProps {
  blendOption?: Cesium.BlendOption;
  debugShowBoundingVolume?: boolean;
  length?: number;
  modelMatrix?: Cesium.Matrix4;
}

export interface LabelCollectionProps extends LabelCollectionCesiumProps {
  children?: React.ReactNode;
}

export interface LabelCollectionContext {
  primitiveCollection: Cesium.PrimitiveCollection;
}

const cesiumProps: Array<keyof LabelCollectionCesiumProps> = [
  "blendOption",
  "debugShowBoundingVolume",
  "length",
  "modelMatrix",
];

const LabelCollection = createCesiumComponent<
  Cesium.LabelCollection,
  LabelCollectionProps,
  LabelCollectionContext
>({
  name: "LabelCollection",
  create(cprops) {
    return new Cesium.LabelCollection(cprops);
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
      labelCollection: element,
    };
  },
  cesiumProps,
});

export default LabelCollection;
