import { createCesiumComponent } from "../core/component";
import { EventProps } from "../core/EventManager";

/*
@summary
`Billboard` is a billboard primitive in the `BillboardCollection`.

Primitive is a low layer API for geographical visualization.
[Entity](/components/entity) is more recommended unless performance issues.
*/

/*
@scope
Only inside [BillboardCollection](/components/BillboardCollection) components.
A billboard object will be attached to the parent BillboardCollection.
*/

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

export interface BillboardProps extends BillboardCesiumProps, EventProps<Cesium.Billboard> {}

const cesiumProps: (keyof BillboardCesiumProps)[] = [
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

const Billboard = createCesiumComponent<
  Cesium.Billboard,
  BillboardProps,
  {
    billboardCollection?: Cesium.BillboardCollection;
  }
>({
  name: "Billboard",
  create(context, props) {
    return context.billboardCollection?.add(props);
  },
  destroy(element, context) {
    if (context.billboardCollection && !context.billboardCollection.isDestroyed()) {
      context.billboardCollection.remove(element);
    }
  },
  cesiumProps,
  useCommonEvent: true,
});

export default Billboard;
