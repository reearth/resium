import { PointGraphics as CesiumPointGraphics } from "cesium";

import { createCesiumComponent, PickCesiumProps, Merge } from "../core";

/*
@summary
`PointGraphics` is a point visualization for the entity.
*/

/*
@scope
PointGraphics can be mounted only inside[Entity](/components/Entity) components,
and can not be mounted more than once for each entity.
*/

export type PointGraphicsCesiumProps = PickCesiumProps<
  Merge<CesiumPointGraphics, CesiumPointGraphics.ConstructorOptions>,
  typeof cesiumProps
>;

export type PointGraphicsCesiumEvents = {
  onDefinitionChange?: () => void;
};

export type PointGraphicsProps = PointGraphicsCesiumProps & PointGraphicsCesiumEvents;

const cesiumProps = [
  "color",
  "pixelSize",
  "outlineColor",
  "outlineWidth",
  "show",
  "scaleByDistance",
  "translucencyByDistance",
  "heightReference",
  "distanceDisplayCondition",
  "disableDepthTestDistance",
] as const;

export const cesiumEventProps = {
  onDefinitionChange: "definitionChanged",
} as const;

const PointGraphics = createCesiumComponent<CesiumPointGraphics, PointGraphicsProps>({
  name: "PointGraphics",
  create(context, props) {
    if (!context.entity) return;
    const element = new CesiumPointGraphics(props);
    context.entity.point = element;
    return element;
  },
  destroy(_element, context) {
    if (context.entity) {
      context.entity.point = undefined;
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default PointGraphics;
