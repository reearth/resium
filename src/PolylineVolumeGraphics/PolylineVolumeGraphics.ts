import { PolylineVolumeGraphics as CesiumPolylineVolumeGraphics } from "cesium";

import { createCesiumComponent, EventkeyMap, PickCesiumProps, Merge } from "../core";

/*
@summary
`PolylineVolumeGraphics` is a polyline visualization with volume for the entity.
*/

/*
@scope
PolylineVolumeGraphics can be mounted only inside[Entity](/components/Entity) components,
and can not be mounted more than once for each entity.
*/

export type Target = Merge<
  CesiumPolylineVolumeGraphics,
  CesiumPolylineVolumeGraphics.ConstructorOptions
>;

export type PolylineVolumeGraphicsCesiumProps = PickCesiumProps<Target, typeof cesiumProps>;

export type PolylineVolumeGraphicsCesiumEvents = {
  onDefinitionChange?: () => void;
};

export type PolylineVolumeGraphicsProps = PolylineVolumeGraphicsCesiumProps &
  PolylineVolumeGraphicsCesiumEvents;

const cesiumProps = [
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
] as const;

export const cesiumEventProps: EventkeyMap<
  CesiumPolylineVolumeGraphics,
  PolylineVolumeGraphicsCesiumEvents
> = {
  onDefinitionChange: "definitionChanged",
};

const PolylineVolumeGraphics = createCesiumComponent<
  CesiumPolylineVolumeGraphics,
  PolylineVolumeGraphicsProps
>({
  name: "PolylineVolumeGraphics",
  create(context, props) {
    if (!context.entity) return;
    const element = new CesiumPolylineVolumeGraphics(props);
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
