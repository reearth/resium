import Cesium from "cesium";

import createCesiumComponent, { EventkeyMap } from "./core/CesiumComponent";

export interface PathGraphicsCesiumProps {
  leadTime?: Cesium.Property | number;
  trailTime?: Cesium.Property | number;
  show?: Cesium.Property | boolean;
  width?: Cesium.Property | number;
  material?: Cesium.MaterialProperty | Cesium.Color | string;
  resolution?: Cesium.Property | number;
  distanceDisplayCondition?: Cesium.Property | Cesium.DistanceDisplayCondition;
}

export interface PathGraphicsProps extends PathGraphicsCesiumProps {
  onDefinitionChange?: () => void;
}

export interface PathGraphicsContext {
  entity?: Cesium.Entity;
}

const cesiumProps: Array<keyof PathGraphicsCesiumProps> = [
  "leadTime",
  "trailTime",
  "show",
  "width",
  "material",
  "resolution",
  "distanceDisplayCondition",
];

const cesiumEventProps: EventkeyMap<Cesium.PathGraphics, keyof PathGraphicsProps> = {
  definitionChanged: "onDefinitionChange",
};

const PathGraphics = createCesiumComponent<
  Cesium.PathGraphics,
  PathGraphicsProps,
  PathGraphicsContext
>({
  name: "PathGraphics",
  create(cprops) {
    return new Cesium.PathGraphics(cprops as any);
  },
  mount(element, context) {
    if (context.entity) {
      context.entity.path = element;
    }
  },
  unmount(element, context) {
    if (context.entity) {
      context.entity.path = undefined as any;
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default PathGraphics;
