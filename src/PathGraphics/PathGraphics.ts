import { PathGraphics as CesiumPathGraphics } from "cesium";

import { createCesiumComponent, EventkeyMap } from "../core/component";

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
  leadTime?: Cesium.Property | number;
  trailTime?: Cesium.Property | number;
  show?: Cesium.Property | boolean;
  width?: Cesium.Property | number;
  material?: Cesium.MaterialProperty | Cesium.Color | string;
  resolution?: Cesium.Property | number;
  distanceDisplayCondition?: Cesium.Property | Cesium.DistanceDisplayCondition;
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

const cesiumEventProps: EventkeyMap<Cesium.PathGraphics, PathGraphicsCesiumEvents> = {
  onDefinitionChange: "definitionChanged",
};

const PathGraphics = createCesiumComponent<
  Cesium.PathGraphics,
  PathGraphicsProps,
  {
    entity?: Cesium.Entity;
  }
>({
  name: "PathGraphics",
  create(context, props) {
    if (!context.entity) return;
    const element = new CesiumPathGraphics(props as any); // WORKAROUND
    context.entity.path = element;
    return element;
  },
  destroy(element, context) {
    if (context.entity) {
      context.entity.path = undefined as any;
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default PathGraphics;
