import { BoxGraphics as CesiumBoxGraphics } from "cesium";

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
  heightReference?: Cesium.Property | Cesium.HeightReference;
  dimensions?: Cesium.Property | Cesium.Cartesian3;
  show?: Cesium.Property | boolean;
  fill?: Cesium.Property | boolean;
  material?: Cesium.MaterialProperty | Cesium.Color | string;
  outline?: Cesium.Property | boolean;
  outlineColor?: Cesium.Property | number;
  outlineWidth?: Cesium.Property | number;
  shadows?: Cesium.Property | Cesium.ShadowMode;
  distanceDisplayCondition?: Cesium.Property | Cesium.DistanceDisplayCondition;
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

const cesiumEventProps: EventkeyMap<Cesium.BoxGraphics, BoxGraphicsCesiumEvents> = {
  onDefinitionChange: "definitionChanged",
};

const BoxGraphics = createCesiumComponent<
  Cesium.BoxGraphics,
  BoxGraphicsProps,
  {
    entity?: Cesium.Entity;
  }
>({
  name: "BoxGraphics",
  create(context, props) {
    if (!context.entity) return;
    const element = new CesiumBoxGraphics({
      heightReference: props.heightReference, // WORKAROUND
      dimensions: props.dimensions,
      show: props.show,
      fill: props.fill,
      material: props.material,
      outline: props.outline,
      outlineColor: props.outlineColor,
      outlineWidth: props.outlineWidth,
      shadows: props.shadows,
      distanceDisplayCondition: props.distanceDisplayCondition,
    } as any);
    context.entity.box = element;
    return element;
  },
  destroy(element, context) {
    if (context.entity) {
      context.entity.box = undefined as any; // WORKAROUND
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default BoxGraphics;
