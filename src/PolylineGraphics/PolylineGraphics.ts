import { PolylineGraphics as CesiumPolylineGraphics } from "cesium";

import { createCesiumComponent, EventkeyMap } from "../core/component";

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

const cesiumEventProps: EventkeyMap<Cesium.PolylineGraphics, PolylineGraphicsCesiumEvents> = {
  onDefinitionChange: "definitionChanged",
};

const PolylineGraphics = createCesiumComponent<
  Cesium.PolylineGraphics,
  PolylineGraphicsProps,
  {
    entity?: Cesium.Entity;
  }
>({
  name: "PolylineGraphics",
  create(context, props) {
    if (!context.entity) return;
    const element = new CesiumPolylineGraphics(props as any); // WORKAROUND
    context.entity.polyline = element;
    return element;
  },
  destroy(element, context) {
    if (context.entity) {
      context.entity.polyline = undefined as any;
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default PolylineGraphics;
