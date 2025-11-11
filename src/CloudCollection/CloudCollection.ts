import { CloudCollection as CesiumCloudCollection } from "cesium";
import { ReactNode } from "react";

import { createCesiumComponent, PickCesiumProps } from "../core";

// @cesiumElement CloudCollection

/*
@summary
`CloudCollection` is a collection of cloud primitives.
It can have some [CumulusCloud](/components/CumulusCloud) components as children.
*/

/*
@scope
Inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) component.
A CloudCollection object will be attached to the PrimitiveCollection of the Viewer or CesiumWidget.
*/

export type CloudCollectionCesiumProps = PickCesiumProps<CesiumCloudCollection, typeof cesiumProps>;

export type CloudCollectionOtherProps = {
  children?: ReactNode;
};

export type CloudCollectionProps = CloudCollectionCesiumProps & CloudCollectionOtherProps;

const cesiumProps = [
  "noiseDetail",
  "noiseOffset",
  "show",
  "debugBillboards",
  "debugEllipsoids",
] as const;

const CloudCollection = createCesiumComponent<CesiumCloudCollection, CloudCollectionProps>({
  name: "CloudCollection",
  create: context => {
    if (!context.primitiveCollection) return;
    const collection = new CesiumCloudCollection();
    context.primitiveCollection.add(collection);
    return collection;
  },
  destroy(element, context) {
    if (context.primitiveCollection && !context.primitiveCollection.isDestroyed()) {
      context.primitiveCollection.remove(element);
    }
    if (!element.isDestroyed()) {
      element.destroy();
    }
  },
  provide: cloudCollection => ({
    cloudCollection,
  }),
  cesiumProps,
  setCesiumPropsAfterCreate: true,
});

export default CloudCollection;
