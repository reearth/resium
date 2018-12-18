import Cesium from "cesium";

import createCesiumComponent from "./core/CesiumComponent";

/*
@summary
`BillboardCollection` is a collection of billboard primitives.
It can have some `Billboard` components as children.

Primitive is a low layer API for geographical visualization.
[Entity](/components/entity) is more recommended unless performance issues.
*/

/*
@scope
Inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) components.
A BillboardColleciton object will be attached to the PrimitiveCollection of the Viewer or CesiumWidget.
*/

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
