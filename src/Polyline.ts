import Cesium from "cesium";

import createCesiumComponent from "./core/CesiumComponent";

export interface PolylineCesiumProps {
  distanceDisplayCondition?: Cesium.DistanceDisplayCondition;
  id?: any;
  loop?: boolean;
  material?: Cesium.Material;
  positions?: Cesium.Cartesian3[];
  show?: boolean;
  width?: number;
}

export interface PolylineContext {
  polylineCollection: Cesium.PolylineCollection;
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

const Polyline = createCesiumComponent<Cesium.Polyline, PolylineCesiumProps, PolylineContext>({
  name: "Polyline",
  create(cprops, props, context) {
    return new (Cesium.Polyline as any)(cprops, context.polylineCollection);
  },
  mount(element, context) {
    context.polylineCollection.add(element);
  },
  unmount(element, context) {
    if (!context.polylineCollection.isDestroyed()) {
      context.polylineCollection.remove(element);
    }
  },
  cesiumProps,
});

export default Polyline;
