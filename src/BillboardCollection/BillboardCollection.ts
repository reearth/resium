import { BillboardCollection as CesiumBillboardCollection } from "cesium";

import { createCesiumComponent } from "../core/component";

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

const cesiumProps: (keyof BillboardCollectionCesiumProps)[] = [
  "blendOption",
  "debugShowBoundingVolume",
  "length",
  "modelMatrix",
];

const BillboardCollection = createCesiumComponent<
  Cesium.BillboardCollection,
  BillboardCollectionProps,
  {
    primitiveCollection?: Cesium.PrimitiveCollection;
    scene?: Cesium.Scene;
  }
>({
  name: "BillboardCollection",
  create(context, props) {
    if (!context.primitiveCollection) return;
    const element = new CesiumBillboardCollection({
      modelMatrix: props.modelMatrix,
      debugShowBoundingVolume: props.debugShowBoundingVolume,
      scene: context.scene,
      blendOption: props.blendOption,
    });
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
      billboardCollection: element,
    };
  },
  cesiumProps,
});

export default BillboardCollection;
