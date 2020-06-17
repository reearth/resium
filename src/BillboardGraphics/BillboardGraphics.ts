import {
  BillboardGraphics as CesiumBillboardGraphics,
  VerticalOrigin,
  HorizontalOrigin,
  Cartesian3,
  Property,
  Cartesian2,
  Color,
  NearFarScalar,
  BoundingRectangle,
  HeightReference,
  DistanceDisplayCondition,
} from "cesium";

import { createCesiumComponent, EventkeyMap } from "../core";

/*
@summary
`BillboardGraphics` is a billboard visualization for the entity.
*/

/*
@scope
BillboardGraphics is only inside [Entity](/components/Entity) components,
and can not be used more than once for each entity.
*/

export interface BillboardGraphicsCesiumProps {
  image?: Property | ImageData | string | HTMLCanvasElement;
  show?: Property | boolean;
  scale?: Property | number;
  horizontalOrigin?: Property | HorizontalOrigin;
  verticalOrigin?: Property | VerticalOrigin;
  eyeOffset?: Property | Cartesian3;
  pixelOffset?: Property | Cartesian2;
  rotation?: Property | number;
  alignedAxis?: Property | Cartesian3;
  width?: Property | number;
  height?: Property | number;
  color?: Property | Color;
  scaleByDistance?: Property | NearFarScalar;
  translucencyByDistance?: Property | NearFarScalar;
  pixelOffsetScaleByDistance?: Property | NearFarScalar;
  imageSubRegion?: Property | BoundingRectangle;
  sizeInMeters?: Property | boolean;
  heightReference?: Property | HeightReference;
  distanceDisplayCondition?: Property | DistanceDisplayCondition;
  disableDepthTestDistance?: Property | number;
}

export interface BillboardGraphicsCesiumEvents {
  onDefinitionChange?: () => void;
}

export interface BillboardGraphicsProps
  extends BillboardGraphicsCesiumProps,
    BillboardGraphicsCesiumEvents {}

const cesiumProps: (keyof BillboardGraphicsCesiumProps)[] = [
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
];

const cesiumEventProps: EventkeyMap<CesiumBillboardGraphics, BillboardGraphicsCesiumEvents> = {
  onDefinitionChange: "definitionChanged",
};

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
