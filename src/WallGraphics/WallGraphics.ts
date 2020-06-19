import { WallGraphics as CesiumWallGraphics } from "cesium";

import {
  createCesiumComponent,
  EventkeyMap,
  PickCesiumProps,
  UnusedCesiumProps,
  AssertNever,
  ValueOf,
} from "../core";

/*
@summary
`WallGraphics` is a wall visualization for the entity.
*/

/*
@scope
WallGraphics is only inside [Entity](/components/Entity) components,
and can not be used more than once for each entity.
*/

export type WallGraphicsCesiumProps = PickCesiumProps<
  CesiumWallGraphics | CesiumWallGraphics.ConstructorOptions,
  typeof cesiumProps
>;

export type WallGraphicsCesiumEvents = {
  onDefinitionChange?: () => void;
};

export type WallGraphicsProps = WallGraphicsCesiumProps & WallGraphicsCesiumEvents;

const cesiumProps = [
  "positions",
  "maximumHeights",
  "minimumHeights",
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

const cesiumEventProps: EventkeyMap<CesiumWallGraphics, WallGraphicsCesiumEvents> = {
  onDefinitionChange: "definitionChanged",
};

const WallGraphics = createCesiumComponent<CesiumWallGraphics, WallGraphicsProps>({
  name: "WallGraphics",
  create(context, props) {
    if (!context.entity) return;
    const element = new CesiumWallGraphics(props);
    context.entity.wall = element;
    return element;
  },
  destroy(_element, context) {
    if (context.entity) {
      context.entity.wall = undefined;
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default WallGraphics;

// Unused prop check
type IgnoredProps = never;
type UnusedProps = UnusedCesiumProps<
  CesiumWallGraphics | CesiumWallGraphics.ConstructorOptions,
  keyof WallGraphicsProps | ValueOf<typeof cesiumEventProps>
>;
type AssertUnusedProps = AssertNever<Exclude<UnusedProps, IgnoredProps>>;
