import Cesium from "cesium";

import createCesiumComponent, { EventkeyMap } from "./core/CesiumComponent";

export interface WallGraphicsCesiumProps {
  positions?: Cesium.Property | Cesium.Cartesian3[];
  maximumHeights?: Cesium.Property | number;
  minimumHeights?: Cesium.Property | number;
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

export interface WallGraphicsProps extends WallGraphicsCesiumProps {
  onDefinitionChange?: () => void;
}

export interface WallGraphicsContext {
  entity?: Cesium.Entity;
}

const cesiumProps: Array<keyof WallGraphicsCesiumProps> = [
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

const cesiumEventProps: EventkeyMap<Cesium.WallGraphics, keyof WallGraphicsProps> = {
  definitionChanged: "onDefinitionChange",
};

const WallGraphics = createCesiumComponent<
  Cesium.WallGraphics,
  WallGraphicsProps,
  WallGraphicsContext
>({
  name: "WallGraphics",
  create(cprops) {
    return new Cesium.WallGraphics(cprops as any);
  },
  mount(element, context) {
    if (context.entity) {
      context.entity.wall = element;
    }
  },
  unmount(element, context) {
    if (context.entity) {
      context.entity.wall = undefined as any;
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default WallGraphics;
