import { PlaneGraphics as CesiumPlaneGraphics } from "cesium";

import { createCesiumComponent, PickCesiumProps, Merge } from "../core";

/*
@summary
`PlaneGraphics` is a plane visualization for the entity.
*/

/*
@scope
PlaneGraphics can be mounted only inside[Entity](/components/Entity) components,
and can not be mounted more than once for each entity.
*/

export type PlaneGraphicsCesiumProps = PickCesiumProps<
  Merge<CesiumPlaneGraphics, CesiumPlaneGraphics.ConstructorOptions>,
  typeof cesiumProps
>;

export type PlaneGraphicsCesiumEvents = {
  onDefinitionChange?: () => void;
};

export type PlaneGraphicsProps = PlaneGraphicsCesiumProps & PlaneGraphicsCesiumEvents;

const cesiumProps = [
  "plane",
  "dimensions",
  "show",
  "fill",
  "material",
  "outline",
  "outlineColor",
  "outlineWidth",
  "shadows",
  "distanceDisplayCondition",
] as const;

// PlaneGraphics
export const cesiumEventProps = {
  onDefinitionChange: "definitionChanged",
} as const;

const PlaneGraphics = createCesiumComponent<CesiumPlaneGraphics, PlaneGraphicsProps>({
  name: "PlaneGraphics",
  create(context, props) {
    if (!context.entity) return;
    const element = new CesiumPlaneGraphics(props);
    context.entity.plane = element;
    return element;
  },
  destroy(_element, context) {
    if (context.entity) {
      context.entity.plane = undefined;
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default PlaneGraphics;
