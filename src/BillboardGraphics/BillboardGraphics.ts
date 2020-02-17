import { BillboardGraphics as CesiumBillboardGraphics } from "cesium";

import { createCesiumComponent, EventkeyMap } from "../core/component";

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
  image?: Cesium.Property | ImageData | string | HTMLCanvasElement;
  show?: Cesium.Property | boolean;
  scale?: Cesium.Property | number;
  horizontalOrigin?: Cesium.Property | Cesium.HorizontalOrigin;
  verticalOrigin?: Cesium.Property | Cesium.VerticalOrigin;
  eyeOffset?: Cesium.Property | Cesium.Cartesian3;
  pixelOffset?: Cesium.Property | Cesium.Cartesian2;
  rotation?: Cesium.Property | number;
  alignedAxis?: Cesium.Property | Cesium.Cartesian3;
  width?: Cesium.Property | number;
  height?: Cesium.Property | number;
  color?: Cesium.Property | Cesium.Color;
  scaleByDistance?: Cesium.Property | Cesium.NearFarScalar;
  translucencyByDistance?: Cesium.Property | Cesium.NearFarScalar;
  pixelOffsetScaleByDistance?: Cesium.Property | Cesium.NearFarScalar;
  imageSubRegion?: Cesium.Property | Cesium.BoundingRectangle;
  sizeInMeters?: Cesium.Property | boolean;
  heightReference?: Cesium.Property | Cesium.HeightReference;
  distanceDisplayCondition?: Cesium.Property | Cesium.DistanceDisplayCondition;
  disableDepthTestDistance?: Cesium.Property | number;
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

const cesiumEventProps: EventkeyMap<Cesium.BillboardGraphics, BillboardGraphicsCesiumEvents> = {
  onDefinitionChange: "definitionChanged",
};

const BillboardGraphics = createCesiumComponent<
  Cesium.BillboardGraphics,
  BillboardGraphicsProps,
  {
    entity?: Cesium.Entity;
  }
>({
  name: "BillboardGraphics",
  create(context, props) {
    if (!context.entity) return;
    const element = new CesiumBillboardGraphics({
      image: props.image,
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
      sizeInMeters: props.sizeInMeters, // WORKAROUND
      heightReference: props.heightReference,
      distanceDisplayCondition: props.distanceDisplayCondition,
      disableDepthTestDistance: props.disableDepthTestDistance,
    } as any);
    context.entity.billboard = element;
    return element;
  },
  destroy(element, context) {
    if (context.entity) {
      context.entity.billboard = undefined as any; // WORKAROUND
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default BillboardGraphics;
