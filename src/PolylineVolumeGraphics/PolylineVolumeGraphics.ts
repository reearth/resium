import {
  PolylineVolumeGraphics as CesiumPolylineVolumeGraphics,
  Entity,
  Property,
  CornerType,
  Cartesian2,
  Cartesian3,
  MaterialProperty,
  Color,
  ShadowMode,
  DistanceDisplayCondition,
} from "cesium";

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
  positions?: Property | Cartesian3[];
  shape?: Property | Cartesian2[];
  cornerType?: Property | CornerType;
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
  CesiumPolylineVolumeGraphics,
  PolylineVolumeGraphicsCesiumEvents
> = {
  onDefinitionChange: "definitionChanged",
};

const PolylineVolumeGraphics = createCesiumComponent<
  CesiumPolylineVolumeGraphics,
  PolylineVolumeGraphicsProps,
  {
    entity?: Entity;
  }
>({
  name: "PolylineVolumeGraphics",
  create(context, props) {
    if (!context.entity) return;
    const element = new CesiumPolylineVolumeGraphics(props as any); // WORKAROUND: material
    context.entity.polylineVolume = element;
    return element;
  },
  destroy(_contextelement, context) {
    if (context.entity) {
      context.entity.polylineVolume = undefined;
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default PolylineVolumeGraphics;
