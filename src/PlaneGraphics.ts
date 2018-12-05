import Cesium from "cesium";

import createCesiumComponent, { EventkeyMap } from "./core/CesiumComponent";

export interface PlaneGraphicsCesiumProps {
  plane?: Cesium.Property | any;
  dimensions?: Cesium.Property | Cesium.Cartesian2;
  show?: Cesium.Property | boolean;
  fill?: Cesium.Property | boolean;
  material?: Cesium.MaterialProperty | Cesium.Color | string;
  outline?: Cesium.Property | boolean;
  outlineColor?: Cesium.Property | Cesium.Color;
  outlineWidth?: Cesium.Property | number;
  shadows?: Cesium.Property | Cesium.ShadowMode;
  distanceDisplayCondition?: Cesium.Property | Cesium.DistanceDisplayCondition;
}

export interface PlaneGraphicsProps extends PlaneGraphicsCesiumProps {
  onDefinitionChange?: () => void;
}

export interface PlaneGraphicsContext {
  entity?: Cesium.Entity;
}

const cesiumProps: Array<keyof PlaneGraphicsCesiumProps> = [
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

// Cesium.PlaneGraphics
const cesiumEventProps: EventkeyMap<any, keyof PlaneGraphicsProps> = {
  definitionChanged: "onDefinitionChange",
};

const PlaneGraphics = createCesiumComponent<
  any, // Cesium.PlaneGraphics
  PlaneGraphicsProps,
  PlaneGraphicsContext
>({
  name: "PlaneGraphics",
  create(cprops) {
    return new (Cesium as any).PlaneGraphics(cprops as any);
  },
  mount(element, context) {
    if (context.entity) {
      context.entity.plane = element;
    }
  },
  unmount(element, context) {
    if (context.entity) {
      context.entity.plane = undefined as any;
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default PlaneGraphics;
