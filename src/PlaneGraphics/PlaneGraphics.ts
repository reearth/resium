import {
  PlaneGraphics as CesiumPlaneGraphics,
  Entity,
  Property,
  Cartesian2,
  Color,
  MaterialProperty,
  DistanceDisplayCondition,
  ShadowMode,
} from "cesium";

import { createCesiumComponent, EventkeyMap } from "../core/component";

/*
@summary
`PlaneGraphics` is a plane visualization for the entity.
*/

/*
@scope
PlaneGraphics is only inside [Entity](/components/Entity) components,
and can not be used more than once for each entity.
*/

export interface PlaneGraphicsCesiumProps {
  plane?: Property | any;
  dimensions?: Property | Cartesian2;
  show?: Property | boolean;
  fill?: Property | boolean;
  material?: MaterialProperty | Color | string;
  outline?: Property | boolean;
  outlineColor?: Property | Color;
  outlineWidth?: Property | number;
  shadows?: Property | ShadowMode;
  distanceDisplayCondition?: Property | DistanceDisplayCondition;
}

export interface PlaneGraphicsCesiumEvents {
  onDefinitionChange?: () => void;
}

export interface PlaneGraphicsProps extends PlaneGraphicsCesiumProps, PlaneGraphicsCesiumEvents {}

const cesiumProps: (keyof PlaneGraphicsCesiumProps)[] = [
  "plane",
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

// PlaneGraphics
const cesiumEventProps: EventkeyMap<any, PlaneGraphicsCesiumEvents> = {
  onDefinitionChange: "definitionChanged",
};

const PlaneGraphics = createCesiumComponent<
  CesiumPlaneGraphics,
  PlaneGraphicsProps,
  {
    entity?: Entity;
  }
>({
  name: "PlaneGraphics",
  create(context, props) {
    if (!context.entity) return;
    const element = new CesiumPlaneGraphics(props as any); // WORKAROUND
    context.entity.plane = element;
    return element;
  },
  destroy(element, context) {
    if (context.entity) {
      context.entity.plane = undefined as any;
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default PlaneGraphics;
