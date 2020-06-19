import { PolylineGraphics as CesiumPolylineGraphics } from "cesium";

import {
  createCesiumComponent,
  PickCesiumProps,
  UnusedCesiumProps,
  AssertNever,
  Merge,
  ValueOf,
} from "../core";

/*
@summary
`PolylineGraphics` is a polyline visualization for the entity.
*/

/*
@scope
PolylineGraphics can be mounted only inside[Entity](/components/Entity) components,
and can not be mounted more than once for each entity.
*/

export type PolylineGraphicsCesiumProps = PickCesiumProps<
  Merge<CesiumPolylineGraphics, CesiumPolylineGraphics.ConstructorOptions>,
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

const cesiumEventProps = {
  onDefinitionChange: "definitionChanged",
} as const;

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

// Unused prop check
type IgnoredProps = never;
type UnusedProps = UnusedCesiumProps<
  Merge<CesiumPolylineGraphics, CesiumPolylineGraphics.ConstructorOptions>,
  keyof PolylineGraphicsProps | ValueOf<typeof cesiumEventProps>
>;
type AssertUnusedProps = AssertNever<Exclude<UnusedProps, IgnoredProps>>;
