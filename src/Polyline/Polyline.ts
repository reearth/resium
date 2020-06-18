import { Material, Cartesian3, DistanceDisplayCondition, Polyline as CesiumPolyline } from "cesium";

import { createCesiumComponent } from "../core/component";
import { EventProps } from "../core/EventManager";

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

export interface PolylineCesiumProps {
  distanceDisplayCondition?: DistanceDisplayCondition;
  id?: any;
  loop?: boolean;
  material?: Material;
  positions?: Cartesian3[];
  show?: boolean;
  width?: number;
}

export interface PolylineProps extends PolylineCesiumProps, EventProps<CesiumPolyline> {}

const cesiumProps: (keyof PolylineCesiumProps)[] = [
  "distanceDisplayCondition",
  "id",
  "loop",
  "material",
  "positions",
  "show",
  "width",
];

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
