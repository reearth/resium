import Cesium from "cesium";

import createCesiumComponent, { EventkeyMap } from "./core/CesiumComponent";

export interface PolygonGraphicsCesiumProps {
  hierarchy?: Cesium.Property | Cesium.PolygonHierarchy;
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
  stRotation?: Cesium.Property | number;
  granularity?: Cesium.Property | number;
  perPositionHeight?: Cesium.Property | boolean;
  closeTop?: boolean;
  closeBottom?: boolean;
  shadows?: Cesium.Property | Cesium.ShadowMode;
  distanceDisplayCondition?: Cesium.Property | Cesium.DistanceDisplayCondition;
  zIndex?: Cesium.Property | number;
  classificationType?: Cesium.Property | any; // Cesium.ClassificationType
}

export interface PolygonGraphicsProps extends PolygonGraphicsCesiumProps {
  onDefinitionChange?: () => void;
}

export interface PolygonGraphicsContext {
  entity?: Cesium.Entity;
}

const cesiumProps: Array<keyof PolygonGraphicsCesiumProps> = [
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
];

const cesiumEventProps: EventkeyMap<Cesium.PolygonGraphics, keyof PolygonGraphicsProps> = {
  definitionChanged: "onDefinitionChange",
};

const PolygonGraphics = createCesiumComponent<
  Cesium.PolygonGraphics,
  PolygonGraphicsProps,
  PolygonGraphicsContext
>({
  name: "PolygonGraphics",
  create(cprops) {
    // workaround: type of "image" prop
    const pg = new Cesium.PolygonGraphics(cprops as any);
    if (cprops.classificationType) {
      (pg as any).classificationType = cprops.classificationType;
    }
    return pg;
  },
  mount(element, context) {
    if (context.entity) {
      context.entity.polygon = element;
    }
  },
  unmount(element, context) {
    if (context.entity) {
      context.entity.polygon = undefined as any;
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default PolygonGraphics;
