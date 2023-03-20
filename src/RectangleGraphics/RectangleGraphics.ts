import { RectangleGraphics as CesiumRectangleGraphics } from "cesium";

import { createCesiumComponent, PickCesiumProps, Merge } from "../core";

/*
@summary
`RectangleGraphics` is a rectangle visualization for the entity.
*/

/*
@scope
RectangleGraphics can be mounted only inside[Entity](/components/Entity) components,
and can not be mounted more than once for each entity.
*/

export type Target = Merge<CesiumRectangleGraphics, CesiumRectangleGraphics.ConstructorOptions>;

export type RectangleGraphicsCesiumProps = PickCesiumProps<Target, typeof cesiumProps>;

export type RectangleGraphicsCesiumEvents = {
  onDefinitionChange?: () => void;
};

export type RectangleGraphicsProps = RectangleGraphicsCesiumProps & RectangleGraphicsCesiumEvents;

const cesiumProps = [
  "classificationType",
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

export const cesiumEventProps = {
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
