import {
  EllipseGraphics as CesiumEllipseGraphics,
  Property,
  HeightReference,
  MaterialProperty,
  Color,
  ShadowMode,
  DistanceDisplayCondition,
  ClassificationType,
} from "cesium";

import { createCesiumComponent, EventkeyMap } from "../core";

/*
@summary
`EllipseGraphics` is a ellipse visualization for the entity.
*/

/*
@scope
EllipseGraphics is only inside [Entity](/components/Entity) components,
and can not be used more than once for each entity.
*/

export interface EllipseGraphicsCesiumProps {
  semiMajorAxis?: Property | number;
  semiMinorAxis?: Property | number;
  height?: Property | number;
  heightReference?: Property | HeightReference;
  extrudedHeight?: Property | number;
  show?: Property | boolean;
  fill?: Property | boolean;
  material?: MaterialProperty | Color | string;
  outline?: Property | boolean;
  outlineColor?: Property | Color;
  outlineWidth?: Property | number;
  numberOfVerticalLines?: Property | number;
  rotation?: Property | number;
  stRotation?: Property | number;
  granularity?: Property | number;
  shadows?: Property | ShadowMode;
  distanceDisplayCondition?: Property | DistanceDisplayCondition;
  zIndex?: Property | number;
  classificationType?: Property | ClassificationType;
}

export interface EllipseGraphicsCesiumEvents {
  onDefinitionChange?: () => void;
}

export interface EllipseGraphicsProps
  extends EllipseGraphicsCesiumProps,
    EllipseGraphicsCesiumEvents {}

const cesiumProps: (keyof EllipseGraphicsCesiumProps)[] = [
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

const cesiumEventProps: EventkeyMap<CesiumEllipseGraphics, EllipseGraphicsCesiumEvents> = {
  onDefinitionChange: "definitionChanged",
};

const EllipseGraphics = createCesiumComponent<CesiumEllipseGraphics, EllipseGraphicsProps>({
  name: "EllipseGraphics",
  create(context, props) {
    if (!context.entity) return;
    const element = new CesiumEllipseGraphics(props as any); // WORKAROUND: material
    if (props.classificationType) {
      // WORKAROUND: classificationType field type is mismatched
      (element as any).classificationType = props.classificationType;
    }
    context.entity.ellipse = element;
    return element;
  },
  destroy(_element, context) {
    if (context.entity) {
      context.entity.ellipse = undefined;
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default EllipseGraphics;
