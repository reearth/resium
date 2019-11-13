import { createCesiumComponent } from "../core/component";
import { EventProps } from "../core/EventManager";

/*
@summary
`PointPrimitive` is a point primitive in the `PointPrimitiveCollection`.

Primitive is a low layer API for geographical visualization.
[Entity](/components/entity) is more recommended unless performance issues.
*/

/*
@scope
Only inside [PointPrimitiveCollection](/components/PointPrimitiveCollection) component.
A point object will be attached to the parent PointPrimitiveCollection.
*/

export interface PointPrimitiveCesiumProps {
  color?: Cesium.Color;
  disableDepthTestDistance?: number;
  distanceDisplayCondition?: Cesium.DistanceDisplayCondition;
  id?: any;
  outlineColor?: Cesium.Color;
  outlineWidth?: number;
  pixelSize?: number;
  position?: Cesium.Cartesian3;
  scaleByDistance?: Cesium.NearFarScalar;
  show?: boolean;
  translucencyByDistance?: Cesium.NearFarScalar;
}

export interface PointPrimitiveProps
  extends PointPrimitiveCesiumProps,
    EventProps<Cesium.PointPrimitive> {}

const cesiumProps: (keyof PointPrimitiveCesiumProps)[] = [
  "color",
  "disableDepthTestDistance",
  "distanceDisplayCondition",
  "id",
  "outlineColor",
  "outlineWidth",
  "pixelSize",
  "position",
  "scaleByDistance",
  "show",
  "translucencyByDistance",
];

const PointPrimitive = createCesiumComponent<
  Cesium.PointPrimitive,
  PointPrimitiveProps,
  {
    pointPrimitiveCollection?: Cesium.PointPrimitiveCollection;
  }
>({
  name: "PointPrimitive",
  create: (context, props) => context.pointPrimitiveCollection?.add(props),
  destroy(element, context) {
    if (context.pointPrimitiveCollection && !context.pointPrimitiveCollection.isDestroyed()) {
      context.pointPrimitiveCollection.remove(element);
    }
  },
  cesiumProps,
  useCommonEvent: true,
});

export default PointPrimitive;
