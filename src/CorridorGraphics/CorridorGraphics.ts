import { CorridorGraphics as CesiumCorridorGraphics } from "cesium";

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
  positions?: Cesium.Property | Cesium.Cartesian3[];
  width?: Cesium.Property | number;
  cornerType?: Cesium.Property | Cesium.CornerType;
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
  granularity?: Cesium.Property | number;
  shadows?: Cesium.Property | boolean;
  distanceDisplayCondition?: Cesium.Property | Cesium.DistanceDisplayCondition;
  zIndex?: Cesium.ConstantProperty | number;
  classificationType?: Cesium.Property | Cesium.ClassificationType;
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

const cesiumEventProps: EventkeyMap<Cesium.CorridorGraphics, CorridorCesiumEvents> = {
  onDefinitionChange: "definitionChanged",
};

const CorridorGraphics = createCesiumComponent<
  Cesium.CorridorGraphics,
  CorridorGraphicsProps,
  {
    entity?: Cesium.Entity;
  }
>({
  name: "CorridorGraphics",
  create(context, props) {
    if (!context.entity) return;
    const element = new CesiumCorridorGraphics(props as any); // WORKAROUND
    if (props.classificationType) {
      (element as any).classificationType = props.classificationType; // WORKAROUND
    }
    context.entity.corridor = element;
    return element;
  },
  destroy(element, context) {
    if (context.entity) {
      context.entity.corridor = undefined as any;
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default CorridorGraphics;
