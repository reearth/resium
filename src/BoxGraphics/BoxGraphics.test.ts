import { it } from "vitest";
import { expectType, TypeEqual } from "ts-expect";
import { BoxGraphics } from "cesium";

import { UnusedCesiumProps, Merge } from "../core";
import { BoxGraphicsProps, cesiumEventProps } from "./BoxGraphics";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  Merge<BoxGraphics, BoxGraphics.ConstructorOptions>,
  BoxGraphicsProps,
  typeof cesiumEventProps,
  IgnoredProps
>;
type IgnoredProps = never;

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
