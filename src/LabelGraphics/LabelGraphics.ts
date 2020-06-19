import { LabelGraphics as CesiumLabelGraphics } from "cesium";

import {
  createCesiumComponent,
  PickCesiumProps,
  UnusedCesiumProps,
  AssertNever,
  Merge,
  ValueOf,
} from "../core";

/*
@summary
`LabelGraphics` is a label visualization for the entity.
*/

/*
@scope
LabelGraphics is only inside [Entity](/components/Entity) components,
and can not be used more than once for each entity.
*/

export type LabelGraphicsCesiumProps = PickCesiumProps<
  Merge<CesiumLabelGraphics, CesiumLabelGraphics.ConstructorOptions>,
  typeof cesiumProps
>;

export type LabelGraphicsCesiumEvents = {
  onDefinitionChange?: () => void;
};

export type LabelGraphicsProps = LabelGraphicsCesiumProps & LabelGraphicsCesiumEvents;

const cesiumProps = [
  "text",
  "font",
  "style",
  "fillColor",
  "outlineColor",
  "outlineWidth",
  "show",
  "showBackground",
  "backgroundColor",
  "backgroundPadding",
  "scale",
  "horizontalOrigin",
  "verticalOrigin",
  "eyeOffset",
  "pixelOffset",
  "translucencyByDistance",
  "pixelOffsetScaleByDistance",
  "scaleByDistance",
  "heightReference",
  "distanceDisplayCondition",
  "disableDepthTestDistance",
] as const;

const cesiumEventProps = {
  onDefinitionChange: "definitionChanged",
} as const;

const LabelGraphics = createCesiumComponent<CesiumLabelGraphics, LabelGraphicsProps>({
  name: "LabelGraphics",
  create(context, props) {
    if (!context.entity) return;
    const element = new CesiumLabelGraphics(props);
    context.entity.label = element;
    return element;
  },
  destroy(_element, context) {
    if (context.entity) {
      context.entity.label = undefined;
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default LabelGraphics;

// Unused prop check
type IgnoredProps = never;
type UnusedProps = UnusedCesiumProps<
  Merge<CesiumLabelGraphics, CesiumLabelGraphics.ConstructorOptions>,
  keyof LabelGraphicsProps | ValueOf<typeof cesiumEventProps>
>;
type AssertUnusedProps = AssertNever<Exclude<UnusedProps, IgnoredProps>>;
