import { PlaneGraphics as CesiumPlaneGraphics } from "cesium";

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

// Cesium.PlaneGraphics
const cesiumEventProps: EventkeyMap<any, PlaneGraphicsCesiumEvents> = {
  onDefinitionChange: "definitionChanged",
};

const PlaneGraphics = createCesiumComponent<
  any, // Cesium.PlaneGraphics
  PlaneGraphicsProps,
  {
    entity?: Cesium.Entity;
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
