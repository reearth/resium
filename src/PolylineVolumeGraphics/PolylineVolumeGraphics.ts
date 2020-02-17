import { PolylineVolumeGraphics as CesiumPolylineVolumeGraphics } from "cesium";

import { createCesiumComponent, EventkeyMap } from "../core/component";

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

const cesiumProps: (keyof PolylineVolumeGraphicsCesiumProps)[] = [
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
  PolylineVolumeGraphicsCesiumEvents
> = {
  onDefinitionChange: "definitionChanged",
};

const PolylineVolumeGraphics = createCesiumComponent<
  Cesium.PolylineVolumeGraphics,
  PolylineVolumeGraphicsProps,
  {
    entity?: Cesium.Entity;
  }
>({
  name: "PolylineVolumeGraphics",
  create(context, props) {
    if (!context.entity) return;
    const element = new CesiumPolylineVolumeGraphics(props as any); // WORKAROUND
    context.entity.polylineVolume = element;
    return element;
  },
  destroy(contextelement, context) {
    if (context.entity) {
      context.entity.polylineVolume = undefined as any;
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default PolylineVolumeGraphics;
