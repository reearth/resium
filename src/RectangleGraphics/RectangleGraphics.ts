import { RectangleGraphics as CesiumRectangleGraphics } from "cesium";

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
`RectangleGraphics` is a rectangle visualization for the entity.
*/

/*
@scope
RectangleGraphics is only inside [Entity](/components/Entity) components,
and can not be used more than once for each entity.
*/

export type RectangleGraphicsCesiumProps = PickCesiumProps<
  Merge<CesiumRectangleGraphics, CesiumRectangleGraphics.ConstructorOptions>,
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

const cesiumEventProps = {
  onDefinitionChange: "definitionChanged",
} as const;

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

// Unused prop check
type IgnoredProps = never;
type UnusedProps = UnusedCesiumProps<
  Merge<CesiumRectangleGraphics, CesiumRectangleGraphics.ConstructorOptions>,
  keyof RectangleGraphicsProps | ValueOf<typeof cesiumEventProps>
>;
type AssertUnusedProps = AssertNever<Exclude<UnusedProps, IgnoredProps>>;
