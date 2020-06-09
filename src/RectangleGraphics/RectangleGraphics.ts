import {
  RectangleGraphics as CesiumRectangleGraphics,
  Property,
  ClassificationType,
  DistanceDisplayCondition,
  ShadowMode,
  Color,
  MaterialProperty,
  HeightReference,
  Rectangle,
  Entity,
} from "cesium";

import { createCesiumComponent, EventkeyMap } from "../core/component";

/*
@summary
`RectangleGraphics` is a rectangle visualization for the entity.
*/

/*
@scope
RectangleGraphics is only inside [Entity](/components/Entity) components,
and can not be used more than once for each entity.
*/

export interface RectangleGraphicsCesiumProps {
  coordinates?: Property | Rectangle;
  height?: Property | number;
  heightReference?: Property | HeightReference;
  extrudedHeight?: Property | number;
  extrudedHeightReference?: Property | HeightReference;
  show?: Property | boolean;
  fill?: Property | boolean;
  material?: MaterialProperty | Color | string;
  outline?: Property | boolean;
  outlineColor?: Property | Color;
  outlineWidth?: Property | number;
  rotation?: Property | number;
  stRotation?: Property | number;
  granularity?: Property | number;
  shadows?: Property | ShadowMode;
  distanceDisplayCondition?: Property | DistanceDisplayCondition;
  zIndex?: Property | number;
  classificationType?: Property | ClassificationType;
}

export interface RectangleGraphicsCesiumEvents {
  onDefinitionChange?: () => void;
}

export interface RectangleGraphicsProps
  extends RectangleGraphicsCesiumProps,
    RectangleGraphicsCesiumEvents {}

const cesiumProps: (keyof RectangleGraphicsCesiumProps)[] = [
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

const cesiumEventProps: EventkeyMap<CesiumRectangleGraphics, RectangleGraphicsCesiumEvents> = {
  onDefinitionChange: "definitionChanged",
};

const RectangleGraphics = createCesiumComponent<
  CesiumRectangleGraphics,
  RectangleGraphicsProps,
  {
    entity?: Entity;
  }
>({
  name: "RectangleGraphics",
  create(context, props) {
    if (!context.entity) return;
    const element = new CesiumRectangleGraphics(props as any); // WORKAROUND: material
    context.entity.rectangle = element;
    return element;
  },
  destroy(_element, context) {
    if (context.entity) {
      context.entity.rectangle = undefined;
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default RectangleGraphics;
