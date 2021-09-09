import { expectType, TypeEqual } from "ts-expect";
import { CylinderGraphics } from "cesium";

import { Merge, UnusedCesiumProps, ValueOf } from "../core";
import { cesiumEventProps, CylinderGraphicsProps } from "./CylinderGraphics";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  Merge<CylinderGraphics, CylinderGraphics.ConstructorOptions>,
  keyof CylinderGraphicsProps | ValueOf<typeof cesiumEventProps>
>;
type IgnoredProps = never;

expectType<TypeEqual<never, Exclude<UnusedProps, IgnoredProps>>>(true);

it("should be compiled", () => {});
