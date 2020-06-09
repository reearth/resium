import {
  LabelGraphics as CesiumLabelGraphics,
  Entity,
  Property,
  Cartesian3,
  Cartesian2,
  NearFarScalar,
  HeightReference,
  DistanceDisplayCondition,
  VerticalOrigin,
  HorizontalOrigin,
  Color,
  LabelStyle,
} from "cesium";

import { createCesiumComponent, EventkeyMap } from "../core/component";

/*
@summary
`LabelGraphics` is a label visualization for the entity.
*/

/*
@scope
LabelGraphics is only inside [Entity](/components/Entity) components,
and can not be used more than once for each entity.
*/

export interface LabelGraphicsCesiumProps {
  text?: Property | string;
  font?: Property | string;
  style?: Property | LabelStyle;
  fillColor?: Property | Color;
  outlineColor?: Property | Color;
  outlineWidth?: Property | number;
  show?: Property | boolean;
  showBackground?: Property | boolean;
  backgroundColor?: Property | Color;
  backgroundPadding?: Property | Cartesian2;
  scale?: Property | number;
  horizontalOrigin?: Property | HorizontalOrigin;
  verticalOrigin?: Property | VerticalOrigin;
  eyeOffset?: Property | Cartesian3;
  pixelOffset?: Property | Cartesian2;
  translucencyByDistance?: Property | NearFarScalar;
  pixelOffsetScaleByDistance?: Property | NearFarScalar;
  scaleByDistance?: Property | NearFarScalar;
  heightReference?: Property | HeightReference;
  distanceDisplayCondition?: Property | DistanceDisplayCondition;
  disableDepthTestDistance?: Property | number;
}

export interface LabelGraphicsCesiumEvents {
  onDefinitionChange?: () => void;
}

export interface LabelGraphicsProps extends LabelGraphicsCesiumProps, LabelGraphicsCesiumEvents {}

const cesiumProps: (keyof LabelGraphicsCesiumProps)[] = [
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

const cesiumEventProps: EventkeyMap<CesiumLabelGraphics, LabelGraphicsCesiumEvents> = {
  onDefinitionChange: "definitionChanged",
};

const LabelGraphics = createCesiumComponent<
  CesiumLabelGraphics,
  LabelGraphicsProps,
  {
    entity?: Entity;
  }
>({
  name: "LabelGraphics",
  create(context, props) {
    if (!context.entity) return;
    const element = new CesiumLabelGraphics(props);
    context.entity.label = element;
    return element;
  },
  destroy(_element, context) {
    if (context.entity) {
      context.entity.label = undefined;
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default LabelGraphics;
