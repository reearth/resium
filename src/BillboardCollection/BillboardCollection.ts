import { BillboardCollection as CesiumBillboardCollection } from "cesium";
import { ReactNode } from "react";

import { createCesiumComponent, PickCesiumProps } from "../core";

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

export type BillboardCollectionCesiumProps = PickCesiumProps<
  CesiumBillboardCollection,
  typeof cesiumProps
>;

export type BillboardCollectionOtherProps = {
  children?: ReactNode;
};

export type BillboardCollectionProps = BillboardCollectionCesiumProps &
  BillboardCollectionOtherProps;

const cesiumProps = [
  "blendOption",
  "debugShowBoundingVolume",
  "debugShowTextureAtlas",
  "modelMatrix",
  "show",
] as const;

const BillboardCollection = createCesiumComponent<
  CesiumBillboardCollection,
  BillboardCollectionProps
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
