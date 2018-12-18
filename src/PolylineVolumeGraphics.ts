import Cesium from "cesium";

import createCesiumComponent, { EventkeyMap } from "./core/CesiumComponent";

/*
@summary
`PolylineVolumeGraphics` is a polyline visualization with volume for the entity.
*/

/*
@scope
PolylineVolumeGraphics is only inside [Entity](/components/Entity) components,
and can not be used more than once for each entity.
*/

export interface PolylineVolumeGraphicsCesiumProps {
  positions?: Cesium.Property | Cesium.Cartesian3[];
  shape?: Cesium.Property | Cesium.Cartesian2[];
  cornerType?: Cesium.Property | Cesium.CornerType;
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

export interface PolylineVolumeGraphicsCesiumEvents {
  onDefinitionChange?: () => void;
}

export interface PolylineVolumeGraphicsProps
  extends PolylineVolumeGraphicsCesiumProps,
    PolylineVolumeGraphicsCesiumEvents {}

export interface PolylineVolumeGraphicsContext {
  entity?: Cesium.Entity;
}

const cesiumProps: Array<keyof PolylineVolumeGraphicsCesiumProps> = [
  "positions",
  "shape",
  "cornerType",
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

const cesiumEventProps: EventkeyMap<
  Cesium.PolylineVolumeGraphics,
  keyof PolylineVolumeGraphicsCesiumEvents
> = {
  definitionChanged: "onDefinitionChange",
};

const PolylineVolumeGraphics = createCesiumComponent<
  Cesium.PolylineVolumeGraphics,
  PolylineVolumeGraphicsProps,
  PolylineVolumeGraphicsContext
>({
  name: "PolylineVolumeGraphics",
  create(cprops) {
    return new Cesium.PolylineVolumeGraphics(cprops as any);
  },
  mount(element, context) {
    if (context.entity) {
      context.entity.polylineVolume = element;
    }
  },
  unmount(element, context) {
    if (context.entity) {
      context.entity.polylineVolume = undefined as any;
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default PolylineVolumeGraphics;
