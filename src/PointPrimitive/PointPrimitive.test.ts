import type { PointPrimitive } from "cesium";
import type { TypeEqual } from "ts-expect";
import { expectType } from "ts-expect";
import { it } from "vitest";

import type { UnusedCesiumProps } from "../core";

import type { PointPrimitiveOtherProps, PointPrimitiveProps } from "./PointPrimitive";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  PointPrimitive,
  Omit<PointPrimitiveProps, keyof PointPrimitiveOtherProps>,
  {},
  IgnoredProps
>;
type IgnoredProps = "id"; // id is actually used

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
