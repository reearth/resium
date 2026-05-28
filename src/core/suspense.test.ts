import { afterEach, expect, test } from "vitest";

import { clearCesiumResource, resourceUrl, useCesiumResource, useSuspendedResource } from "./suspense";

afterEach(() => clearCesiumResource());

test("returns undefined without suspending when key is falsy", () => {
  expect(useCesiumResource(undefined, async () => 1)).toBeUndefined();
  expect(useCesiumResource(null, async () => 1)).toBeUndefined();
  expect(useCesiumResource("", async () => 1)).toBeUndefined();
});

test("throws the pending promise, then returns the resolved value", async () => {
  let thrown: unknown;
  try {
    useCesiumResource("a", async () => 42);
  } catch (e) {
    thrown = e;
  }
  expect(thrown).toBeInstanceOf(Promise);

  await thrown;
  expect(useCesiumResource("a", async () => 42)).toBe(42);
});

test("runs the factory only once per key", async () => {
  let calls = 0;
  const factory = async () => {
    calls++;
    return "v";
  };

  try {
    useCesiumResource("b", factory);
  } catch (e) {
    await e;
  }
  useCesiumResource("b", factory);
  useCesiumResource("b", factory);

  expect(calls).toBe(1);
});

test("resourceUrl extracts url from strings only", () => {
  expect(resourceUrl("https://example.com/a.json")).toBe("https://example.com/a.json");
  expect(resourceUrl({ type: "FeatureCollection" })).toBeUndefined();
  expect(resourceUrl(undefined)).toBeUndefined();
});

test("useSuspendedResource does not fetch when suspense is off", () => {
  let calls = 0;
  const fetch = async () => {
    calls++;
    return "x";
  };
  expect(useSuspendedResource("geojson", "url", {}, fetch)).toBeUndefined();
  expect(useSuspendedResource("geojson", "url", { suspense: false }, fetch)).toBeUndefined();
  expect(calls).toBe(0);
});

test("useSuspendedResource keys by cacheKey so it busts and dedupes", async () => {
  let calls = 0;
  const fetch = async () => {
    calls++;
    return calls;
  };

  // Same url, different cacheKey -> two separate fetches.
  const settle = async (cacheKey: string) => {
    try {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useSuspendedResource("geojson", "same-url", { suspense: true, cacheKey }, fetch);
    } catch (e) {
      await e;
    }
  };
  await settle("v1");
  await settle("v2");
  expect(calls).toBe(2);

  // Same cacheKey -> served from cache, no extra fetch.
  expect(useSuspendedResource("geojson", "same-url", { suspense: true, cacheKey: "v1" }, fetch)).toBe(1);
  expect(calls).toBe(2);
});

test("throws the error after rejection for error boundaries", async () => {
  const err = new Error("boom");
  try {
    useCesiumResource("c", async () => {
      throw err;
    });
  } catch (e) {
    await (e as Promise<void>).catch(() => undefined);
  }

  expect(() => useCesiumResource("c", async () => "ignored")).toThrow(err);
});
