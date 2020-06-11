import {
  Cartesian3,
  DistanceDisplayCondition,
  Color,
  HeightReference,
  HorizontalOrigin,
  Cartesian2,
  NearFarScalar,
  VerticalOrigin,
  Billboard as CesiumBillboard,
  BillboardCollection,
} from "cesium";

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
  alignAxis?: Cartesian3;
  color?: Color;
  disableDepthTestDistance?: number;
  distanceDisplayCondition?: DistanceDisplayCondition;
  height?: number;
  heightReference?: HeightReference;
  horizontalOrigin?: HorizontalOrigin;
  id?: any;
  image?: string;
  pixelOffset?: Cartesian2;
  pixelOffsetScaleByDistance?: NearFarScalar;
  position?: Cartesian3;
  rotation?: number;
  scale?: number;
  scaleByDistance?: NearFarScalar;
  show?: boolean;
  sizeInMeters?: boolean;
  translucencyByDistance?: NearFarScalar;
  verticalOrigin?: VerticalOrigin;
  width?: number;
}

export interface BillboardProps extends BillboardCesiumProps, EventProps<CesiumBillboard> {}

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
  CesiumBillboard,
  BillboardProps,
  {
    billboardCollection?: BillboardCollection;
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
