import Cesium from "cesium";

import createCesiumComponent, { EventkeyMap } from "./core/CesiumComponent";

export interface CorridorGraphicsCesiumProps {
  positions?: Cesium.Property | Cesium.Cartesian3[];
  width?: Cesium.Property | number;
  cornerType?: Cesium.Property | Cesium.CornerType;
  height?: Cesium.Property | number;
  heightReference?: Cesium.Property | Cesium.HeightReference;
  extrudedHeight?: Cesium.Property | number;
  extrudedHeightReference?: Cesium.Property | Cesium.HeightReference;
  show?: Cesium.Property | boolean;
  fill?: Cesium.Property | boolean;
  material?: Cesium.MaterialProperty | Cesium.Color | string;
  outline?: Cesium.Property | boolean;
  outlineColor?: Cesium.Property | Cesium.Color;
  outlineWidth?: Cesium.Property | number;
  granularity?: Cesium.Property | number;
  shadows?: Cesium.Property | boolean;
  distanceDisplayCondition?: Cesium.Property | Cesium.DistanceDisplayCondition;
  zIndex?: Cesium.ConstantProperty | number;
  classificationType?: Cesium.Property | any; // Cesium.ClassificationType
}

export interface CorridorGraphicsProps extends CorridorGraphicsCesiumProps {
  onDefinitionChange?: () => void;
}

export interface CorridorGraphicsContext {
  entity?: Cesium.Entity;
}

const cesiumProps: Array<keyof CorridorGraphicsCesiumProps> = [
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
];

const cesiumEventProps: EventkeyMap<Cesium.CorridorGraphics, keyof CorridorGraphicsProps> = {
  definitionChanged: "onDefinitionChange",
};

const CorridorGraphics = createCesiumComponent<
  Cesium.CorridorGraphics,
  CorridorGraphicsProps,
  CorridorGraphicsContext
>({
  name: "CorridorGraphics",
  create(cprops) {
    const cg = new Cesium.CorridorGraphics(cprops as any);
    if (cprops.classificationType) {
      (cg as any).classificationType = cprops.classificationType;
    }
    return cg;
  },
  mount(element, context) {
    if (context.entity) {
      context.entity.corridor = element;
    }
  },
  unmount(element, context) {
    if (context.entity) {
      context.entity.corridor = undefined as any;
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default CorridorGraphics;
