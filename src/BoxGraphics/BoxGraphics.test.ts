import { BoxGraphics } from "cesium";
import { expectType, TypeEqual } from "ts-expect";
import { it } from "vitest";

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
