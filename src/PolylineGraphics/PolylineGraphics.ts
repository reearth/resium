import {
  PolylineGraphics as CesiumPolylineGraphics,
  MaterialProperty,
  Color,
  ShadowMode,
  Property,
  DistanceDisplayCondition,
  Cartesian3,
} from "cesium";

import { createCesiumComponent, EventkeyMap } from "../core";

/*
@summary
`PolylineGraphics` is a polyline visualization for the entity.
*/

/*
@scope
PolylineGraphics is only inside [Entity](/components/Entity) components,
and can not be used more than once for each entity.
*/

export interface PolylineGraphicsCesiumProps {
  positions?: Property | Cartesian3[];
  followSurface?: Property | boolean;
  clampToGround?: Property | boolean;
  width?: Property | number;
  show?: Property | boolean;
  material?: MaterialProperty | Color | string;
  depthFailMaterial?: MaterialProperty | Color | string;
  granularity?: Property | number;
  shadows?: Property | ShadowMode;
  distanceDisplayCondition?: Property | DistanceDisplayCondition;
  zIndex?: Property | number;
}

export interface PolylineGraphicsCesiumEvents {
  onDefinitionChange?: () => void;
}

export interface PolylineGraphicsProps
  extends PolylineGraphicsCesiumProps,
    PolylineGraphicsCesiumEvents {}

const cesiumProps: (keyof PolylineGraphicsCesiumProps)[] = [
  "positions",
  "followSurface",
  "clampToGround",
  "width",
  "show",
  "material",
  "depthFailMaterial",
  "granularity",
  "shadows",
  "distanceDisplayCondition",
  "zIndex",
];

const cesiumEventProps: EventkeyMap<CesiumPolylineGraphics, PolylineGraphicsCesiumEvents> = {
  onDefinitionChange: "definitionChanged",
};

const PolylineGraphics = createCesiumComponent<CesiumPolylineGraphics, PolylineGraphicsProps>({
  name: "PolylineGraphics",
  create(context, props) {
    if (!context.entity) return;
    const element = new CesiumPolylineGraphics(props as any); // WORKAROUND: material
    context.entity.polyline = element;
    return element;
  },
  destroy(_element, context) {
    if (context.entity) {
      context.entity.polyline = undefined;
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default PolylineGraphics;
