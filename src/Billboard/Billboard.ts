import { Billboard as CesiumBillboard, BillboardCollection } from "cesium";

import { createCesiumComponent, EventProps, PickCesiumProps } from "../core";

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

export type BillboardCesiumProps = PickCesiumProps<CesiumBillboard, typeof cesiumProps, "position">;

export type BillboardOtherProps = EventProps<{
  collection: BillboardCollection;
  id: string | undefined;
  primitive: CesiumBillboard;
}>;

export type BillboardProps = BillboardCesiumProps & BillboardOtherProps;

const cesiumProps = [
  "alignedAxis",
  "color",
  "disableDepthTestDistance",
  "distanceDisplayCondition",
  "eyeOffset",
  "height",
  "heightReference",
  "horizontalOrigin",
  "image",
  "pixelOffset",
  "splitDirection",
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
  "id",
] as const;

const Billboard = createCesiumComponent<CesiumBillboard, BillboardProps>({
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
