import Cesium from "cesium";

import createCesiumComponent, { EventkeyMap } from "./core/CesiumComponent";

export interface PointGraphicsCesiumProps {
  color?: Cesium.Property | Cesium.Color;
  pixelSize?: Cesium.Property | number;
  outlineColor?: Cesium.Property | Cesium.Color;
  outlineWidth?: Cesium.Property | number;
  show?: Cesium.Property | boolean;
  scaleByDistance?: Cesium.Property | Cesium.NearFarScalar;
  translucencyByDistance?: Cesium.Property | Cesium.NearFarScalar;
  heightReference?: Cesium.Property | Cesium.HeightReference;
  distanceDisplayCondition?: Cesium.Property | Cesium.DistanceDisplayCondition;
  disableDepthTestDistance?: Cesium.Property | number;
}

export interface PointGraphicsProps extends PointGraphicsCesiumProps {
  onDefinitionChange?: () => void;
}

export interface PointGraphicsContext {
  entity?: Cesium.Entity;
}

const cesiumProps: Array<keyof PointGraphicsCesiumProps> = [
  "color",
  "pixelSize",
  "outlineColor",
  "outlineWidth",
  "show",
  "scaleByDistance",
  "translucencyByDistance",
  "heightReference",
  "distanceDisplayCondition",
  "disableDepthTestDistance",
];

const cesiumEventProps: EventkeyMap<Cesium.PointGraphics, keyof PointGraphicsProps> = {
  definitionChanged: "onDefinitionChange",
};

const PointGraphics = createCesiumComponent<
  Cesium.PointGraphics,
  PointGraphicsProps,
  PointGraphicsContext
>({
  name: "PointGraphics",
  create(cprops) {
    return new Cesium.PointGraphics(cprops as any);
  },
  mount(element, context) {
    if (context.entity) {
      context.entity.point = element;
    }
  },
  unmount(element, context) {
    if (context.entity) {
      context.entity.point = undefined as any;
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default PointGraphics;
