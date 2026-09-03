export function pick<T extends object, K extends keyof T>(obj: T, keys?: K[]): Pick<T, K> {
  if (!keys) return {} as Pick<T, K>;
  return entries(obj).reduce(
    (a, [k, v]) => {
      if (!includes(keys, k)) return a;
      (a as any)[k] = v;
      return a;
    },
    {} as Pick<T, K>,
  );
}

export function entries<T extends object>(obj: T): [keyof T, T[keyof T]][] {
  return Object.keys(obj).map(k => [k, obj[k as keyof T]] as [keyof T, T[keyof T]]);
}

export function includes<T>(array: readonly T[] | null | undefined, value: T) {
  return !!array && array.indexOf(value) !== -1;
}

export function shallowEquals<T>(a1: T | null | undefined, a2: T | null | undefined) {
  return (
    !!a1 &&
    !!a2 &&
    [...Object.keys(a1), ...Object.keys(a2)].every(k => a1[k as keyof T] === a2[k as keyof T])
  );
}

export type Destroyable = {
  isDestroyed(): boolean;
  destroy(): void;
};

export function isDestroyable(d: any): d is Destroyable {
  return d && typeof d.isDestroyed === "function" && typeof d.destroy === "function";
}

export function isDestroyed(d: any) {
  return isDestroyable(d) && d.isDestroyed();
}

// Removes `element` from `context.primitiveCollection` and destroys it. Guards
// both steps against the collection/element already being destroyed, since
// teardown order between a collection and its children is not guaranteed.
export function destroyPrimitiveCollectionChild<Element extends Destroyable>(
  element: Element,
  context: { primitiveCollection?: { isDestroyed(): boolean; remove(primitive?: any): boolean } },
): void {
  if (context.primitiveCollection && !context.primitiveCollection.isDestroyed()) {
    context.primitiveCollection.remove(element);
  }
  if (!element.isDestroyed()) {
    element.destroy();
  }
}

export function isPromise<T>(maybePromise: T | Promise<T>): maybePromise is Promise<T> {
  return (
    maybePromise &&
    typeof maybePromise === "object" &&
    "then" in maybePromise &&
    typeof maybePromise.then === "function"
  );
}
