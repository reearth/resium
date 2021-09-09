import { expectType, TypeEqual } from "ts-expect";
import { Cesium3DTilesetGraphics } from "cesium";

import { UnusedCesiumProps, Merge, ValueOf } from "../core";
import { Cesium3DTilesetGraphicsProps, cesiumEventProps } from "./Cesium3DTilesetGraphics";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  Merge<Cesium3DTilesetGraphics, Cesium3DTilesetGraphics.ConstructorOptions>,
  keyof Cesium3DTilesetGraphicsProps | ValueOf<typeof cesiumEventProps>
>;
type IgnoredProps = never;

expectType<TypeEqual<never, Exclude<UnusedProps, IgnoredProps>>>(true);

it("should be compiled", () => {});
