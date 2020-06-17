import {
  WallGraphics as CesiumWallGraphics,
  Property,
  Cartesian3,
  MaterialProperty,
  Color,
  ShadowMode,
  DistanceDisplayCondition,
} from "cesium";

import { createCesiumComponent, EventkeyMap } from "../core";

/*
@summary
`WallGraphics` is a wall visualization for the entity.
*/

/*
@scope
WallGraphics is only inside [Entity](/components/Entity) components,
and can not be used more than once for each entity.
*/

export interface WallGraphicsCesiumProps {
  positions?: Property | Cartesian3[];
  maximumHeights?: Property | number[];
  minimumHeights?: Property | number[];
  show?: Property | boolean;
  fill?: Property | boolean;
  material?: MaterialProperty | Color | string;
  outline?: Property | boolean;
  outlineColor?: Property | Color;
  outlineWidth?: Property | number;
  granularity?: Property | number;
  shadows?: Property | ShadowMode;
  distanceDisplayCondition?: Property | DistanceDisplayCondition;
}

export interface WallGraphicsCesiumEvents {
  onDefinitionChange?: () => void;
}

export interface WallGraphicsProps extends WallGraphicsCesiumProps, WallGraphicsCesiumEvents {}

const cesiumProps: (keyof WallGraphicsCesiumProps)[] = [
  "positions",
  "maximumHeights",
  "minimumHeights",
  "show",
  "fill",
  "material",
  "outline",
  "outlineColor",
  "outlineWidth",
  "granularity",
  "shadows",
  "distanceDisplayCondition",
];

const cesiumEventProps: EventkeyMap<CesiumWallGraphics, WallGraphicsCesiumEvents> = {
  onDefinitionChange: "definitionChanged",
};

const WallGraphics = createCesiumComponent<CesiumWallGraphics, WallGraphicsProps>({
  name: "WallGraphics",
  create(context, props) {
    if (!context.entity) return;
    const element = new CesiumWallGraphics(props as any); // WORKAROUND: material
    context.entity.wall = element;
    return element;
  },
  destroy(_element, context) {
    if (context.entity) {
      context.entity.wall = undefined;
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default WallGraphics;
