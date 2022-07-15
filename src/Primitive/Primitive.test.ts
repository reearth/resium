import { expectType, TypeEqual } from "ts-expect";
import { it } from "vitest";

import { UnusedCesiumProps } from "../core";

import { PrimitiveProps, PrimtiiveOtherProps, Target } from "./Primitive";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  Target,
  Omit<PrimitiveProps, keyof PrimtiiveOtherProps>,
  {},
  IgnoredProps
>;
type IgnoredProps = never;

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
