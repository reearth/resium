import { Color, Material as CesiumMaterial } from "cesium";
import type {
  Material,
  Cartesian3,
  DistanceDisplayCondition,
  Polyline as CesiumPolyline,
  PolylineCollection,
} from "cesium";

import type { EventProps, PickCesiumProps } from "../core";
import { createCesiumComponent } from "../core";

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

// Cesium's `PolylineCollection.remove` calls `Polyline._destroy`, which
// unconditionally destroys the polyline's current `material`. When the user
// passes their own `Material` instance via the `material` prop, Cesium destroys
// that user-owned instance on unmount. Under React StrictMode (mount → unmount
// → remount), the throwaway first mount destroys the shared material, and the
// real second mount then reuses an already-destroyed material, throwing
// "This object was destroyed, i.e., destroy() was called." (#602)
//
// resium creates the polyline but does not own the `Material` passed as a prop,
// so it must not let Cesium destroy it. Before removing the polyline we swap in
// a throwaway material so Cesium destroys that instead, leaving the user's
// material intact.
type PolylineState = { userMaterial: boolean };

const Polyline = createCesiumComponent<CesiumPolyline, PolylineProps, PolylineState>({
  name: "Polyline",
  create: (context, props) => {
    const element = context.polylineCollection?.add(props);
    if (!element) return undefined;
    return [element, { userMaterial: !!props.material }];
  },
  destroy(element, context, _wrapperRef, state) {
    if (context.polylineCollection && !context.polylineCollection.isDestroyed()) {
      // Detach the user-owned material so Cesium destroys a throwaway instead.
      if (state?.userMaterial) {
        const material = element.material;
        if (material && !material.isDestroyed()) {
          element.material = CesiumMaterial.fromType(CesiumMaterial.ColorType, {
            color: new Color(1.0, 1.0, 1.0, 1.0),
          });
        }
      }
      context.polylineCollection.remove(element);
    }
  },
  cesiumProps,
  useCommonEvent: true,
});

export default Polyline;
