import { BillboardGraphics as CesiumBillboardGraphics } from "cesium";

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
`BillboardGraphics` is a billboard visualization for the entity.
*/

/*
@scope
BillboardGraphics is only inside [Entity](/components/Entity) components,
and can not be used more than once for each entity.
*/

export type BillboardGraphicsCesiumProps = PickCesiumProps<
  Merge<CesiumBillboardGraphics, CesiumBillboardGraphics.ConstructorOptions>,
  typeof cesiumProps
>;

export type BillboardGraphicsCesiumEvents = {
  onDefinitionChange?: () => void;
};

export type BillboardGraphicsProps = BillboardGraphicsCesiumProps & BillboardGraphicsCesiumEvents;

const cesiumProps = [
  "image",
  "show",
  "scale",
  "horizontalOrigin",
  "verticalOrigin",
  "eyeOffset",
  "pixelOffset",
  "rotation",
  "alignedAxis",
  "width",
  "height",
  "color",
  "scaleByDistance",
  "translucencyByDistance",
  "pixelOffsetScaleByDistance",
  "imageSubRegion",
  "sizeInMeters",
  "heightReference",
  "distanceDisplayCondition",
  "disableDepthTestDistance",
] as const;

const cesiumEventProps = {
  onDefinitionChange: "definitionChanged",
} as const;

const BillboardGraphics = createCesiumComponent<CesiumBillboardGraphics, BillboardGraphicsProps>({
  name: "BillboardGraphics",
  create(context, props) {
    if (!context.entity) return;
    const element = new CesiumBillboardGraphics(props);
    context.entity.billboard = element;
    return element;
  },
  destroy(_element, context) {
    if (context.entity) {
      context.entity.billboard = undefined;
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default BillboardGraphics;

// Unused prop check
type IgnoredProps = never;
type UnusedProps = UnusedCesiumProps<
  Merge<CesiumBillboardGraphics, CesiumBillboardGraphics.ConstructorOptions>,
  keyof BillboardGraphicsProps | ValueOf<typeof cesiumEventProps>
>;
type AssertUnusedProps = AssertNever<Exclude<UnusedProps, IgnoredProps>>;
