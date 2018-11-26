import Cesium from "cesium";

import createCesiumComponent, { EventkeyMap } from "./core/CesiumComponent";

export interface LabelGraphicsCesiumProps {
  text?: Cesium.Property | string;
  font?: Cesium.Property | string;
  style?: Cesium.Property | Cesium.LabelStyle;
  fillColor?: Cesium.Property | Cesium.Color;
  outlineColor?: Cesium.Property | Cesium.Color;
  outlineWidth?: Cesium.Property | number;
  show?: Cesium.Property | boolean;
  showBackground?: Cesium.Property | boolean;
  backgroundColor?: Cesium.Property | Cesium.Color;
  backgroundPadding?: Cesium.Property | number;
  scale?: Cesium.Property | number;
  horizontalOrigin?: Cesium.Property | Cesium.HorizontalOrigin;
  verticalOrigin?: Cesium.Property | Cesium.VerticalOrigin;
  eyeOffset?: Cesium.Property | Cesium.Cartesian3;
  pixelOffset?: Cesium.Property | Cesium.Cartesian2;
  translucencyByDistance?: Cesium.Property | Cesium.NearFarScalar;
  pixelOffsetScaleByDistance?: Cesium.Property | Cesium.NearFarScalar;
  scaleByDistance?: Cesium.Property | Cesium.NearFarScalar;
  heightReference?: Cesium.Property | Cesium.HeightReference;
  distanceDisplayCondition?: Cesium.Property | Cesium.DistanceDisplayCondition;
  disableDepthTestDistance?: Cesium.Property | number;
}

export interface LabelGraphicsProps extends LabelGraphicsCesiumProps {
  onDefinitionChange?: () => void;
}

export interface LabelGraphicsContext {
  entity?: Cesium.Entity;
}

const cesiumProps: Array<keyof LabelGraphicsCesiumProps> = [
  "text",
  "font",
  "style",
  "fillColor",
  "outlineColor",
  "outlineWidth",
  "show",
  "showBackground",
  "backgroundColor",
  "backgroundPadding",
  "scale",
  "horizontalOrigin",
  "verticalOrigin",
  "eyeOffset",
  "pixelOffset",
  "translucencyByDistance",
  "pixelOffsetScaleByDistance",
  "scaleByDistance",
  "heightReference",
  "distanceDisplayCondition",
  "disableDepthTestDistance",
];

const cesiumEventProps: EventkeyMap<Cesium.LabelGraphics, keyof LabelGraphicsProps> = {
  definitionChanged: "onDefinitionChange",
};

const LabelGraphics = createCesiumComponent<
  Cesium.LabelGraphics,
  LabelGraphicsProps,
  LabelGraphicsContext
>({
  name: "LabelGraphics",
  create(cprops) {
    // workaround: type of "image" prop
    return new Cesium.LabelGraphics(cprops as any);
  },
  mount(element, context) {
    if (context.entity) {
      context.entity.label = element;
    }
  },
  unmount(element, context) {
    if (context.entity) {
      context.entity.label = undefined as any;
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default LabelGraphics;
