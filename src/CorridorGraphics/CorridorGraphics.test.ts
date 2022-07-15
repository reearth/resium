import { it } from "vitest";
import { expectType, TypeEqual } from "ts-expect";
import { CorridorGraphics } from "cesium";

import { Merge, UnusedCesiumProps } from "../core";
import { cesiumEventProps, CorridorGraphicsProps } from "./CorridorGraphics";

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
