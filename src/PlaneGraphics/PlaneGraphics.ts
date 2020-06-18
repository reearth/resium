import { PlaneGraphics as CesiumPlaneGraphics } from "cesium";

import {
  createCesiumComponent,
  EventkeyMap,
  PickCesiumProps,
  UnusedCesiumProps,
  AssertNever,
} from "../core";

/*
@summary
`PlaneGraphics` is a plane visualization for the entity.
*/

/*
@scope
PlaneGraphics is only inside [Entity](/components/Entity) components,
and can not be used more than once for each entity.
*/

export type PlaneGraphicsCesiumProps = PickCesiumProps<
  CesiumPlaneGraphics | CesiumPlaneGraphics.ConstructorOptions,
  typeof cesiumProps
>;

export type PlaneGraphicsCesiumEvents = {
  onDefinitionChange?: () => void;
};

export type PlaneGraphicsProps = PlaneGraphicsCesiumProps & PlaneGraphicsCesiumEvents;

const cesiumProps = [
  "plane",
  "dimensions",
  "show",
  "fill",
  "material",
  "outline",
  "outlineColor",
  "outlineWidth",
  "shadows",
  "distanceDisplayCondition",
] as const;

// PlaneGraphics
const cesiumEventProps: EventkeyMap<any, PlaneGraphicsCesiumEvents> = {
  onDefinitionChange: "definitionChanged",
};

// Unused prop check
type IgnoredProps = never;
type UnusedProps = UnusedCesiumProps<
  CesiumPlaneGraphics | CesiumPlaneGraphics.ConstructorOptions,
  typeof cesiumProps | typeof cesiumEventProps[keyof typeof cesiumEventProps]
>;
type AssertUnusedProps = AssertNever<Exclude<UnusedProps, IgnoredProps>>;

const PlaneGraphics = createCesiumComponent<CesiumPlaneGraphics, PlaneGraphicsProps>({
  name: "PlaneGraphics",
  create(context, props) {
    if (!context.entity) return;
    const element = new CesiumPlaneGraphics(props);
    context.entity.plane = element;
    return element;
  },
  destroy(_element, context) {
    if (context.entity) {
      context.entity.plane = undefined;
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default PlaneGraphics;
