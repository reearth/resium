import {
  CorridorGraphics as CesiumCorridorGraphics,
  Property,
  Cartesian3,
  CornerType,
  HeightReference,
  MaterialProperty,
  Color,
  DistanceDisplayCondition,
  ClassificationType,
  ConstantProperty,
  Entity,
} from "cesium";

import { createCesiumComponent, EventkeyMap } from "../core/component";

/*
@summary
`CorriderGraphics` is a corrider visualization for the entity.
*/

/*
@scope
CorriderGraphics is only inside [Entity](/components/Entity) components,
and can not be used more than once for each entity.
*/

export interface CorridorGraphicsCesiumProps {
  positions?: Property | Cartesian3[];
  width?: Property | number;
  cornerType?: Property | CornerType;
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
  granularity?: Property | number;
  shadows?: Property | boolean;
  distanceDisplayCondition?: Property | DistanceDisplayCondition;
  zIndex?: ConstantProperty | number;
  classificationType?: Property | ClassificationType;
}

export interface CorridorCesiumEvents {
  onDefinitionChange?: () => void;
}

export interface CorridorGraphicsProps extends CorridorGraphicsCesiumProps, CorridorCesiumEvents {}

const cesiumProps: (keyof CorridorGraphicsCesiumProps)[] = [
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

const cesiumEventProps: EventkeyMap<CesiumCorridorGraphics, CorridorCesiumEvents> = {
  onDefinitionChange: "definitionChanged",
};

const CorridorGraphics = createCesiumComponent<
  CesiumCorridorGraphics,
  CorridorGraphicsProps,
  {
    entity?: Entity;
  }
>({
  name: "CorridorGraphics",
  create(context, props) {
    if (!context.entity) return;
    const element = new CesiumCorridorGraphics(props as any);
    if (props.classificationType) {
      element.classificationType = props.classificationType as any;
    }
    context.entity.corridor = element;
    return element;
  },
  destroy(element, context) {
    if (context.entity) {
      context.entity.corridor = undefined;
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default CorridorGraphics;
