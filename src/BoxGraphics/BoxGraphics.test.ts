import { expectType, TypeEqual } from "ts-expect";
import { BoxGraphics } from "cesium";

import { UnusedCesiumProps, Merge, ValueOf } from "../core";
import { BoxGraphicsProps, cesiumEventProps } from "./BoxGraphics";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  Merge<BoxGraphics, BoxGraphics.ConstructorOptions>,
  keyof BoxGraphicsProps | ValueOf<typeof cesiumEventProps>
>;
type IgnoredProps = never;

expectType<TypeEqual<never, Exclude<UnusedProps, IgnoredProps>>>(true);

it("should be compiled", () => {});
