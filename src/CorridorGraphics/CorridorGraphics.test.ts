import { expectType, TypeEqual } from "ts-expect";
import { CorridorGraphics } from "cesium";

import { Merge, UnusedCesiumProps, ValueOf } from "../core";
import { cesiumEventProps, CorridorGraphicsProps } from "./CorridorGraphics";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  Merge<CorridorGraphics, CorridorGraphics.ConstructorOptions>,
  keyof CorridorGraphicsProps | ValueOf<typeof cesiumEventProps>
>;
type IgnoredProps = never;

expectType<TypeEqual<never, Exclude<UnusedProps, IgnoredProps>>>(true);

it("should be compiled", () => {});
