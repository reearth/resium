import type { Cesium3DTileset } from "cesium";
import type { TypeEqual } from "ts-expect";
import { expectType } from "ts-expect";
import { expect, it, vi } from "vitest";

import type { UnusedCesiumProps, Merge, ConstructorOptions } from "../core";

import { detachUserOwnedClipping } from "./Cesium3DTileset";
import type {
  Cesium3DTilesetProps,
  cesiumEventProps,
  Cesium3DTilesetOtherProps,
} from "./Cesium3DTileset";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  Merge<Cesium3DTileset, ConstructorOptions<typeof Cesium3DTileset>>,
  Omit<Cesium3DTilesetProps, keyof Cesium3DTilesetOtherProps>,
  typeof cesiumEventProps,
  IgnoredProps
>;
// pointCloudShading exists in constructor options but causes type issues
type IgnoredProps = "pointCloudShading";

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});

it("detaches user-owned clippingPlanes/clippingPolygons without destroying them", () => {
  // Mimics the private references Cesium3DTileset.destroy() would destroy.
  const clippingPlanes = { destroy: vi.fn() };
  const clippingPolygons = { destroy: vi.fn() };
  const element = {
    _clippingPlanes: clippingPlanes,
    _clippingPolygons: clippingPolygons,
  } as unknown as Cesium3DTileset;

  detachUserOwnedClipping(element);

  // References are nulled so Cesium's destroy cascade has nothing to destroy.
  expect((element as any)._clippingPlanes).toBeUndefined();
  expect((element as any)._clippingPolygons).toBeUndefined();
  // The user-owned collections themselves must not be destroyed by us.
  expect(clippingPlanes.destroy).not.toBeCalled();
  expect(clippingPolygons.destroy).not.toBeCalled();
});
