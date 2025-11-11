import { PrimitiveCollection } from "cesium";
import { ReactNode } from "react";

import { createCesiumComponent, PickCesiumProps } from "../core";

// @cesiumElement PrimitiveCollection

/*
@summary
`GroundPrimitiveCollection` is the collection of ground primitives of the scene.
All properties are applied to single ground primitives collection of the scene.
It can have some GroundPrimitive components as children.
*/

/*
@scope
Inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) components.
*/

export type GroundPrimitiveCollectionCesiumProps = PickCesiumProps<
  PrimitiveCollection,
  typeof cesiumProps
>;

export type GroundPrimitiveCollectionOtherProps = {
  children?: ReactNode;
};

export type GroundPrimitiveCollectionProps = GroundPrimitiveCollectionCesiumProps &
  GroundPrimitiveCollectionOtherProps;

const cesiumProps = ["show", "destroyPrimitives", "primitiveAdded", "primitiveRemoved"] as const;

const GroundPrimitiveCollection = createCesiumComponent<
  PrimitiveCollection,
  GroundPrimitiveCollectionProps
>({
  name: "GroundPrimitiveCollection",
  create: context => context.scene?.groundPrimitives,
  provide: element => ({
    primitiveCollection: element,
  }),
  cesiumProps,
  setCesiumPropsAfterCreate: true,
});

export default GroundPrimitiveCollection;
