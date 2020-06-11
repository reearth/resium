import {
  DistanceDisplayCondition,
  Cartesian3,
  Color,
  NearFarScalar,
  PointPrimitive as CesiumPointPrimitive,
  PointPrimitiveCollection,
} from "cesium";

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
  color?: Color;
  disableDepthTestDistance?: number;
  distanceDisplayCondition?: DistanceDisplayCondition;
  id?: any;
  outlineColor?: Color;
  outlineWidth?: number;
  pixelSize?: number;
  position?: Cartesian3;
  scaleByDistance?: NearFarScalar;
  show?: boolean;
  translucencyByDistance?: NearFarScalar;
}

export interface PointPrimitiveProps
  extends PointPrimitiveCesiumProps,
    EventProps<CesiumPointPrimitive> {}

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
  CesiumPointPrimitive,
  PointPrimitiveProps,
  {
    pointPrimitiveCollection?: PointPrimitiveCollection;
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
