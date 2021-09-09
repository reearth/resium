import { expectType, TypeEqual } from "ts-expect";
import { EllipseGraphics } from "cesium";

import { UnusedCesiumProps, Merge, ValueOf } from "../core";
import { EllipseGraphicsProps, cesiumEventProps } from "./EllipseGraphics";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  Merge<EllipseGraphics, EllipseGraphics.ConstructorOptions>,
  keyof EllipseGraphicsProps | ValueOf<typeof cesiumEventProps>
>;
type IgnoredProps = never;

expectType<TypeEqual<never, Exclude<UnusedProps, IgnoredProps>>>(true);

it("should be compiled", () => {});
