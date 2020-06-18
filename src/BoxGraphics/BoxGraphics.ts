import {
  BoxGraphics as CesiumBoxGraphics,
  Property,
  HeightReference,
  Cartesian3,
  Color,
  MaterialProperty,
  ShadowMode,
  DistanceDisplayCondition,
} from "cesium";

import { createCesiumComponent, EventkeyMap } from "../core/component";

/*
@summary
`BoxGraphics` is a box visualization for the entity.
*/

/*
@scope
BoxGraphic is only inside [Entity](/components/Entity) components,
and can not be used more than once for each entity.
*/

export interface BoxGraphicsCesiumProps {
  heightReference?: Property | HeightReference;
  dimensions?: Property | Cartesian3;
  show?: Property | boolean;
  fill?: Property | boolean;
  material?: MaterialProperty | Color | string;
  outline?: Property | boolean;
  outlineColor?: Property | Color;
  outlineWidth?: Property | number;
  shadows?: Property | ShadowMode;
  distanceDisplayCondition?: Property | DistanceDisplayCondition;
}

export interface BoxGraphicsCesiumEvents {
  onDefinitionChange?: () => void;
}

export interface BoxGraphicsProps extends BoxGraphicsCesiumProps, BoxGraphicsCesiumEvents {}

const cesiumProps: (keyof BoxGraphicsCesiumProps)[] = [
  "heightReference",
  "dimensions",
  "show",
  "fill",
  "material",
  "outline",
  "outlineColor",
  "outlineWidth",
  "shadows",
  "distanceDisplayCondition",
];

const cesiumEventProps: EventkeyMap<CesiumBoxGraphics, BoxGraphicsCesiumEvents> = {
  onDefinitionChange: "definitionChanged",
};

const BoxGraphics = createCesiumComponent<CesiumBoxGraphics, BoxGraphicsProps>({
  name: "BoxGraphics",
  create(context, props) {
    if (!context.entity) return;
    const element = new CesiumBoxGraphics({
      heightReference: props.heightReference,
      dimensions: props.dimensions,
      show: props.show,
      fill: props.fill,
      material: props.material as any, // WORKAROUND: string type missing
      outline: props.outline,
      outlineColor: props.outlineColor,
      outlineWidth: props.outlineWidth,
      shadows: props.shadows,
      distanceDisplayCondition: props.distanceDisplayCondition,
    });
    context.entity.box = element;
    return element;
  },
  destroy(_element, context) {
    if (context.entity) {
      context.entity.box = undefined;
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default BoxGraphics;
