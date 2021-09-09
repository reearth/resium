import { expectType, TypeEqual } from "ts-expect";
import { Cesium3DTileset } from "cesium";

import { UnusedCesiumProps, Merge, ValueOf, ConstructorOptions } from "../core";
import { Cesium3DTilesetProps, cesiumEventProps } from "./Cesium3DTileset";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  Merge<Cesium3DTileset, ConstructorOptions<typeof Cesium3DTileset>>,
  keyof Cesium3DTilesetProps | ValueOf<typeof cesiumEventProps>
>;
type IgnoredProps = never;

expectType<TypeEqual<never, Exclude<UnusedProps, IgnoredProps>>>(true);

it("should be compiled", () => {});
