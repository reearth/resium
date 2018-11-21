import Cesium from "cesium";

import createCesiumComponent from "./core/CesiumComponent";

export interface LabelCesiumProps {
  backgroundColor?: Cesium.Color;
  backgroundPadding?: Cesium.Cartesian2;
  disableDepthTestDistance?: number;
  distanceDisplayCondition?: Cesium.DistanceDisplayCondition;
  eyeOffset?: Cesium.Cartesian3;
  fillColor?: Cesium.Color;
  font?: string;
  heightReference?: Cesium.HeightReference;
  horizontalOrigin?: Cesium.HorizontalOrigin;
  id?: any;
  outlineColor?: Cesium.Color;
  outlineWidth?: number;
  pixelOffset?: Cesium.Cartesian2;
  pixelOffsetScaleByDistance?: Cesium.NearFarScalar;
  position?: Cesium.Cartesian3;
  scale?: number;
  scaleByDistance?: Cesium.NearFarScalar;
  show?: boolean;
  showBackground?: boolean;
  style?: Cesium.LabelStyle;
  text?: string;
  translucencyByDistance?: Cesium.NearFarScalar;
  verticalOrigin?: Cesium.VerticalOrigin;
}

export interface LabelContext {
  labelCollection: Cesium.LabelCollection;
}

const cesiumProps: Array<keyof LabelCesiumProps> = [
  "backgroundColor",
  "backgroundPadding",
  "disableDepthTestDistance",
  "distanceDisplayCondition",
  "eyeOffset",
  "fillColor",
  "font",
  "heightReference",
  "horizontalOrigin",
  "id",
  "outlineColor",
  "outlineWidth",
  "pixelOffset",
  "pixelOffsetScaleByDistance",
  "position",
  "scale",
  "scaleByDistance",
  "show",
  "showBackground",
  "style",
  "text",
  "translucencyByDistance",
  "verticalOrigin",
];

const Label = createCesiumComponent<Cesium.Label, LabelCesiumProps, LabelContext>({
  name: "Label",
  create(cprops, props, context) {
    return new (Cesium.Label as any)(cprops, context.labelCollection);
  },
  mount(element, context) {
    context.labelCollection.add(element);
  },
  unmount(element, context) {
    if (!context.labelCollection.isDestroyed()) {
      context.labelCollection.remove(element);
    }
  },
  cesiumProps,
});

export default Label;
