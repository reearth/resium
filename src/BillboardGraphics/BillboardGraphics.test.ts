import { it } from "vitest";
import { expectType, TypeEqual } from "ts-expect";
import { BillboardGraphics } from "cesium";

import { UnusedCesiumProps, Merge } from "../core";
import { BillboardGraphicsProps, cesiumEventProps } from "./BillboardGraphics";

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
