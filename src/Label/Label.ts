import { createCesiumComponent } from "../core/component";
import { EventProps } from "../core/EventManager";

/*
@summary
`Lavbel` is a label primitive in the `LabelCollection`.

Primitive is a low layer API for geographical visualization.
[Entity](/components/entity) is more recommended unless performance issues.
*/

/*
@scope
Only inside [LabelCollection](/components/LabelCollection) component.
A label object will be attached to the parent LabelCollection.
*/

export interface LabelCesiumProps {
  backgroundColor?: Cesium.Color;
  backgroundPadding?: Cesium.Cartesian2;
  disableDepthTestDistance?: number;
  distanceDisplayCondition?: Cesium.DistanceDisplayCondition;
  eyeOffset?: Cesium.Cartesian3;
  fillColor?: Cesium.Color;
  font?: string;
  heightReference?: Cesium.HeightReference;
  horizontalOrigin?: Cesium.HorizontalOrigin;
  id?: any;
  outlineColor?: Cesium.Color;
  outlineWidth?: number;
  pixelOffset?: Cesium.Cartesian2;
  pixelOffsetScaleByDistance?: Cesium.NearFarScalar;
  position?: Cesium.Cartesian3;
  scale?: number;
  scaleByDistance?: Cesium.NearFarScalar;
  show?: boolean;
  showBackground?: boolean;
  style?: Cesium.LabelStyle;
  text?: string;
  translucencyByDistance?: Cesium.NearFarScalar;
  verticalOrigin?: Cesium.VerticalOrigin;
}

export interface LabelProps extends LabelCesiumProps, EventProps<Cesium.Label> {}

const cesiumProps: (keyof LabelCesiumProps)[] = [
  "backgroundColor",
  "backgroundPadding",
  "disableDepthTestDistance",
  "distanceDisplayCondition",
  "eyeOffset",
  "fillColor",
  "font",
  "heightReference",
  "horizontalOrigin",
  "id",
  "outlineColor",
  "outlineWidth",
  "pixelOffset",
  "pixelOffsetScaleByDistance",
  "position",
  "scale",
  "scaleByDistance",
  "show",
  "showBackground",
  "style",
  "text",
  "translucencyByDistance",
  "verticalOrigin",
];

const Label = createCesiumComponent<
  Cesium.Label,
  LabelProps,
  {
    labelCollection?: Cesium.LabelCollection;
  }
>({
  name: "Label",
  create: (context, props) => context.labelCollection?.add(props),
  destroy(element, context) {
    if (context.labelCollection && !context.labelCollection.isDestroyed()) {
      context.labelCollection.remove(element);
    }
  },
  cesiumProps,
  useCommonEvent: true,
});

export default Label;
