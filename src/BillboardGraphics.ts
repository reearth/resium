import Cesium from "cesium";

import createCesiumComponent, { EventkeyMap } from "./core/CesiumComponent";

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

export interface BillboardGraphicsContext {
  entity?: Cesium.Entity;
}

const cesiumProps: Array<keyof BillboardGraphicsCesiumProps> = [
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

const cesiumEventProps: EventkeyMap<
  Cesium.BillboardGraphics,
  keyof BillboardGraphicsCesiumEvents
> = {
  definitionChanged: "onDefinitionChange",
};

const BillboardGraphics = createCesiumComponent<
  Cesium.BillboardGraphics,
  BillboardGraphicsProps,
  BillboardGraphicsContext
>({
  name: "BillboardGraphics",
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

export default BillboardGraphics;
