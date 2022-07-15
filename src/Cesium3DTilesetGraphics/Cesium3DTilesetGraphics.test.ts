import { expectType, TypeEqual } from "ts-expect";
import { Cesium3DTilesetGraphics } from "cesium";

import { UnusedCesiumProps, Merge } from "../core";
import { Cesium3DTilesetGraphicsProps, cesiumEventProps } from "./Cesium3DTilesetGraphics";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  Merge<Cesium3DTilesetGraphics, Cesium3DTilesetGraphics.ConstructorOptions>,
  Cesium3DTilesetGraphicsProps,
  typeof cesiumEventProps,
  IgnoredProps
>;
type IgnoredProps = never;

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
