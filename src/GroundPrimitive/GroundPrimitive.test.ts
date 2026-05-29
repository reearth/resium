import type { TypeEqual } from "ts-expect";
import { expectType } from "ts-expect";
import { it } from "vitest";

import type { UnusedCesiumProps } from "../core";

import type { GroundPrimitiveOtherProps, GroundPrimitiveProps, Target } from "./GroundPrimitive";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  Target,
  Omit<GroundPrimitiveProps, keyof GroundPrimitiveOtherProps>,
  {},
  IgnoredProps
>;
type IgnoredProps = never;

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
