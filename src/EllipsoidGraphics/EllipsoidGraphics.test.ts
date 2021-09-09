import { expectType, TypeEqual } from "ts-expect";
import { EllipsoidGraphics } from "cesium";

import { UnusedCesiumProps, Merge, ValueOf } from "../core";
import { EllipsoidGraphicsProps, cesiumEventProps } from "./EllipsoidGraphics";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  Merge<EllipsoidGraphics, EllipsoidGraphics.ConstructorOptions>,
  keyof EllipsoidGraphicsProps | ValueOf<typeof cesiumEventProps>
>;
type IgnoredProps = never;

expectType<TypeEqual<never, Exclude<UnusedProps, IgnoredProps>>>(true);

it("should be compiled", () => {});
