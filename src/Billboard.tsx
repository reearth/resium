import Cesium from "cesium";

import createCesiumComponent from "./core/CesiumComponent";

export interface BillboardCesiumProps {
  alignAxis?: Cesium.Cartesian3;
  color?: Cesium.Color;
  disableDepthTestDistance?: number;
  distanceDisplayCondition?: Cesium.DistanceDisplayCondition;
  height?: number;
  heightReference?: Cesium.HeightReference;
  horizontalOrigin?: Cesium.HorizontalOrigin;
  id?: any;
  image?: string;
  pixelOffset?: Cesium.Cartesian2;
  pixelOffsetScaleByDistance?: Cesium.NearFarScalar;
  position?: Cesium.Cartesian3;
  rotation?: number;
  scale?: number;
  scaleByDistance?: Cesium.NearFarScalar;
  show?: boolean;
  sizeInMeters?: boolean;
  translucencyByDistance?: Cesium.NearFarScalar;
  verticalOrigin?: Cesium.VerticalOrigin;
  width?: number;
}

/* tslint:disable-next-line: no-empty-interface */
export interface BillboardProps extends BillboardCesiumProps {}

export interface BillboardContext {
  billboardCollection: Cesium.BillboardCollection;
}

const cesiumProps: Array<keyof BillboardCesiumProps> = [
  "alignAxis",
  "color",
  "disableDepthTestDistance",
  "distanceDisplayCondition",
  "height",
  "heightReference",
  "horizontalOrigin",
  "id",
  "image",
  "pixelOffset",
  "pixelOffsetScaleByDistance",
  "position",
  "rotation",
  "scale",
  "scaleByDistance",
  "show",
  "sizeInMeters",
  "translucencyByDistance",
  "verticalOrigin",
  "width",
];

const Billboard = createCesiumComponent<Cesium.Billboard, BillboardProps, BillboardContext>({
  name: "Billboard",
  create(cprops, props, context) {
    return new (Cesium.Billboard as any)(cprops, context.billboardCollection);
  },
  mount(element, context) {
    context.billboardCollection.add(element);
  },
  unmount(element, context) {
    if (!context.billboardCollection.isDestroyed()) {
      context.billboardCollection.remove(element);
    }
  },
  cesiumProps,
  setCesiumPropsAfterCreate: true,
});

export default Billboard;
