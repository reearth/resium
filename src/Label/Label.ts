import { Label as CesiumLabel } from "cesium";

import {
  createCesiumComponent,
  EventProps,
  PickCesiumProps,
  UnusedCesiumProps,
  AssertNever,
} from "../core";

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

export type LabelCesiumProps = PickCesiumProps<CesiumLabel, typeof cesiumProps>;

export type LabelOtherProps = EventProps<CesiumLabel>;

export type LabelProps = LabelCesiumProps & LabelOtherProps;

const cesiumProps = [
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
] as const;

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

// Unused prop check
// totalScale: for read only
type IgnoredProps = "totalScale";
type UnusedProps = UnusedCesiumProps<CesiumLabel, keyof LabelProps>;
type AssertUnusedProps = AssertNever<Exclude<UnusedProps, IgnoredProps>>;
