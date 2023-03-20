import { PointPrimitive } from "cesium";
import { expectType, TypeEqual } from "ts-expect";
import { it } from "vitest";

import { UnusedCesiumProps } from "../core";

import { PointPrimitiveOtherProps, PointPrimitiveProps } from "./PointPrimitive";

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
