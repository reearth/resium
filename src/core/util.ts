import { Polyline, DistanceDisplayCondition } from "cesium";

export const polylineEquals = (a: any, b: any) =>
  !!a &&
  !!b &&
  a instanceof Polyline &&
  b instanceof Polyline &&
  a.show === b.show &&
  a.width === b.width &&
  a.loop === b.loop &&
  a.material === b.material &&
  a.positions === b.positions &&
  a.id === b.id &&
  DistanceDisplayCondition.equals(
    (a as any).distanceDisplayCondition,
    (b as any).distanceDisplayCondition,
  );

export const pickedObjectEquals = (picked: any, element: any) =>
  !!picked &&
  (picked === element ||
    (!!picked.id && picked.id === element) ||
    (!!picked.primitive &&
      (picked.primitive === element ||
        (!!picked.primitive.equals && picked.primitive.equals(element)) ||
        polylineEquals(picked.primitive, element))));
