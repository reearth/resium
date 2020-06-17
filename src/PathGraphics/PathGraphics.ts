import {
  PathGraphics as CesiumPathGraphics,
  Property,
  DistanceDisplayCondition,
  Color,
  MaterialProperty,
} from "cesium";

import { createCesiumComponent, EventkeyMap } from "../core";

/*
@summary
`PathGraphics` is a path visualization for the entity.
*/

/*
@scope
PathGraphics is only inside [Entity](/components/Entity) components,
and can not be used more than once for each entity.
*/

export interface PathGraphicsCesiumProps {
  leadTime?: Property | number;
  trailTime?: Property | number;
  show?: Property | boolean;
  width?: Property | number;
  material?: MaterialProperty | Color | string;
  resolution?: Property | number;
  distanceDisplayCondition?: Property | DistanceDisplayCondition;
}

export interface PathGraphicsCesiumEvents {
  onDefinitionChange?: () => void;
}

export interface PathGraphicsProps extends PathGraphicsCesiumProps, PathGraphicsCesiumEvents {}

const cesiumProps: (keyof PathGraphicsCesiumProps)[] = [
  "leadTime",
  "trailTime",
  "show",
  "width",
  "material",
  "resolution",
  "distanceDisplayCondition",
];

const cesiumEventProps: EventkeyMap<CesiumPathGraphics, PathGraphicsCesiumEvents> = {
  onDefinitionChange: "definitionChanged",
};

const PathGraphics = createCesiumComponent<CesiumPathGraphics, PathGraphicsProps>({
  name: "PathGraphics",
  create(context, props) {
    if (!context.entity) return;
    const element = new CesiumPathGraphics(props as any); // WORKAROUND: material
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
