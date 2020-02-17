import { RectangleGraphics as CesiumRectangleGraphics } from "cesium";

import { createCesiumComponent, EventkeyMap } from "../core/component";

/*
@summary
`RectangleGraphics` is a rectangle visualization for the entity.
*/

/*
@scope
RectangleGraphics is only inside [Entity](/components/Entity) components,
and can not be used more than once for each entity.
*/

export interface RectangleGraphicsCesiumProps {
  coordinates?: Cesium.Property | Cesium.Rectangle;
  height?: Cesium.Property | number;
  heightReference?: Cesium.Property | Cesium.HeightReference;
  extrudedHeight?: Cesium.Property | number;
  extrudedHeightReference?: Cesium.Property | Cesium.HeightReference;
  show?: Cesium.Property | boolean;
  fill?: Cesium.Property | boolean;
  material?: Cesium.MaterialProperty | Cesium.Color | string;
  outline?: Cesium.Property | boolean;
  outlineColor?: Cesium.Property | Cesium.Color;
  outlineWidth?: Cesium.Property | number;
  rotation?: Cesium.Property | number;
  stRotation?: Cesium.Property | number;
  granularity?: Cesium.Property | number;
  shadows?: Cesium.Property | Cesium.ShadowMode;
  distanceDisplayCondition?: Cesium.Property | Cesium.DistanceDisplayCondition;
  zIndex?: Cesium.Property | number;
  classificationType?: Cesium.Property | Cesium.ClassificationType;
}

export interface RectangleGraphicsCesiumEvents {
  onDefinitionChange?: () => void;
}

export interface RectangleGraphicsProps
  extends RectangleGraphicsCesiumProps,
    RectangleGraphicsCesiumEvents {}

const cesiumProps: (keyof RectangleGraphicsCesiumProps)[] = [
  "coordinates",
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
  "rotation",
  "stRotation",
  "granularity",
  "shadows",
  "distanceDisplayCondition",
  "zIndex",
];

const cesiumEventProps: EventkeyMap<Cesium.RectangleGraphics, RectangleGraphicsCesiumEvents> = {
  onDefinitionChange: "definitionChanged",
};

const RectangleGraphics = createCesiumComponent<
  Cesium.RectangleGraphics,
  RectangleGraphicsProps,
  {
    entity?: Cesium.Entity;
  }
>({
  name: "RectangleGraphics",
  create(context, props) {
    if (!context.entity) return;
    const element = new CesiumRectangleGraphics(props as any);
    context.entity.rectangle = element;
    return element;
  },
  destroy(element, context) {
    if (context.entity) {
      context.entity.rectangle = undefined as any;
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default RectangleGraphics;
