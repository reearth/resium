import Cesium from "cesium";

import createCesiumComponent, { EventkeyMap } from "./core/CesiumComponent";

export interface CylinderGraphicsCesiumProps {
  heightReference?: Cesium.Property | Cesium.HeightReference;
  length?: Cesium.Property | number;
  topRadius?: Cesium.Property | number;
  bottomRadius?: Cesium.Property | number;
  show?: Cesium.Property | boolean;
  fill?: Cesium.Property | boolean;
  material?: Cesium.MaterialProperty | Cesium.Color | string;
  outline?: Cesium.Property | boolean;
  outlineColor?: Cesium.Property | Cesium.Color;
  outlineWidth?: Cesium.Property | number;
  numberOfVerticalLines?: Cesium.Property | number;
  slices?: Cesium.Property | number;
  shadowMode?: Cesium.Property | Cesium.ShadowMode;
  distanceDisplayCondition?: Cesium.Property | Cesium.DistanceDisplayCondition;
}

export interface CylinderGraphicsProps extends CylinderGraphicsCesiumProps {
  onDefinitionChange?: () => void;
}

export interface CylinderGraphicsContext {
  entity?: Cesium.Entity;
}

const cesiumProps: Array<keyof CylinderGraphicsCesiumProps> = [
  "heightReference",
  "length",
  "topRadius",
  "bottomRadius",
  "show",
  "fill",
  "material",
  "outline",
  "outlineColor",
  "outlineWidth",
  "numberOfVerticalLines",
  "slices",
  "shadowMode",
  "distanceDisplayCondition",
];

const cesiumEventProps: EventkeyMap<Cesium.CorridorGraphics, keyof CylinderGraphicsProps> = {
  definitionChanged: "onDefinitionChange",
};

const CylinderGraphics = createCesiumComponent<
  Cesium.CylinderGraphics,
  CylinderGraphicsProps,
  CylinderGraphicsContext
>({
  name: "CylinderGraphics",
  create(cprops) {
    // workaround: type of "image" prop
    return new Cesium.CylinderGraphics(cprops as any);
  },
  mount(element, context) {
    if (context.entity) {
      context.entity.cylinder = element;
    }
  },
  unmount(element, context) {
    if (context.entity) {
      context.entity.cylinder = undefined as any;
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default CylinderGraphics;
