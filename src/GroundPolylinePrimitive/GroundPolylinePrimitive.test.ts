import { expectType, TypeEqual } from "ts-expect";
import { it } from "vitest";

import { UnusedCesiumProps } from "../core";

import {
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
