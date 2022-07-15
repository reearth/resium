import { PolygonGraphics as CesiumPolygonGraphics } from "cesium";

import { createCesiumComponent, PickCesiumProps, Merge } from "../core";

/*
@summary
`PolygonGraphics` is a polygon visualization for the entity.
*/

/*
@scope
PolygonGraphics can be mounted only inside[Entity](/components/Entity) components,
and can not be mounted more than once for each entity.
*/

export type Target = Merge<CesiumPolygonGraphics, CesiumPolygonGraphics.ConstructorOptions>;

export type PolygonGraphicsCesiumProps = PickCesiumProps<Target, typeof cesiumProps>;

export type PolygonGraphicsCesiumEvents = {
  onDefinitionChange?: () => void;
};

export type PolygonGraphicsProps = PolygonGraphicsCesiumProps & PolygonGraphicsCesiumEvents;

const cesiumProps = [
  "arcType",
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
  "textureCoordinates",
] as const;

export const cesiumEventProps = {
  onDefinitionChange: "definitionChanged",
} as const;

const PolygonGraphics = createCesiumComponent<CesiumPolygonGraphics, PolygonGraphicsProps>({
  name: "PolygonGraphics",
  create(context, props) {
    if (!context.entity) return;
    const element = new CesiumPolygonGraphics(props);
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
