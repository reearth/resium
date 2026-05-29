import type { TypeEqual } from "ts-expect";
import { expectType } from "ts-expect";
import { it } from "vitest";

import type { UnusedCesiumProps } from "../core";

import type {
  GroundPolylinePrimitiveOtherProps,
  GroundPolylinePrimitiveProps,
  Target,
} from "./GroundPolylinePrimitive";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  Target,
  Omit<GroundPolylinePrimitiveProps, keyof GroundPolylinePrimitiveOtherProps>,
  {},
  IgnoredProps
>;
type IgnoredProps = "onReady";

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
