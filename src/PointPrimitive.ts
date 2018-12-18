import Cesium from "cesium";

import createCesiumComponent from "./core/CesiumComponent";
import EventManager, { EventProps } from "./core/EventManager";

/*
@summary
`PointPrimitive` is a point primitive in the `PointPrimitiveCollection`.

Primitive is a low layer API for geographical visualization.
[Entity](/components/entity) is more recommended unless performance issues.
*/

/*
@scope
Only inside [PointPrimitiveCollection](/components/PointPrimitiveCollection) component.
A point object will be attached to the parent PointPrimitiveCollection.
*/

export interface PointPrimitiveCesiumProps {
  color?: Cesium.Color;
  disableDepthTestDistance?: number;
  distanceDisplayCondition?: Cesium.DistanceDisplayCondition;
  id?: any;
  outlineColor?: Cesium.Color;
  outlineWidth?: number;
  pixelSize?: number;
  position?: Cesium.Cartesian3;
  scaleByDistance?: Cesium.NearFarScalar;
  show?: boolean;
  translucencyByDistance?: Cesium.NearFarScalar;
}

export interface PointPrimitiveProps
  extends PointPrimitiveCesiumProps,
    EventProps<Cesium.PointPrimitive> {}

export interface PointPrimitiveContext {
  pointPrimitiveCollection?: Cesium.PointPrimitiveCollection;
  __RESIUM_EVENT_MANAGER?: EventManager;
}

const cesiumProps: Array<keyof PointPrimitiveCesiumProps> = [
  "color",
  "disableDepthTestDistance",
  "distanceDisplayCondition",
  "id",
  "outlineColor",
  "outlineWidth",
  "pixelSize",
  "position",
  "scaleByDistance",
  "show",
  "translucencyByDistance",
];

const PointPrimitive = createCesiumComponent<
  Cesium.PointPrimitive,
  PointPrimitiveProps,
  PointPrimitiveContext
>({
  name: "PointPrimitive",
  create() {
    return new Cesium.PointPrimitive();
  },
  mount(element, context, props) {
    if (context.__RESIUM_EVENT_MANAGER) {
      context.__RESIUM_EVENT_MANAGER.setEvents(element, props);
    }
    if (context.pointPrimitiveCollection) {
      context.pointPrimitiveCollection.add(element);
    }
  },
  update(element, props, prevProps, context) {
    if (context.__RESIUM_EVENT_MANAGER) {
      context.__RESIUM_EVENT_MANAGER.setEvents(element, props);
    }
  },
  unmount(element, context) {
    if (context.__RESIUM_EVENT_MANAGER) {
      context.__RESIUM_EVENT_MANAGER.clearEvents(element);
    }
    if (context.pointPrimitiveCollection && !context.pointPrimitiveCollection.isDestroyed()) {
      context.pointPrimitiveCollection.remove(element);
    }
  },
  cesiumProps,
  setCesiumPropsAfterCreate: true,
});

export default PointPrimitive;
