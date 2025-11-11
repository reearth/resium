import { expectType, TypeEqual } from "ts-expect";
import { it } from "vitest";

import { UnusedCesiumProps } from "../core";

import { PolylineGraphicsProps, cesiumEventProps, Target } from "./PolylineGraphics";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  Target,
  PolylineGraphicsProps,
  typeof cesiumEventProps,
  IgnoredProps
>;
type IgnoredProps = never;

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
