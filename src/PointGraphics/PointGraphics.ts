import { PointGraphics as CesiumPointGraphics } from "cesium";

import { createCesiumComponent, EventkeyMap } from "../core/component";

/*
@summary
`PointGraphics` is a point visualization for the entity.
*/

/*
@scope
PointGraphics is only inside [Entity](/components/Entity) components,
and can not be used more than once for each entity.
*/

export interface PointGraphicsCesiumProps {
  color?: Cesium.Property | Cesium.Color;
  pixelSize?: Cesium.Property | number;
  outlineColor?: Cesium.Property | Cesium.Color;
  outlineWidth?: Cesium.Property | number;
  show?: Cesium.Property | boolean;
  scaleByDistance?: Cesium.Property | Cesium.NearFarScalar;
  translucencyByDistance?: Cesium.Property | Cesium.NearFarScalar;
  heightReference?: Cesium.Property | Cesium.HeightReference;
  distanceDisplayCondition?: Cesium.Property | Cesium.DistanceDisplayCondition;
  disableDepthTestDistance?: Cesium.Property | number;
}

export interface PointGraphicsCesiumEvents {
  onDefinitionChange?: () => void;
}

export interface PointGraphicsProps extends PointGraphicsCesiumProps, PointGraphicsCesiumEvents {}

const cesiumProps: (keyof PointGraphicsCesiumProps)[] = [
  "color",
  "pixelSize",
  "outlineColor",
  "outlineWidth",
  "show",
  "scaleByDistance",
  "translucencyByDistance",
  "heightReference",
  "distanceDisplayCondition",
  "disableDepthTestDistance",
];

const cesiumEventProps: EventkeyMap<Cesium.PointGraphics, PointGraphicsCesiumEvents> = {
  onDefinitionChange: "definitionChanged",
};

const PointGraphics = createCesiumComponent<
  Cesium.PointGraphics,
  PointGraphicsProps,
  {
    entity?: Cesium.Entity;
  }
>({
  name: "PointGraphics",
  create(context, props) {
    if (!context.entity) return;
    const element = new CesiumPointGraphics(props as any); // WORKAROUND
    context.entity.point = element;
    return element;
  },
  destroy(element, context) {
    if (context.entity) {
      context.entity.point = undefined as any;
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default PointGraphics;
