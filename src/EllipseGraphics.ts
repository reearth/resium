import Cesium from "cesium";

import createCesiumComponent, { EventkeyMap } from "./core/CesiumComponent";

export interface EllipseGraphicsCesiumProps {
  semiMajorAxis?: Cesium.Property | number;
  semiMinorAxis?: Cesium.Property | number;
  height?: Cesium.Property | number;
  heightReference?: Cesium.Property | Cesium.HeightReference;
  extrudedHeight?: Cesium.Property | number;
  show?: Cesium.Property | boolean;
  fill?: Cesium.Property | boolean;
  material?: Cesium.MaterialProperty | Cesium.Color | string;
  outline?: Cesium.Property | boolean;
  outlineColor?: Cesium.Property | Cesium.Color;
  outlineWidth?: Cesium.Property | number;
  numberOfVerticalLines?: Cesium.Property | number;
  rotation?: Cesium.Property | number;
  stRotation?: Cesium.Property | number;
  granularity?: Cesium.Property | number;
  shadows?: Cesium.Property | Cesium.ShadowMode;
  distanceDisplayCondition?: Cesium.Property | Cesium.DistanceDisplayCondition;
  zIndex?: Cesium.Property | number;
  classificationType?: Cesium.Property | any; // Cesium.ClassificationType
}

export interface EllipseGraphicsProps extends EllipseGraphicsCesiumProps {
  onDefinitionChange?: () => void;
}

export interface EllipseGraphicsContext {
  entity?: Cesium.Entity;
}

const cesiumProps: Array<keyof EllipseGraphicsCesiumProps> = [
  "semiMajorAxis",
  "semiMinorAxis",
  "height",
  "heightReference",
  "extrudedHeight",
  "show",
  "fill",
  "material",
  "outline",
  "outlineColor",
  "outlineWidth",
  "numberOfVerticalLines",
  "rotation",
  "stRotation",
  "granularity",
  "shadows",
  "distanceDisplayCondition",
  "zIndex",
  "classificationType",
];

const cesiumEventProps: EventkeyMap<Cesium.EllipseGraphics, keyof EllipseGraphicsProps> = {
  definitionChanged: "onDefinitionChange",
};

const EllipseGraphics = createCesiumComponent<
  Cesium.EllipseGraphics,
  EllipseGraphicsProps,
  EllipseGraphicsContext
>({
  name: "EllipseGraphics",
  create(cprops) {
    const eg = new Cesium.EllipseGraphics(cprops as any);
    if (cprops.classificationType) {
      (eg as any).classificationType = cprops.classificationType;
    }
    return eg;
  },
  mount(element, context) {
    if (context.entity) {
      context.entity.ellipse = element;
    }
  },
  unmount(element, context) {
    if (context.entity) {
      context.entity.ellipse = undefined as any;
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default EllipseGraphics;
