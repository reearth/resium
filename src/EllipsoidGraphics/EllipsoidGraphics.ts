import { EllipsoidGraphics as CesiumEllipsoidGraphics } from "cesium";

import { createCesiumComponent, PickCesiumProps, Merge } from "../core";

/*
@summary
`EllipsoidGraphics` is a ellipsoid visualization for the entity.
*/

/*
@scope
EllipsoidGraphics can be mounted only inside[Entity](/components/Entity) components,
and can not be mounted more than once for each entity.
*/

export type Target = Merge<CesiumEllipsoidGraphics, CesiumEllipsoidGraphics.ConstructorOptions>;

export type EllipsoidGraphicsCesiumProps = PickCesiumProps<Target, typeof cesiumProps>;

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

export const cesiumEventProps = {
  onDefinitionChange: "definitionChanged",
} as const;

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
