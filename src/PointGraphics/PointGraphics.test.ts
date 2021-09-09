import { expectType, TypeEqual } from "ts-expect";
import { PointGraphics } from "cesium";

import { UnusedCesiumProps, Merge, ValueOf } from "../core";
import { PointGraphicsProps, cesiumEventProps } from "./PointGraphics";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  Merge<PointGraphics, PointGraphics.ConstructorOptions>,
  keyof PointGraphicsProps | ValueOf<typeof cesiumEventProps>
>;
type IgnoredProps = never;

expectType<TypeEqual<never, Exclude<UnusedProps, IgnoredProps>>>(true);

it("should be compiled", () => {});
