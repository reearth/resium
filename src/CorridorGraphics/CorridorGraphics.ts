import { CorridorGraphics as CesiumCorridorGraphics } from "cesium";

import { createCesiumComponent, PickCesiumProps, Merge } from "../core";

/*
@summary
`CorriderGraphics` is a corrider visualization for the entity.
*/

/*
@scope
CorriderGraphics can be mounted only inside[Entity](/components/Entity) components,
and can not be mounted more than once for each entity.
*/

export type CorridorGraphicsCesiumProps = PickCesiumProps<
  Merge<CesiumCorridorGraphics, CesiumCorridorGraphics.ConstructorOptions>,
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

export const cesiumEventProps = {
  onDefinitionChange: "definitionChanged",
} as const;

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
