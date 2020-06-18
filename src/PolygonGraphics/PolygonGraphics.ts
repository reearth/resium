import { PolygonGraphics as CesiumPolygonGraphics } from "cesium";

import {
  createCesiumComponent,
  EventkeyMap,
  PickCesiumProps,
  UnusedCesiumProps,
  AssertNever,
  Merge,
} from "../core";

/*
@summary
`PolygonGraphics` is a polygon visualization for the entity.
*/

/*
@scope
PolygonGraphics is only inside [Entity](/components/Entity) components,
and can not be used more than once for each entity.
*/

export type PolygonGraphicsCesiumProps = PickCesiumProps<
  Merge<CesiumPolygonGraphics, CesiumPolygonGraphics.ConstructorOptions>,
  typeof cesiumProps
>;

export type PolygonGraphicsCesiumEvents = {
  onDefinitionChange?: () => void;
};

export type PolygonGraphicsProps = PolygonGraphicsCesiumProps & PolygonGraphicsCesiumEvents;

const cesiumProps = [
  "hierarchy",
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
  "stRotation",
  "granularity",
  "perPositionHeight",
  "closeTop",
  "closeBottom",
  "shadows",
  "distanceDisplayCondition",
  "zIndex",
  "classificationType",
] as const;

const cesiumEventProps: EventkeyMap<CesiumPolygonGraphics, PolygonGraphicsCesiumEvents> = {
  onDefinitionChange: "definitionChanged",
};

// Unused prop check
type IgnoredProps = never;
type UnusedProps = UnusedCesiumProps<
  CesiumPolygonGraphics | CesiumPolygonGraphics.ConstructorOptions,
  typeof cesiumProps | typeof cesiumEventProps[keyof typeof cesiumEventProps]
>;
type AssertUnusedProps = AssertNever<Exclude<UnusedProps, IgnoredProps>>;

const PolygonGraphics = createCesiumComponent<CesiumPolygonGraphics, PolygonGraphicsProps>({
  name: "PolygonGraphics",
  create(context, props) {
    if (!context.entity) return;
    const element = new CesiumPolygonGraphics(props as any); // WORKAROUND: hierarchy type mismatched
    context.entity.polygon = element;
    return element;
  },
  destroy(_element, context) {
    if (context.entity) {
      context.entity.polygon = undefined;
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default PolygonGraphics;
