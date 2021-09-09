import { expectType, TypeEqual } from "ts-expect";
import { PathGraphics } from "cesium";

import { UnusedCesiumProps, Merge, ValueOf } from "../core";
import { PathGraphicsProps, cesiumEventProps } from "./PathGraphics";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  Merge<PathGraphics, PathGraphics.ConstructorOptions>,
  keyof PathGraphicsProps | ValueOf<typeof cesiumEventProps>
>;
type IgnoredProps = never;

expectType<TypeEqual<never, Exclude<UnusedProps, IgnoredProps>>>(true);

it("should be compiled", () => {});
