import { GroundPolylinePrimitive as CesiumGroundPolylinePrimitive } from "cesium";

import { createCesiumComponent } from "../core/component";
import { EventProps } from "../core/EventManager";

/*
@summary
`GroundPolylinePrimitive` is a ground polyline primitive in the `PrimitiveCollection`.

Primitive is a low layer API for geographical visualization.
[Entity](/components/entity) is more recommended unless performance issues.
*/

/*
@scope
Inside [Viewer](/components/Viewer), [CesiumWidget](/components/CesiumWidget), or [GroundPrimitiveCollection](/components/GroundPrimitiveCollection) component.
If this component is inside GroundPrimitiveCollection component, a ground primitive object will be attached to the ground primitive collection of the scene.
Otherwise, a primitive object will be attached to the PrimitiveCollection of the Viewer or CesiumWidget.
*/

export interface GroundPolylinePrimitiveCesiumProps {
  appearance?: Cesium.Appearance;
  debugShowBoundingVolume?: boolean;
  debugShowShadowVolume?: boolean;
  classificationType?: any; // Cesium.ClassificationType
  depthFailAppearance?: Cesium.Appearance;
  show?: boolean;
}

export interface GroundPolylinePrimitiveCesiumReadonlyProps {
  allowPicking?: boolean;
  asynchronous?: boolean;
  geometryInstances?: Cesium.GeometryInstance[] | Cesium.GeometryInstance;
  interleave?: boolean;
  releaseGeometryInstances?: boolean;
}

export interface GroundPolylinePrimitiveProps
  extends GroundPolylinePrimitiveCesiumProps,
    GroundPolylinePrimitiveCesiumReadonlyProps,
    EventProps<any> {
  // Cesium.GroundPolylinePrimitive
  // Calls when [Primitive#readyPromise](https://cesiumjs.org/Cesium/Build/Documentation/GroundPolylinePrimitive.html#readyPromise) is fullfilled
  onReady?: (primitive: Cesium.GroundPolylinePrimitive) => void;
}

const cesiumProps: (keyof GroundPolylinePrimitiveCesiumProps)[] = [
  "appearance",
  "classificationType",
  "debugShowBoundingVolume",
  "debugShowShadowVolume",
  "depthFailAppearance",
  "show",
];

const cesiumReadonlyProps: (keyof GroundPolylinePrimitiveCesiumReadonlyProps)[] = [
  "allowPicking",
  "asynchronous",
  "geometryInstances",
  "interleave",
  "releaseGeometryInstances",
];

const GroundPolylinePrimitive = createCesiumComponent<
  Cesium.GroundPolylinePrimitive,
  GroundPolylinePrimitiveProps,
  {
    primitiveCollection?: Cesium.PrimitiveCollection;
  }
>({
  name: "GroundPolylinePrimitive",
  create(context, props) {
    if (!context.primitiveCollection) return;
    const element = new CesiumGroundPolylinePrimitive(props);
    if (props.onReady) {
      element.readyPromise.then(props.onReady);
    }
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
  cesiumProps,
  cesiumReadonlyProps,
  useCommonEvent: true,
});

export default GroundPolylinePrimitive;
