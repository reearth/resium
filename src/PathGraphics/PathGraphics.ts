import { PathGraphics as CesiumPathGraphics } from "cesium";

import { createCesiumComponent, PickCesiumProps, Merge } from "../core";

/*
@summary
`PathGraphics` is a path visualization for the entity.
*/

/*
@scope
PathGraphics can be mounted only inside[Entity](/components/Entity) components,
and can not be mounted more than once for each entity.
*/

export type Target = Merge<CesiumPathGraphics, CesiumPathGraphics.ConstructorOptions>;

export type PathGraphicsCesiumProps = PickCesiumProps<
  Merge<CesiumPathGraphics, CesiumPathGraphics.ConstructorOptions>,
  typeof cesiumProps
>;

export type PathGraphicsCesiumEvents = {
  onDefinitionChange?: () => void;
};

export type PathGraphicsProps = PathGraphicsCesiumProps & PathGraphicsCesiumEvents;

const cesiumProps = [
  "leadTime",
  "trailTime",
  "show",
  "width",
  "material",
  "resolution",
  "distanceDisplayCondition",
] as const;

export const cesiumEventProps = {
  onDefinitionChange: "definitionChanged",
} as const;

const PathGraphics = createCesiumComponent<CesiumPathGraphics, PathGraphicsProps>({
  name: "PathGraphics",
  create(context, props) {
    if (!context.entity) return;
    const element = new CesiumPathGraphics(props);
    context.entity.path = element;
    return element;
  },
  destroy(_element, context) {
    if (context.entity) {
      context.entity.path = undefined;
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default PathGraphics;
