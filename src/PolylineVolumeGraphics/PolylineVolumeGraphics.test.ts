import { expectType, TypeEqual } from "ts-expect";
import { it } from "vitest";

import { UnusedCesiumProps } from "../core";

import { PolylineVolumeGraphicsProps, cesiumEventProps, Target } from "./PolylineVolumeGraphics";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  Target,
  PolylineVolumeGraphicsProps,
  typeof cesiumEventProps,
  IgnoredProps
>;
type IgnoredProps = never;

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
