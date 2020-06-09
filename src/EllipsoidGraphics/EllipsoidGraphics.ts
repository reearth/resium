import {
  EllipsoidGraphics as CesiumEllipsoidGraphics,
  Entity,
  Property,
  HeightReference,
  Cartesian3,
  Color,
  MaterialProperty,
  DistanceDisplayCondition,
  ShadowMode,
} from "cesium";

import { createCesiumComponent, EventkeyMap } from "../core/component";

/*
@summary
`EllipsoidGraphics` is a ellipsoid visualization for the entity.
*/

/*
@scope
EllipsoidGraphics is only inside [Entity](/components/Entity) components,
and can not be used more than once for each entity.
*/

export interface EllipsoidGraphicsCesiumProps {
  heightReference?: Property | HeightReference;
  radii?: Property | Cartesian3;
  show?: Property | boolean;
  fill?: Property | boolean;
  innerRadii?: Property | Cartesian3;
  material?: MaterialProperty | Color | string;
  maximumClock?: Property | number;
  maximumCone?: Property | number;
  minimumClock?: Property | number;
  minimumCone?: Property | number;
  outline?: Property | boolean;
  outlineColor?: Property | Color;
  outlineWidth?: Property | number;
  subdivisions?: Property | number;
  stackPartitions?: Property | number;
  slicePartitions?: Property | number;
  shadows?: Property | ShadowMode;
  distanceDisplayCondition?: Property | DistanceDisplayCondition;
}

export interface EllipsoidGraphicsCesiumEvents {
  onDefinitionChange?: () => void;
}

export interface EllipsoidGraphicsProps
  extends EllipsoidGraphicsCesiumProps,
    EllipsoidGraphicsCesiumEvents {}

const cesiumProps: (keyof EllipsoidGraphicsCesiumProps)[] = [
  "heightReference",
  "radii",
  "show",
  "fill",
  "innerRadii",
  "material",
  "maximumClock",
  "maximumCone",
  "minimumClock",
  "minimumCone",
  "outline",
  "outlineColor",
  "outlineWidth",
  "subdivisions",
  "stackPartitions",
  "slicePartitions",
  "shadows",
  "distanceDisplayCondition",
];

const cesiumEventProps: EventkeyMap<CesiumEllipsoidGraphics, EllipsoidGraphicsCesiumEvents> = {
  onDefinitionChange: "definitionChanged",
};

const EllipsoidGraphics = createCesiumComponent<
  CesiumEllipsoidGraphics,
  EllipsoidGraphicsProps,
  {
    entity?: Entity;
  }
>({
  name: "EllipsoidGraphics",
  create(context, props) {
    if (!context.entity) return;
    const element = new CesiumEllipsoidGraphics(props as any); // WORKAROUND
    context.entity.ellipsoid = element;
    return element;
  },
  destroy(element, context) {
    if (context.entity) {
      context.entity.ellipsoid = undefined as any;
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default EllipsoidGraphics;
