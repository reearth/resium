import Cesium from "cesium";

import createCesiumComponent, { EventkeyMap } from "./core/CesiumComponent";

export interface RectangleGraphicsCesiumProps {
  coordinates?: Cesium.Property | Cesium.Rectangle;
  height?: Cesium.Property | number;
  heightReference?: Cesium.Property | Cesium.HeightReference;
  extrudedHeight?: Cesium.Property | number;
  extrudedHeightReference?: Cesium.Property | Cesium.HeightReference;
  show?: Cesium.Property | boolean;
  fill?: Cesium.Property | boolean;
  material?: Cesium.MaterialProperty | Cesium.Color | string;
  outline?: Cesium.Property | boolean;
  outlineColor?: Cesium.Property | Cesium.Color;
  outlineWidth?: Cesium.Property | number;
  rotation?: Cesium.Property | number;
  stRotation?: Cesium.Property | number;
  granularity?: Cesium.Property | number;
  shadows?: Cesium.Property | Cesium.ShadowMode;
  distanceDisplayCondition?: Cesium.Property | Cesium.DistanceDisplayCondition;
  zIndex?: Cesium.Property | number;
  classificationType?: Cesium.Property | any; // Cesium.ClassificationType
}

export interface RectangleGraphicsProps extends RectangleGraphicsCesiumProps {
  onDefinitionChange?: () => void;
}

export interface RectangleGraphicsContext {
  entity?: Cesium.Entity;
}

const cesiumProps: Array<keyof RectangleGraphicsCesiumProps> = [
  "coordinates",
  "height",
  "heightReference",
  "extrudedHeight",
  "extrudedHeightReference",
  "show",
  "fill",
  "material",
  "outline",
  "outlineColor",
  "outlineWidth",
  "rotation",
  "stRotation",
  "granularity",
  "shadows",
  "distanceDisplayCondition",
  "zIndex",
];

const cesiumEventProps: EventkeyMap<Cesium.RectangleGraphics, keyof RectangleGraphicsProps> = {
  definitionChanged: "onDefinitionChange",
};

const RectangleGraphics = createCesiumComponent<
  Cesium.RectangleGraphics,
  RectangleGraphicsProps,
  RectangleGraphicsContext
>({
  name: "RectangleGraphics",
  create(cprops) {
    return new Cesium.RectangleGraphics(cprops as any);
  },
  mount(element, context) {
    if (context.entity) {
      context.entity.rectangle = element;
    }
  },
  unmount(element, context) {
    if (context.entity) {
      context.entity.rectangle = undefined as any;
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default RectangleGraphics;
