import { CylinderGraphics as CesiumCylinderGraphics } from "cesium";

import { createCesiumComponent, EventkeyMap } from "../core/component";

/*
@summary
`CylinderGraphics` is a cylinder visualization for the entity.
*/

/*
@scope
CylinderGraphics is only inside [Entity](/components/Entity) components,
and can not be used more than once for each entity.
*/

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

export interface CylinderCesiumEvents {
  onDefinitionChange?: () => void;
}

export interface CylinderGraphicsProps extends CylinderGraphicsCesiumProps, CylinderCesiumEvents {}

const cesiumProps: (keyof CylinderGraphicsCesiumProps)[] = [
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

const cesiumEventProps: EventkeyMap<Cesium.CylinderGraphics, CylinderCesiumEvents> = {
  onDefinitionChange: "definitionChanged",
};

const CylinderGraphics = createCesiumComponent<
  Cesium.CylinderGraphics,
  CylinderGraphicsProps,
  {
    entity?: Cesium.Entity;
  }
>({
  name: "CylinderGraphics",
  create(context, props) {
    if (!context.entity) return;
    const element = new CesiumCylinderGraphics(props as any); // WORKAROUND
    context.entity.cylinder = element;
    return element;
  },
  destroy(element, context) {
    if (context.entity) {
      context.entity.cylinder = undefined as any;
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default CylinderGraphics;
