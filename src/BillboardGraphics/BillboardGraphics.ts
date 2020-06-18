import { BillboardGraphics as CesiumBillboardGraphics } from "cesium";

import {
  createCesiumComponent,
  EventkeyMap,
  PickCesiumProps,
  UnusedCesiumProps,
  AssertNever,
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
  CesiumBillboardGraphics | CesiumBillboardGraphics.ConstructorOptions,
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

const cesiumEventProps: EventkeyMap<CesiumBillboardGraphics, BillboardGraphicsCesiumEvents> = {
  onDefinitionChange: "definitionChanged",
};

// Unused prop check
type IgnoredProps = never;
type UnusedProps = UnusedCesiumProps<
  CesiumBillboardGraphics | CesiumBillboardGraphics.ConstructorOptions,
  typeof cesiumProps | typeof cesiumEventProps[keyof typeof cesiumEventProps][]
>;
type AssertUnusedProps = AssertNever<Exclude<UnusedProps, IgnoredProps>>;

const BillboardGraphics = createCesiumComponent<CesiumBillboardGraphics, BillboardGraphicsProps>({
  name: "BillboardGraphics",
  create(context, props) {
    if (!context.entity) return;
    const element = new CesiumBillboardGraphics({
      image: props.image as any, // WORKAROUND: ImageData type missing
      show: props.show,
      scale: props.scale,
      horizontalOrigin: props.horizontalOrigin,
      verticalOrigin: props.verticalOrigin,
      eyeOffset: props.eyeOffset,
      pixelOffset: props.pixelOffset,
      rotation: props.rotation,
      alignedAxis: props.alignedAxis,
      width: props.width,
      height: props.height,
      color: props.color,
      scaleByDistance: props.scaleByDistance,
      translucencyByDistance: props.translucencyByDistance,
      pixelOffsetScaleByDistance: props.pixelOffsetScaleByDistance,
      imageSubRegion: props.imageSubRegion,
      sizeInMeters: props.sizeInMeters,
      heightReference: props.heightReference,
      distanceDisplayCondition: props.distanceDisplayCondition,
      disableDepthTestDistance: props.disableDepthTestDistance,
    });
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
