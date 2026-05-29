import type { TypeEqual } from "ts-expect";
import { expectType } from "ts-expect";
import { it } from "vitest";

import type { UnusedCesiumProps } from "../core";

import type { PrimitiveProps, PrimtiiveOtherProps, Target } from "./Primitive";

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
