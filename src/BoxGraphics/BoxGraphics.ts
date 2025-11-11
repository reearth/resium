import { BoxGraphics as CesiumBoxGraphics } from "cesium";

import { createCesiumComponent, PickCesiumProps, Merge } from "../core";

/*
@summary
`BoxGraphics` is a box visualization for the entity.
*/

/*
@scope
BoxGraphic can be mounted only inside[Entity](/components/Entity) components,
and can not be mounted more than once for each entity.
*/

export type BoxGraphicsCesiumProps = PickCesiumProps<
  Merge<CesiumBoxGraphics, CesiumBoxGraphics.ConstructorOptions>,
  typeof cesiumProps
>;

export type BoxGraphicsCesiumEvents = {
  onDefinitionChange?: () => void;
};

export type BoxGraphicsProps = BoxGraphicsCesiumProps & BoxGraphicsCesiumEvents;

const cesiumProps = [
  "heightReference",
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

export const cesiumEventProps = {
  onDefinitionChange: "definitionChanged",
} as const;

const BoxGraphics = createCesiumComponent<CesiumBoxGraphics, BoxGraphicsProps>({
  name: "BoxGraphics",
  create(context, props) {
    if (!context.entity) return;
    const element = new CesiumBoxGraphics(props);
    context.entity.box = element;
    return element;
  },
  destroy(_element, context) {
    if (context.entity) {
      context.entity.box = undefined;
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default BoxGraphics;
