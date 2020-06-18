import { PrimitiveCollection } from "cesium";

import { createCesiumComponent, PickCesiumProps, UnusedCesiumProps, AssertNever } from "../core";

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

export type GroundPrimitiveCollectionProps = GroundPrimitiveCollectionCesiumProps & {
  children?: React.ReactNode;
};

const cesiumProps = ["show", "destroyPrimitives"] as const;

// Unused prop check
type IgnoredProps = never;
type UnusedProps = UnusedCesiumProps<PrimitiveCollection, typeof cesiumProps>;
type AssertUnusedProps = AssertNever<Exclude<UnusedProps, IgnoredProps>>;

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
