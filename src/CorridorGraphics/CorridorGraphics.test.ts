import type { CorridorGraphics } from "cesium";
import type { TypeEqual } from "ts-expect";
import { expectType } from "ts-expect";
import { it } from "vitest";

import type { Merge, UnusedCesiumProps } from "../core";

import type { cesiumEventProps, CorridorGraphicsProps } from "./CorridorGraphics";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  Merge<CorridorGraphics, CorridorGraphics.ConstructorOptions>,
  CorridorGraphicsProps,
  typeof cesiumEventProps,
  IgnoredProps
>;
type IgnoredProps = never;

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
