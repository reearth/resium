import { RectangleGraphics as CesiumRectangleGraphics } from "cesium";

import {
  createCesiumComponent,
  EventkeyMap,
  PickCesiumProps,
  UnusedCesiumProps,
  AssertNever,
} from "../core";

/*
@summary
`RectangleGraphics` is a rectangle visualization for the entity.
*/

/*
@scope
RectangleGraphics is only inside [Entity](/components/Entity) components,
and can not be used more than once for each entity.
*/

export type RectangleGraphicsCesiumProps = PickCesiumProps<
  CesiumRectangleGraphics | CesiumRectangleGraphics.ConstructorOptions,
  typeof cesiumProps
>;

export type RectangleGraphicsCesiumEvents = {
  onDefinitionChange?: () => void;
};

export type RectangleGraphicsProps = RectangleGraphicsCesiumProps & RectangleGraphicsCesiumEvents;

const cesiumProps = [
  "coordinates",
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
  "rotation",
  "stRotation",
  "granularity",
  "shadows",
  "distanceDisplayCondition",
  "zIndex",
] as const;

const cesiumEventProps: EventkeyMap<CesiumRectangleGraphics, RectangleGraphicsCesiumEvents> = {
  onDefinitionChange: "definitionChanged",
};

// Unused prop check
type IgnoredProps = never;
type UnusedProps = UnusedCesiumProps<
  CesiumRectangleGraphics | CesiumRectangleGraphics.ConstructorOptions,
  typeof cesiumProps | typeof cesiumEventProps[keyof typeof cesiumEventProps]
>;
type AssertUnusedProps = AssertNever<Exclude<UnusedProps, IgnoredProps>>;

const RectangleGraphics = createCesiumComponent<CesiumRectangleGraphics, RectangleGraphicsProps>({
  name: "RectangleGraphics",
  create(context, props) {
    if (!context.entity) return;
    const element = new CesiumRectangleGraphics(props);
    context.entity.rectangle = element;
    return element;
  },
  destroy(_element, context) {
    if (context.entity) {
      context.entity.rectangle = undefined;
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default RectangleGraphics;
