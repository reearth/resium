import { LabelCollection as CesiumLabelCollection } from "cesium";
import { ReactNode } from "react";

import { createCesiumComponent, PickCesiumProps } from "../core";

/*
@summary
`LabelCollection` is a collection of label primitives.
It can have some `Label` components as children.

Primitive is a low layer API for geographical visualization.
[Entity](/components/entity) is more recommended unless performance issues.
*/

/*
@scope
Inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) component.
A LabelCollection object will be attached to the PrimitiveCollection of the Viewer or CesiumWidget.
*/

export type LabelCollectionCesiumProps = PickCesiumProps<CesiumLabelCollection, typeof cesiumProps>;

export type LabelCollectionOtherProps = {
  children?: ReactNode;
};

export type LabelCollectionProps = LabelCollectionCesiumProps & LabelCollectionOtherProps;

const cesiumProps = ["blendOption", "debugShowBoundingVolume", "modelMatrix", "show"] as const;

const LabelCollection = createCesiumComponent<CesiumLabelCollection, LabelCollectionProps>({
  name: "LabelCollection",
  create(context, props) {
    if (!context.scene || !context.primitiveCollection) return;
    const element = new CesiumLabelCollection({
      scene: context.scene,
      modelMatrix: props.modelMatrix,
      blendOption: props.blendOption,
      debugShowBoundingVolume: props.debugShowBoundingVolume,
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
      labelCollection: element,
    };
  },
  cesiumProps,
});

export default LabelCollection;
