import { expectType, TypeEqual } from "ts-expect";
import { PolylineGraphics } from "cesium";

import { UnusedCesiumProps, Merge, ValueOf } from "../core";
import { PolylineGraphicsProps, cesiumEventProps } from "./PolylineGraphics";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  Merge<PolylineGraphics, PolylineGraphics.ConstructorOptions>,
  keyof PolylineGraphicsProps | ValueOf<typeof cesiumEventProps>
>;
type IgnoredProps = never;

expectType<TypeEqual<never, Exclude<UnusedProps, IgnoredProps>>>(true);

it("should be compiled", () => {});
