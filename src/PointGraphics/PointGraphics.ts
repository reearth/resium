import {
  PointGraphics as CesiumPointGraphics,
  Property,
  Color,
  NearFarScalar,
  HeightReference,
  DistanceDisplayCondition,
} from "cesium";

import { createCesiumComponent, EventkeyMap } from "../core";

/*
@summary
`PointGraphics` is a point visualization for the entity.
*/

/*
@scope
PointGraphics is only inside [Entity](/components/Entity) components,
and can not be used more than once for each entity.
*/

export interface PointGraphicsCesiumProps {
  color?: Property | Color;
  pixelSize?: Property | number;
  outlineColor?: Property | Color;
  outlineWidth?: Property | number;
  show?: Property | boolean;
  scaleByDistance?: Property | NearFarScalar;
  translucencyByDistance?: Property | NearFarScalar;
  heightReference?: Property | HeightReference;
  distanceDisplayCondition?: Property | DistanceDisplayCondition;
  disableDepthTestDistance?: Property | number;
}

export interface PointGraphicsCesiumEvents {
  onDefinitionChange?: () => void;
}

export interface PointGraphicsProps extends PointGraphicsCesiumProps, PointGraphicsCesiumEvents {}

const cesiumProps: (keyof PointGraphicsCesiumProps)[] = [
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

const cesiumEventProps: EventkeyMap<CesiumPointGraphics, PointGraphicsCesiumEvents> = {
  onDefinitionChange: "definitionChanged",
};

const PointGraphics = createCesiumComponent<CesiumPointGraphics, PointGraphicsProps>({
  name: "PointGraphics",
  create(context, props) {
    if (!context.entity) return;
    const element = new CesiumPointGraphics(props);
    return element;
  },
  destroy(_element, context) {
    if (context.entity) {
      context.entity.point = undefined;
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default PointGraphics;
