import Cesium from "cesium";

import createCesiumComponent from "./core/CesiumComponent";

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

export interface GroundPrimitiveCollectionContext {
  scene: Cesium.Scene;
}

const cesiumProps: (keyof GroundPrimitiveCollectionCesiumProps)[] = ["show"];

const GroundPrimitiveCollection = createCesiumComponent<
  Cesium.PrimitiveCollection,
  GroundPrimitiveCollectionProps,
  GroundPrimitiveCollectionContext
>({
  name: "GroundPrimitiveCollection",
  create(cprops, props, context) {
    return context.scene.groundPrimitives;
  },
  provide(element) {
    return {
      primitiveCollection: element,
    };
  },
  cesiumProps,
  setCesiumPropsAfterCreate: true,
});

export default GroundPrimitiveCollection;
