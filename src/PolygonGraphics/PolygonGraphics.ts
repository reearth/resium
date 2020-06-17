import {
  PolygonGraphics as CesiumPolygonGraphics,
  Property,
  HeightReference,
  PolygonHierarchy,
  Cartesian3,
  Color,
  MaterialProperty,
  ShadowMode,
  DistanceDisplayCondition,
  ClassificationType,
} from "cesium";

import { createCesiumComponent, EventkeyMap } from "../core";

/*
@summary
`PolygonGraphics` is a polygon visualization for the entity.
*/

/*
@scope
PolygonGraphics is only inside [Entity](/components/Entity) components,
and can not be used more than once for each entity.
*/

export interface PolygonGraphicsCesiumProps {
  hierarchy?: Property | PolygonHierarchy | Cartesian3[];
  height?: Property | number;
  heightReference?: Property | HeightReference;
  extrudedHeight?: Property | number;
  extrudedHeightReference?: Property | HeightReference;
  show?: Property | boolean;
  fill?: Property | boolean;
  material?: MaterialProperty | Color | string;
  outline?: Property | boolean;
  outlineColor?: Property | Color;
  outlineWidth?: Property | number;
  stRotation?: Property | number;
  granularity?: Property | number;
  perPositionHeight?: Property | boolean;
  closeTop?: boolean;
  closeBottom?: boolean;
  shadows?: Property | ShadowMode;
  distanceDisplayCondition?: Property | DistanceDisplayCondition;
  zIndex?: Property | number;
  classificationType?: Property | ClassificationType;
}

export interface PolygonGraphicsCesiumEvents {
  onDefinitionChange?: () => void;
}

export interface PolygonGraphicsProps
  extends PolygonGraphicsCesiumProps,
    PolygonGraphicsCesiumEvents {}

const cesiumProps: (keyof PolygonGraphicsCesiumProps)[] = [
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

const cesiumEventProps: EventkeyMap<CesiumPolygonGraphics, PolygonGraphicsCesiumEvents> = {
  onDefinitionChange: "definitionChanged",
};

const PolygonGraphics = createCesiumComponent<CesiumPolygonGraphics, PolygonGraphicsProps>({
  name: "PolygonGraphics",
  create(context, props) {
    if (!context.entity) return;
    const element = new CesiumPolygonGraphics(props as any); // WORKAROUND: hierarchy type mismatched
    context.entity.polygon = element;
    return element;
  },
  destroy(_element, context) {
    if (context.entity) {
      context.entity.polygon = undefined;
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default PolygonGraphics;
