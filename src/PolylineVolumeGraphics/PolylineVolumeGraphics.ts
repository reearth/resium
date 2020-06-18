import { PolylineVolumeGraphics as CesiumPolylineVolumeGraphics } from "cesium";

import {
  createCesiumComponent,
  EventkeyMap,
  PickCesiumProps,
  UnusedCesiumProps,
  AssertNever,
} from "../core";

/*
@summary
`PolylineVolumeGraphics` is a polyline visualization with volume for the entity.
*/

/*
@scope
PolylineVolumeGraphics is only inside [Entity](/components/Entity) components,
and can not be used more than once for each entity.
*/

export type PolylineVolumeGraphicsCesiumProps = PickCesiumProps<
  CesiumPolylineVolumeGraphics | CesiumPolylineVolumeGraphics.ConstructorOptions,
  typeof cesiumProps
>;

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

const cesiumEventProps: EventkeyMap<
  CesiumPolylineVolumeGraphics,
  PolylineVolumeGraphicsCesiumEvents
> = {
  onDefinitionChange: "definitionChanged",
};

// Unused prop check
type IgnoredProps = never;
type UnusedProps = UnusedCesiumProps<
  CesiumPolylineVolumeGraphics | CesiumPolylineVolumeGraphics.ConstructorOptions,
  typeof cesiumProps | typeof cesiumEventProps[keyof typeof cesiumEventProps]
>;
type AssertUnusedProps = AssertNever<Exclude<UnusedProps, IgnoredProps>>;

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
