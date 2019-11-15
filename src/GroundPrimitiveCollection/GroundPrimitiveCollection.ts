import { createCesiumComponent } from "../core/component";

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

export interface GroundPrimitiveCollectionCesiumProps {
  show?: boolean;
}

export interface GroundPrimitiveCollectionProps extends GroundPrimitiveCollectionCesiumProps {
  children?: React.ReactNode;
}

const cesiumProps: (keyof GroundPrimitiveCollectionCesiumProps)[] = ["show"];

const GroundPrimitiveCollection = createCesiumComponent<
  Cesium.PrimitiveCollection,
  GroundPrimitiveCollectionProps,
  {
    scene?: Cesium.Scene;
  },
  { primitiveCollection: Cesium.PrimitiveCollection }
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
