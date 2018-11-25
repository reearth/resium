import Cesium from "cesium";

import createCesiumComponent from "./core/CesiumComponent";
import { EventkeyMap } from "./core/CesiumComponent";

export interface BillbaordGraphicsCesiumProps {
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

export interface BillbaordGraphicsProps extends BillbaordGraphicsCesiumProps {
  onDefinitionChange?: () => void;
}

export interface BillbaordGraphicsContext {
  entity?: Cesium.Entity;
}

const cesiumProps: Array<keyof BillbaordGraphicsCesiumProps> = [
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

const cesiumEventProps: EventkeyMap<Cesium.BillboardGraphics, keyof BillbaordGraphicsProps> = {
  definitionChanged: "onDefinitionChange",
};

const BillbaordGraphics = createCesiumComponent<
  Cesium.BillboardGraphics,
  BillbaordGraphicsProps,
  BillbaordGraphicsContext
>({
  name: "BillbaordGraphics",
  create(cprops) {
    // workaround: type of "image" prop
    return new Cesium.BillboardGraphics(cprops as any);
  },
  mount(element, context) {
    if (context.entity) {
      context.entity.billboard = element;
    }
  },
  unmount(element, context) {
    if (context.entity) {
      context.entity.billboard = undefined as any;
    }
  },
  cesiumProps,
  cesiumEventProps,
});

export default BillbaordGraphics;
