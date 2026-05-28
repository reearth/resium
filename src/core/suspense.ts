import { Resource } from "cesium";

type CacheEntry<T> = {
  status: "pending" | "fulfilled" | "rejected";
  promise: Promise<void>;
  value?: T;
  error?: unknown;
};

const resourceCache = new Map<string, CacheEntry<unknown>>();

/**
 * Resolves an async resource during render and integrates with React Suspense.
 *
 * While the resource is loading, this throws the underlying promise so the
 * nearest `<Suspense>` boundary shows its fallback. If loading fails, the error
 * is thrown so the nearest error boundary can catch it. Results are cached by
 * `key`, so the factory runs at most once per key (safe under StrictMode's
 * double render and concurrent rendering).
 *
 * Pass a falsy `key` to opt out (returns `undefined` without suspending),
 * which keeps the call unconditional and satisfies the rules of hooks.
 */
export function useCesiumResource<T>(
  key: string | null | undefined,
  factory: () => Promise<T>,
): T | undefined {
  if (!key) return undefined;

  let entry = resourceCache.get(key) as CacheEntry<T> | undefined;
  if (!entry) {
    const e: CacheEntry<T> = { status: "pending", promise: Promise.resolve() };
    e.promise = factory().then(
      value => {
        e.status = "fulfilled";
        e.value = value;
      },
      error => {
        e.status = "rejected";
        e.error = error;
      },
    );
    resourceCache.set(key, e as CacheEntry<unknown>);
    entry = e;
  }

  if (entry.status === "pending") throw entry.promise;
  if (entry.status === "rejected") throw entry.error;
  return entry.value;
}

/** Evicts a cached resource by key, or clears the whole cache when no key is given. */
export function clearCesiumResource(key?: string): void {
  if (key) {
    resourceCache.delete(key);
  } else {
    resourceCache.clear();
  }
}

/** Extracts a fetchable URL from a data prop that is a URL string or Cesium Resource. */
export function resourceUrl(data: unknown): string | undefined {
  if (typeof data === "string") return data;
  if (data instanceof Resource) return data.url;
  return undefined;
}

export type SuspenseProps = {
  /**
   * Opt in to React Suspense for async loading. When enabled and the data is a
   * URL or Resource, it is fetched during render so a parent `<Suspense>`
   * boundary can show a fallback and a parent error boundary can catch failures.
   */
  suspense?: boolean;
  /**
   * Overrides the Suspense cache key (defaults to the resolved URL). Change it to
   * bust the cache when the content at a stable URL changes, or share it across
   * components to dedupe a fetch. Only used when `suspense` is enabled.
   */
  cacheKey?: string;
};

/**
 * Suspense-aware data resolver shared by data source components. When
 * `props.suspense` is enabled and `data` resolves to a URL, it fetches the
 * resource during render via `fetch`, caching by `kind` + (`cacheKey` ?? url).
 * Otherwise it returns `undefined` without suspending.
 */
export function useSuspendedResource<T>(
  kind: string,
  data: unknown,
  props: SuspenseProps,
  fetch: (url: string) => Promise<T> | undefined,
): T | undefined {
  const url = props.suspense ? resourceUrl(data) : undefined;
  const key = url ? `${kind}:${props.cacheKey ?? url}` : undefined;
  return useCesiumResource(key, () => fetch(url as string) as Promise<T>);
}
