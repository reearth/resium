import {
  Color,
  Cartesian2,
  DistanceDisplayCondition,
  Cartesian3,
  HeightReference,
  HorizontalOrigin,
  NearFarScalar,
  LabelStyle,
  VerticalOrigin,
  Label as CesiumLabel,
} from "cesium";

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
  backgroundColor?: Color;
  backgroundPadding?: Cartesian2;
  disableDepthTestDistance?: number;
  distanceDisplayCondition?: DistanceDisplayCondition;
  eyeOffset?: Cartesian3;
  fillColor?: Color;
  font?: string;
  heightReference?: HeightReference;
  horizontalOrigin?: HorizontalOrigin;
  id?: any;
  outlineColor?: Color;
  outlineWidth?: number;
  pixelOffset?: Cartesian2;
  pixelOffsetScaleByDistance?: NearFarScalar;
  position?: Cartesian3;
  scale?: number;
  scaleByDistance?: NearFarScalar;
  show?: boolean;
  showBackground?: boolean;
  style?: LabelStyle;
  text?: string;
  translucencyByDistance?: NearFarScalar;
  verticalOrigin?: VerticalOrigin;
}

export interface LabelProps extends LabelCesiumProps, EventProps<CesiumLabel> {}

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

const Label = createCesiumComponent<CesiumLabel, LabelProps>({
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
