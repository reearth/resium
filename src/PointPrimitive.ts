import Cesium from "cesium";

import createCesiumComponent from "./core/CesiumComponent";

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

export interface PointPrimitiveContext {
  pointPrimitiveCollection: Cesium.PointPrimitiveCollection;
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
  PointPrimitiveCesiumProps,
  PointPrimitiveContext
>({
  name: "PointPrimitive",
  create() {
    return new Cesium.PointPrimitive();
  },
  mount(element, context) {
    context.pointPrimitiveCollection.add(element);
  },
  unmount(element, context) {
    if (!context.pointPrimitiveCollection.isDestroyed()) {
      context.pointPrimitiveCollection.remove(element);
    }
  },
  cesiumProps,
  setCesiumPropsAfterCreate: true,
});

export default PointPrimitive;
