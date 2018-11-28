import Cesium from "cesium";

import createCesiumComponent, { EventkeyMap } from "./core/CesiumComponent";

export interface BoxGraphicsCesiumProps {
  heightReference?: Cesium.Property | Cesium.HeightReference;
  dimensions?: Cesium.Property | Cesium.Cartesian3;
  show?: Cesium.Property | boolean;
  fill?: Cesium.Property | boolean;
  material?: Cesium.MaterialProperty | Cesium.Color | string;
  outline?: Cesium.Property | boolean;
  outlineColor?: Cesium.Property | number;
  outlineWidth?: Cesium.Property | number;
  shadows?: Cesium.Property | Cesium.ShadowMode;
  distanceDisplayCondition?: Cesium.Property | Cesium.DistanceDisplayCondition;
}

export interface BoxGraphicsProps extends BoxGraphicsCesiumProps {
  onDefinitionChange?: () => void;
}

export interface BoxGraphicsContext {
  entity?: Cesium.Entity;
}

const cesiumProps: Array<keyof BoxGraphicsCesiumProps> = [
  "heightReference",
  "dimensions",
  "show",
  "fill",
  "material",
  "outline",
  "outlineColor",
  "outlineWidth",
  "shadows",
  "distanceDisplayCondition",
];

const cesiumEventProps: EventkeyMap<Cesium.BoxGraphics, keyof BoxGraphicsProps> = {
  definitionChanged: "onDefinitionChange",
};

const BoxGraphics = createCesiumComponent<Cesium.BoxGraphics, BoxGraphicsProps, BoxGraphicsContext>(
  {
    name: "BoxGraphics",
    create(cprops) {
      return new Cesium.BoxGraphics(cprops as any);
    },
    mount(element, context) {
      if (context.entity) {
        context.entity.box = element;
      }
    },
    unmount(element, context) {
      if (context.entity) {
        context.entity.box = undefined as any;
      }
    },
    cesiumProps,
    cesiumEventProps,
  },
);

export default BoxGraphics;
