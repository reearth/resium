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
    (a as any).distanceDisplayCondition, // WORKAROUND
    (b as any).distanceDisplayCondition, // WORKAROUND
  );

export const pickedObjectEquals = (picked: any, element: any) =>
  !!picked &&
  (picked === element ||
    (!!picked.id && picked.id === element) ||
    (!!picked.primitive &&
      (picked.primitive === element ||
        (!!picked.primitive.equals && picked.primitive.equals(element)) ||
        polylineEquals(picked.primitive, element))));

export function pick<T, K extends keyof T>(obj: T, keys?: K[]): Pick<T, K> {
  if (!keys) return {} as Pick<T, K>;
  return entries(obj).reduce((a, [k, v]) => {
    if (!includes(keys, k)) return a;
    (a as any)[k] = v;
    return a;
  }, {} as Pick<T, K>);
}

export function entries<T>(obj: T): [keyof T, T[keyof T]][] {
  return Object.keys(obj).map(k => [k, obj[k as keyof T]] as [keyof T, T[keyof T]]);
}

export function includes<T>(array: T[] | null | undefined, value: T) {
  return !!array && array.indexOf(value) !== -1;
}

export function shallowEquals<T>(a1: T | null | undefined, a2: T | null | undefined) {
  return (
    !!a1 &&
    !!a2 &&
    [...Object.keys(a1), ...Object.keys(a2)].every(k => a1[k as keyof T] === a2[k as keyof T])
  );
}
