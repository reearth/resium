import { Label as CesiumLabel, LabelCollection } from "cesium";

import { createCesiumComponent, EventProps, PickCesiumProps } from "../core";

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

export type LabelCesiumProps = PickCesiumProps<CesiumLabel, typeof cesiumProps, "position">;

export type LabelOtherProps = EventProps<{
  collection: LabelCollection;
  primitive: CesiumLabel;
}>;

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
