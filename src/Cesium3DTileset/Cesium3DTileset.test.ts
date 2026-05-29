import type { Cesium3DTileset } from "cesium";
import type { TypeEqual } from "ts-expect";
import { expectType } from "ts-expect";
import { it } from "vitest";

import type { UnusedCesiumProps, Merge, ConstructorOptions } from "../core";

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
