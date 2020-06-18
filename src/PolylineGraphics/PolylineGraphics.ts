import { PolylineGraphics as CesiumPolylineGraphics } from "cesium";

import {
  createCesiumComponent,
  EventkeyMap,
  PickCesiumProps,
  UnusedCesiumProps,
  AssertNever,
} from "../core";

/*
@summary
`PolylineGraphics` is a polyline visualization for the entity.
*/

/*
@scope
PolylineGraphics is only inside [Entity](/components/Entity) components,
and can not be used more than once for each entity.
*/

export type PolylineGraphicsCesiumProps = PickCesiumProps<
  CesiumPolylineGraphics | CesiumPolylineGraphics.ConstructorOptions,
  typeof cesiumProps
>;

export type PolylineGraphicsCesiumEvents = {
  onDefinitionChange?: () => void;
};

export type PolylineGraphicsProps = PolylineGraphicsCesiumProps & PolylineGraphicsCesiumEvents;

const cesiumProps = [
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
] as const;

const cesiumEventProps: EventkeyMap<CesiumPolylineGraphics, PolylineGraphicsCesiumEvents> = {
  onDefinitionChange: "definitionChanged",
};

// Unused prop check
type IgnoredProps = never;
type UnusedProps = UnusedCesiumProps<
  CesiumPolylineGraphics | CesiumPolylineGraphics.ConstructorOptions,
  typeof cesiumProps | typeof cesiumEventProps[keyof typeof cesiumEventProps]
>;
type AssertUnusedProps = AssertNever<Exclude<UnusedProps, IgnoredProps>>;

const PolylineGraphics = createCesiumComponent<CesiumPolylineGraphics, PolylineGraphicsProps>({
  name: "PolylineGraphics",
  create(context, props) {
    if (!context.entity) return;
    const element = new CesiumPolylineGraphics(props);
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
