import { PolygonGraphics as CesiumPolygonGraphics } from "cesium";

import { createCesiumComponent, EventkeyMap } from "../core/component";

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
  hierarchy?: Cesium.Property | Cesium.PolygonHierarchy | Cesium.Cartesian3[];
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
  stRotation?: Cesium.Property | number;
  granularity?: Cesium.Property | number;
  perPositionHeight?: Cesium.Property | boolean;
  closeTop?: boolean;
  closeBottom?: boolean;
  shadows?: Cesium.Property | Cesium.ShadowMode;
  distanceDisplayCondition?: Cesium.Property | Cesium.DistanceDisplayCondition;
  zIndex?: Cesium.Property | number;
  classificationType?: Cesium.Property | Cesium.ClassificationType;
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

const cesiumEventProps: EventkeyMap<Cesium.PolygonGraphics, PolygonGraphicsCesiumEvents> = {
  onDefinitionChange: "definitionChanged",
};

const PolygonGraphics = createCesiumComponent<
  Cesium.PolygonGraphics,
  PolygonGraphicsProps,
  {
    entity?: Cesium.Entity;
  }
>({
  name: "PolygonGraphics",
  create(context, props) {
    if (!context.entity) return;
    const element = new CesiumPolygonGraphics(props as any); // WORKAROUND
    context.entity.polygon = element;
    return element;
  },
  destroy(element, context) {
    if (context.entity) {
      context.entity.polygon = undefined as any;
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default PolygonGraphics;
