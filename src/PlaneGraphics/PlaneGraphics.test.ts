import { expectType, TypeEqual } from "ts-expect";
import { PlaneGraphics } from "cesium";

import { UnusedCesiumProps, Merge, ValueOf } from "../core";
import { PlaneGraphicsProps, cesiumEventProps } from "./PlaneGraphics";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  Merge<PlaneGraphics, PlaneGraphics.ConstructorOptions>,
  keyof PlaneGraphicsProps | ValueOf<typeof cesiumEventProps>
>;
type IgnoredProps = never;

expectType<TypeEqual<never, Exclude<UnusedProps, IgnoredProps>>>(true);

it("should be compiled", () => {});
