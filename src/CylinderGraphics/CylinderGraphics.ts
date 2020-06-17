import {
  CylinderGraphics as CesiumCylinderGraphics,
  Property,
  HeightReference,
  Color,
  MaterialProperty,
  ShadowMode,
  DistanceDisplayCondition,
} from "cesium";

import { createCesiumComponent, EventkeyMap } from "../core";

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
  heightReference?: Property | HeightReference;
  length?: Property | number;
  topRadius?: Property | number;
  bottomRadius?: Property | number;
  show?: Property | boolean;
  fill?: Property | boolean;
  material?: MaterialProperty | Color | string;
  outline?: Property | boolean;
  outlineColor?: Property | Color;
  outlineWidth?: Property | number;
  numberOfVerticalLines?: Property | number;
  slices?: Property | number;
  shadowMode?: Property | ShadowMode;
  distanceDisplayCondition?: Property | DistanceDisplayCondition;
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

const cesiumEventProps: EventkeyMap<CesiumCylinderGraphics, CylinderCesiumEvents> = {
  onDefinitionChange: "definitionChanged",
};

const CylinderGraphics = createCesiumComponent<CesiumCylinderGraphics, CylinderGraphicsProps>({
  name: "CylinderGraphics",
  create(context, props) {
    if (!context.entity) return;
    const element = new CesiumCylinderGraphics(props as any); // WORKAROUND: material
    context.entity.cylinder = element;
    return element;
  },
  destroy(_element, context) {
    if (context.entity) {
      context.entity.cylinder = undefined;
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default CylinderGraphics;
