import { expectType, TypeEqual } from "ts-expect";
import { WallGraphics } from "cesium";

import { UnusedCesiumProps, ValueOf } from "../core";
import { WallGraphicsProps, cesiumEventProps } from "./WallGraphics";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  WallGraphics | WallGraphics.ConstructorOptions,
  keyof WallGraphicsProps | ValueOf<typeof cesiumEventProps>
>;
type IgnoredProps = never;

expectType<TypeEqual<never, Exclude<UnusedProps, IgnoredProps>>>(true);

it("should be compiled", () => {});
