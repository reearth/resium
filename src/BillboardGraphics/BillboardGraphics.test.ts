import type { BillboardGraphics } from "cesium";
import type { TypeEqual } from "ts-expect";
import { expectType } from "ts-expect";
import { it } from "vitest";

import type { UnusedCesiumProps, Merge } from "../core";

import type { BillboardGraphicsProps, cesiumEventProps } from "./BillboardGraphics";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  Merge<BillboardGraphics, BillboardGraphics.ConstructorOptions>,
  BillboardGraphicsProps,
  typeof cesiumEventProps,
  IgnoredProps
>;
type IgnoredProps = never;

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
