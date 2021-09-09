import { expectType, TypeEqual } from "ts-expect";
import { PolylineVolumeGraphics } from "cesium";

import { UnusedCesiumProps, Merge, ValueOf } from "../core";
import { PolylineVolumeGraphicsProps, cesiumEventProps } from "./PolylineVolumeGraphics";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  Merge<PolylineVolumeGraphics, PolylineVolumeGraphics.ConstructorOptions>,
  keyof PolylineVolumeGraphicsProps | ValueOf<typeof cesiumEventProps>
>;
type IgnoredProps = never;

expectType<TypeEqual<never, Exclude<UnusedProps, IgnoredProps>>>(true);

it("should be compiled", () => {});
