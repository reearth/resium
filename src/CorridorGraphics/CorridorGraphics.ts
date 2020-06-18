import { CorridorGraphics as CesiumCorridorGraphics } from "cesium";

import {
  createCesiumComponent,
  EventkeyMap,
  PickCesiumProps,
  UnusedCesiumProps,
  AssertNever,
} from "../core";

/*
@summary
`CorriderGraphics` is a corrider visualization for the entity.
*/

/*
@scope
CorriderGraphics is only inside [Entity](/components/Entity) components,
and can not be used more than once for each entity.
*/

export type CorridorGraphicsCesiumProps = PickCesiumProps<
  CesiumCorridorGraphics | CesiumCorridorGraphics.ConstructorOptions,
  typeof cesiumProps
>;

export type CorridorCesiumEvents = {
  onDefinitionChange?: () => void;
};

export type CorridorGraphicsProps = CorridorGraphicsCesiumProps & CorridorCesiumEvents;

const cesiumProps = [
  "positions",
  "width",
  "cornerType",
  "height",
  "heightReference",
  "extrudedHeight",
  "extrudedHeightReference",
  "show",
  "fill",
  "material",
  "outline",
  "outlineColor",
  "outlineWidth",
  "granularity",
  "shadows",
  "distanceDisplayCondition",
  "zIndex",
  "classificationType",
] as const;

const cesiumEventProps: EventkeyMap<CesiumCorridorGraphics, CorridorCesiumEvents> = {
  onDefinitionChange: "definitionChanged",
};

// Unused prop check
type IgnoredProps = never;
type UnusedProps = UnusedCesiumProps<
  CesiumCorridorGraphics | CesiumCorridorGraphics.ConstructorOptions,
  typeof cesiumProps | typeof cesiumEventProps[keyof typeof cesiumEventProps]
>;
type AssertUnusedProps = AssertNever<Exclude<UnusedProps, IgnoredProps>>;

const CorridorGraphics = createCesiumComponent<CesiumCorridorGraphics, CorridorGraphicsProps>({
  name: "CorridorGraphics",
  create(context, props) {
    if (!context.entity) return;
    const element = new CesiumCorridorGraphics(props as any); // positions type mismatched
    if (props.classificationType) {
      element.classificationType = props.classificationType as any; // ClassificationType type missing
    }
    context.entity.corridor = element;
    return element;
  },
  destroy(_element, context) {
    if (context.entity) {
      context.entity.corridor = undefined;
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default CorridorGraphics;
