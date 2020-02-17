import { EllipseGraphics as CesiumEllipseGraphics } from "cesium";

import { createCesiumComponent, EventkeyMap } from "../core/component";

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
  semiMajorAxis?: Cesium.Property | number;
  semiMinorAxis?: Cesium.Property | number;
  height?: Cesium.Property | number;
  heightReference?: Cesium.Property | Cesium.HeightReference;
  extrudedHeight?: Cesium.Property | number;
  show?: Cesium.Property | boolean;
  fill?: Cesium.Property | boolean;
  material?: Cesium.MaterialProperty | Cesium.Color | string;
  outline?: Cesium.Property | boolean;
  outlineColor?: Cesium.Property | Cesium.Color;
  outlineWidth?: Cesium.Property | number;
  numberOfVerticalLines?: Cesium.Property | number;
  rotation?: Cesium.Property | number;
  stRotation?: Cesium.Property | number;
  granularity?: Cesium.Property | number;
  shadows?: Cesium.Property | Cesium.ShadowMode;
  distanceDisplayCondition?: Cesium.Property | Cesium.DistanceDisplayCondition;
  zIndex?: Cesium.Property | number;
  classificationType?: Cesium.Property | Cesium.ClassificationType;
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

const cesiumEventProps: EventkeyMap<Cesium.EllipseGraphics, EllipseGraphicsCesiumEvents> = {
  onDefinitionChange: "definitionChanged",
};

const EllipseGraphics = createCesiumComponent<
  Cesium.EllipseGraphics,
  EllipseGraphicsProps,
  {
    entity?: Cesium.Entity;
  }
>({
  name: "EllipseGraphics",
  create(context, props) {
    if (!context.entity) return;
    // WORKAROUND
    const element = new CesiumEllipseGraphics(props as any); // WORKAROUND
    if (props.classificationType) {
      // WORKAROUND: classificationType field is missing
      (element as any).classificationType = props.classificationType;
    }
    context.entity.ellipse = element;
    return element;
  },
  destroy(element, context) {
    if (context.entity) {
      context.entity.ellipse = undefined as any;
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default EllipseGraphics;
