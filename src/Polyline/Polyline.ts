import {
  Material,
  Cartesian3,
  DistanceDisplayCondition,
  Polyline as CesiumPolyline,
  PolylineCollection,
} from "cesium";

import { createCesiumComponent, EventProps, PickCesiumProps } from "../core";

/*
@summary
`Polyline` is a polyline primitive in the `PolylineCollection`.

Primitive is a low layer API for geographical visualization.
[Entity](/components/entity) is more recommended unless performance issues.
*/

/*
@scope
Only inside [PolylineCollection](/components/PolylineCollection) component.
A polyline object will be attached to the parent PolylineCollection.
*/

export type PolylineCesiumProps = PickCesiumProps<CesiumPolyline, typeof cesiumProps> & {
  distanceDisplayCondition?: DistanceDisplayCondition;
  id?: any;
  loop?: boolean;
  material?: Material;
  positions?: Cartesian3[];
  show?: boolean;
  width?: number;
};

export type PolylineOtherProps = EventProps<{
  collection: PolylineCollection;
  id: string | undefined;
  primitive: CesiumPolyline;
}>;

export type PolylineProps = PolylineCesiumProps & PolylineOtherProps;

const cesiumProps = [
  "distanceDisplayCondition",
  "id",
  "loop",
  "material",
  "positions",
  "show",
  "width",
] as const;

const Polyline = createCesiumComponent<CesiumPolyline, PolylineProps>({
  name: "Polyline",
  create: (context, props) => context.polylineCollection?.add(props),
  destroy(element, context) {
    if (context.polylineCollection && !context.polylineCollection.isDestroyed()) {
      context.polylineCollection.remove(element);
    }
  },
  cesiumProps,
  useCommonEvent: true,
});

export default Polyline;
