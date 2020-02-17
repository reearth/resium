import { WallGraphics as CesiumWallGraphics } from "cesium";

import { createCesiumComponent, EventkeyMap } from "../core/component";

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
  positions?: Cesium.Property | Cesium.Cartesian3[];
  maximumHeights?: Cesium.Property | number[];
  minimumHeights?: Cesium.Property | number[];
  show?: Cesium.Property | boolean;
  fill?: Cesium.Property | boolean;
  material?: Cesium.MaterialProperty | Cesium.Color | string;
  outline?: Cesium.Property | boolean;
  outlineColor?: Cesium.Property | Cesium.Color;
  outlineWidth?: Cesium.Property | number;
  granularity?: Cesium.Property | number;
  shadows?: Cesium.Property | Cesium.ShadowMode;
  distanceDisplayCondition?: Cesium.Property | Cesium.DistanceDisplayCondition;
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

const cesiumEventProps: EventkeyMap<Cesium.WallGraphics, WallGraphicsCesiumEvents> = {
  onDefinitionChange: "definitionChanged",
};

const WallGraphics = createCesiumComponent<
  Cesium.WallGraphics,
  WallGraphicsProps,
  {
    entity?: Cesium.Entity;
  }
>({
  name: "WallGraphics",
  create(context, props) {
    if (!context.entity) return;
    // WORKAROUND
    const element = new CesiumWallGraphics(props as any);
    context.entity.wall = element;
    return element;
  },
  destroy(element, context) {
    if (context.entity) {
      context.entity.wall = undefined as any;
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default WallGraphics;
