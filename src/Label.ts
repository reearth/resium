import Cesium from "cesium";

import createCesiumComponent from "./core/CesiumComponent";
import EventManager, { EventProps } from "./core/EventManager";

/*
@summary
`Lavbel` is a label primitive in the `LabelCollection`.

Primitive is a low layer API for geographical visualization.
[Entity](/components/entity) is more recommended unless performance issues.
*/

/*
@scope
Only inside [LabelCollection](/components/LabelCollection) component.
A label object will be attached to the parent LabelCollection.
*/

export interface LabelCesiumProps {
  backgroundColor?: Cesium.Color;
  backgroundPadding?: Cesium.Cartesian2;
  disableDepthTestDistance?: number;
  distanceDisplayCondition?: Cesium.DistanceDisplayCondition;
  eyeOffset?: Cesium.Cartesian3;
  fillColor?: Cesium.Color;
  font?: string;
  heightReference?: Cesium.HeightReference;
  horizontalOrigin?: Cesium.HorizontalOrigin;
  id?: any;
  outlineColor?: Cesium.Color;
  outlineWidth?: number;
  pixelOffset?: Cesium.Cartesian2;
  pixelOffsetScaleByDistance?: Cesium.NearFarScalar;
  position?: Cesium.Cartesian3;
  scale?: number;
  scaleByDistance?: Cesium.NearFarScalar;
  show?: boolean;
  showBackground?: boolean;
  style?: Cesium.LabelStyle;
  text?: string;
  translucencyByDistance?: Cesium.NearFarScalar;
  verticalOrigin?: Cesium.VerticalOrigin;
}

export interface LabelProps extends LabelCesiumProps, EventProps<Cesium.Label> {}

export interface LabelContext {
  labelCollection?: Cesium.LabelCollection;
  __RESIUM_EVENT_MANAGER?: EventManager;
}

const cesiumProps: Array<keyof LabelCesiumProps> = [
  "backgroundColor",
  "backgroundPadding",
  "disableDepthTestDistance",
  "distanceDisplayCondition",
  "eyeOffset",
  "fillColor",
  "font",
  "heightReference",
  "horizontalOrigin",
  "id",
  "outlineColor",
  "outlineWidth",
  "pixelOffset",
  "pixelOffsetScaleByDistance",
  "position",
  "scale",
  "scaleByDistance",
  "show",
  "showBackground",
  "style",
  "text",
  "translucencyByDistance",
  "verticalOrigin",
];

const Label = createCesiumComponent<Cesium.Label, LabelProps, LabelContext>({
  name: "Label",
  create(cprops, props, context) {
    return new (Cesium.Label as any)(cprops, context.labelCollection);
  },
  mount(element, context, props) {
    if (context.__RESIUM_EVENT_MANAGER) {
      context.__RESIUM_EVENT_MANAGER.setEvents(element, props);
    }
    if (context.labelCollection) {
      context.labelCollection.add(element);
    }
  },
  unmount(element, context) {
    if (context.__RESIUM_EVENT_MANAGER) {
      context.__RESIUM_EVENT_MANAGER.clearEvents(element);
    }
    if (context.labelCollection && !context.labelCollection.isDestroyed()) {
      context.labelCollection.remove(element);
    }
  },
  update(element, props, prevProps, context) {
    if (context.__RESIUM_EVENT_MANAGER) {
      context.__RESIUM_EVENT_MANAGER.setEvents(element, props);
    }
  },
  cesiumProps,
});

export default Label;
