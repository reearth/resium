import Cesium from "cesium";

import createCesiumComponent, { EventkeyMap } from "./core/CesiumComponent";

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
  positions?: Cesium.Property | Cesium.Cartesian3[];
  followSurface?: Cesium.Property | boolean;
  clampToGround?: Cesium.Property | boolean;
  width?: Cesium.Property | number;
  show?: Cesium.Property | boolean;
  material?: Cesium.MaterialProperty | Cesium.Color | string;
  depthFailMaterial?: Cesium.MaterialProperty | Cesium.Color | string;
  granularity?: Cesium.Property | number;
  shadows?: Cesium.Property | Cesium.ShadowMode;
  distanceDisplayCondition?: Cesium.Property | Cesium.DistanceDisplayCondition;
  zIndex?: Cesium.Property | number;
}

export interface PolylineGraphicsCesiumEvents {
  onDefinitionChange?: () => void;
}

export interface PolylineGraphicsProps
  extends PolylineGraphicsCesiumProps,
    PolylineGraphicsCesiumEvents {}

export interface PolylineGraphicsContext {
  entity?: Cesium.Entity;
}

const cesiumProps: Array<keyof PolylineGraphicsCesiumProps> = [
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

const cesiumEventProps: EventkeyMap<Cesium.PolylineGraphics, keyof PolylineGraphicsCesiumEvents> = {
  definitionChanged: "onDefinitionChange",
};

const PolylineGraphics = createCesiumComponent<
  Cesium.PolylineGraphics,
  PolylineGraphicsProps,
  PolylineGraphicsContext
>({
  name: "PolylineGraphics",
  create(cprops) {
    return new Cesium.PolylineGraphics(cprops as any);
  },
  mount(element, context) {
    if (context.entity) {
      context.entity.polyline = element;
    }
  },
  unmount(element, context) {
    if (context.entity) {
      context.entity.polyline = undefined as any;
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default PolylineGraphics;
