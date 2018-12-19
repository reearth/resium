import Cesium from "cesium";

import createCesiumComponent from "./core/CesiumComponent";
import EventManager, { EventProps } from "./core/EventManager";

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

export interface BillboardContext {
  billboardCollection?: Cesium.BillboardCollection;
  __RESIUM_EVENT_MANAGER?: EventManager;
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
    if (context.billboardCollection) {
      context.billboardCollection.add(element);
    }
  },
  unmount(element, context) {
    if (context.__RESIUM_EVENT_MANAGER) {
      context.__RESIUM_EVENT_MANAGER.clearEvents(element);
    }
    if (context.billboardCollection && !context.billboardCollection.isDestroyed()) {
      context.billboardCollection.remove(element);
    }
  },
  update(element, props, prevProps, context) {
    if (context.__RESIUM_EVENT_MANAGER) {
      context.__RESIUM_EVENT_MANAGER.setEvents(element, props);
    }
  },
  cesiumProps,
  setCesiumPropsAfterCreate: true,
});

export default Billboard;
