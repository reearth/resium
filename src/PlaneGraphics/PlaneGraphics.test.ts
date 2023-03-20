import { expectType, TypeEqual } from "ts-expect";
import { it } from "vitest";

import { UnusedCesiumProps } from "../core";

import { PlaneGraphicsProps, cesiumEventProps, Target } from "./PlaneGraphics";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  Target,
  PlaneGraphicsProps,
  typeof cesiumEventProps,
  IgnoredProps
>;
type IgnoredProps = never;

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
