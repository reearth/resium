import { Material, Cartesian3, DistanceDisplayCondition, Polyline as CesiumPolyline } from "cesium";

import {
  createCesiumComponent,
  EventProps,
  PickCesiumProps,
  UnusedCesiumProps,
  AssertNever,
} from "../core";

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

export type PolylineProps = PolylineCesiumProps & EventProps<CesiumPolyline>;

const cesiumProps = [
  "distanceDisplayCondition",
  "id",
  "loop",
  "material",
  "positions",
  "show",
  "width",
] as const;

// Unused prop check
type IgnoredProps = never;
type UnusedProps = UnusedCesiumProps<CesiumPolyline, typeof cesiumProps>;
type AssertUnusedProps = AssertNever<Exclude<UnusedProps, IgnoredProps>>;

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
