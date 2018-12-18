import Cesium from "cesium";

import createCesiumComponent from "./core/CesiumComponent";
import EventManager, { EventProps } from "./core/EventManager";

/*
@summary
`Polyline` is a polyline primitive in the `PolylineCollection`.

Primitive is a low layer API for geographical visualization.
[Entity](/components/entity) is more recommended unless performance issues.
*/

/*
@scope
Only inside [PolylineCollection](/components/PolylineCollection) component.
A polyline object will be attached to the parent PolylineCollection.
*/

export interface PolylineCesiumProps {
  distanceDisplayCondition?: Cesium.DistanceDisplayCondition;
  id?: any;
  loop?: boolean;
  material?: Cesium.Material;
  positions?: Cesium.Cartesian3[];
  show?: boolean;
  width?: number;
}

export interface PolylineProps extends PolylineCesiumProps, EventProps<Cesium.Polyline> {}

export interface PolylineContext {
  polylineCollection?: Cesium.PolylineCollection;
  __RESIUM_EVENT_MANAGER?: EventManager;
}

const cesiumProps: Array<keyof PolylineCesiumProps> = [
  "distanceDisplayCondition",
  "id",
  "loop",
  "material",
  "positions",
  "show",
  "width",
];

const Polyline = createCesiumComponent<Cesium.Polyline, PolylineProps, PolylineContext>({
  name: "Polyline",
  create(cprops, props, context) {
    return new (Cesium.Polyline as any)(cprops, context.polylineCollection);
  },
  mount(element, context) {
    if (context.polylineCollection) {
      context.polylineCollection.add(element);
    }
  },
  unmount(element, context) {
    if (context.__RESIUM_EVENT_MANAGER) {
      context.__RESIUM_EVENT_MANAGER.clearEvents(element);
    }
    if (context.polylineCollection && !context.polylineCollection.isDestroyed()) {
      context.polylineCollection.remove(element);
    }
  },
  update(element, props, prevProps, context) {
    if (context.__RESIUM_EVENT_MANAGER) {
      context.__RESIUM_EVENT_MANAGER.setEvents(element, props);
    }
  },
  cesiumProps,
});

export default Polyline;
