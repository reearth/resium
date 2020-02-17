import { PolylineCollection as CesiumPolylineCollection } from "cesium";

import { createCesiumComponent } from "../core/component";

/*
@summary
`PolylineCollection` is a collection of polyline primitives.
It can have some `Polyline` components as children.

Primitive is a low layer API for geographical visualization.
[Entity](/components/entity) is more recommended unless performance issues.
*/

/*
@scope
Inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) component.
A PolylineCollection object will be attached to the PrimitiveCollection of the Viewer or CesiumWidget.
*/

export interface PolylineCollectionCesiumProps {
  debugShowBoundingVolume?: boolean;
  length?: number;
  modelMatrix?: Cesium.Matrix4;
}

export interface PolylineCollectionProps extends PolylineCollectionCesiumProps {
  children?: React.ReactNode;
}

const cesiumProps: (keyof PolylineCollectionCesiumProps)[] = [
  "debugShowBoundingVolume",
  "length",
  "modelMatrix",
];

const PolylineCollection = createCesiumComponent<
  Cesium.PolylineCollection,
  PolylineCollectionProps,
  {
    primitiveCollection?: Cesium.PrimitiveCollection;
    scene?: Cesium.Scene;
  }
>({
  name: "PolylineCollection",
  create(context, props) {
    if (!context.primitiveCollection) return;
    const element = new CesiumPolylineCollection({
      modelMatrix: props.modelMatrix,
      debugShowBoundingVolume: props.debugShowBoundingVolume,
      length: props.length, // WORKAROUND
      scene: context.scene,
    } as any);
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
      polylineCollection: element,
    };
  },
  cesiumProps,
});

export default PolylineCollection;
