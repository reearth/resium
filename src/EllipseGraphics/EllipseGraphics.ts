import { EllipseGraphics as CesiumEllipseGraphics } from "cesium";

import { createCesiumComponent, PickCesiumProps, Merge } from "../core";

/*
@summary
`EllipseGraphics` is a ellipse visualization for the entity.
*/

/*
@scope
EllipseGraphics can be mounted only inside[Entity](/components/Entity) components,
and can not be mounted more than once for each entity.
*/

export type EllipseGraphicsCesiumProps = PickCesiumProps<
  Merge<CesiumEllipseGraphics, CesiumEllipseGraphics.ConstructorOptions>,
  typeof cesiumProps
>;

export type EllipseGraphicsCesiumEvents = {
  onDefinitionChange?: () => void;
};

export type EllipseGraphicsProps = EllipseGraphicsCesiumProps & EllipseGraphicsCesiumEvents;

const cesiumProps = [
  "semiMajorAxis",
  "semiMinorAxis",
  "height",
  "heightReference",
  "extrudedHeight",
  "show",
  "fill",
  "material",
  "outline",
  "outlineColor",
  "outlineWidth",
  "numberOfVerticalLines",
  "rotation",
  "stRotation",
  "granularity",
  "shadows",
  "distanceDisplayCondition",
  "zIndex",
  "classificationType",
  "extrudedHeightReference",
] as const;

export const cesiumEventProps = {
  onDefinitionChange: "definitionChanged",
} as const;

const EllipseGraphics = createCesiumComponent<CesiumEllipseGraphics, EllipseGraphicsProps>({
  name: "EllipseGraphics",
  create(context, props) {
    if (!context.entity) return;
    const element = new CesiumEllipseGraphics(props);
    context.entity.ellipse = element;
    return element;
  },
  destroy(_element, context) {
    if (context.entity) {
      context.entity.ellipse = undefined;
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default EllipseGraphics;
