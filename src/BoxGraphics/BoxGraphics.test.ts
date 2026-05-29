import type { BoxGraphics } from "cesium";
import type { TypeEqual } from "ts-expect";
import { expectType } from "ts-expect";
import { it } from "vitest";

import type { UnusedCesiumProps, Merge } from "../core";

import type { BoxGraphicsProps, cesiumEventProps } from "./BoxGraphics";

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
