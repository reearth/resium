import { Cesium3DTileset } from "cesium";
import { expectType, TypeEqual } from "ts-expect";
import { it } from "vitest";

import { UnusedCesiumProps, Merge, ConstructorOptions } from "../core";

import {
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
type IgnoredProps = never;

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
