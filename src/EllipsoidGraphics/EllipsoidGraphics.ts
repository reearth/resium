import { EllipsoidGraphics as CesiumEllipsoidGraphics } from "cesium";

import {
  createCesiumComponent,
  EventkeyMap,
  PickCesiumProps,
  UnusedCesiumProps,
  AssertNever,
} from "../core";

/*
@summary
`EllipsoidGraphics` is a ellipsoid visualization for the entity.
*/

/*
@scope
EllipsoidGraphics is only inside [Entity](/components/Entity) components,
and can not be used more than once for each entity.
*/

export type EllipsoidGraphicsCesiumProps = PickCesiumProps<
  CesiumEllipsoidGraphics | CesiumEllipsoidGraphics.ConstructorOptions,
  typeof cesiumProps
>;

export type EllipsoidGraphicsCesiumEvents = {
  onDefinitionChange?: () => void;
};

export type EllipsoidGraphicsProps = EllipsoidGraphicsCesiumProps & EllipsoidGraphicsCesiumEvents;

const cesiumProps = [
  "heightReference",
  "radii",
  "show",
  "fill",
  "innerRadii",
  "material",
  "maximumClock",
  "maximumCone",
  "minimumClock",
  "minimumCone",
  "outline",
  "outlineColor",
  "outlineWidth",
  "subdivisions",
  "stackPartitions",
  "slicePartitions",
  "shadows",
  "distanceDisplayCondition",
] as const;

const cesiumEventProps: EventkeyMap<CesiumEllipsoidGraphics, EllipsoidGraphicsCesiumEvents> = {
  onDefinitionChange: "definitionChanged",
};

// Unused prop check
type IgnoredProps = never;
type UnusedProps = UnusedCesiumProps<
  CesiumEllipsoidGraphics | CesiumEllipsoidGraphics.ConstructorOptions,
  typeof cesiumProps | typeof cesiumEventProps[keyof typeof cesiumEventProps]
>;
type AssertUnusedProps = AssertNever<Exclude<UnusedProps, IgnoredProps>>;

const EllipsoidGraphics = createCesiumComponent<CesiumEllipsoidGraphics, EllipsoidGraphicsProps>({
  name: "EllipsoidGraphics",
  create(context, props) {
    if (!context.entity) return;
    const element = new CesiumEllipsoidGraphics(props);
    context.entity.ellipsoid = element;
    return element;
  },
  destroy(_element, context) {
    if (context.entity) {
      context.entity.ellipsoid = undefined;
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default EllipsoidGraphics;
