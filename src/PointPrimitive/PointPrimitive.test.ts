import { expectType, TypeEqual } from "ts-expect";
import { PointPrimitive } from "cesium";

import { UnusedCesiumProps } from "../core";
import { PointPrimitiveProps } from "./PointPrimitive";

// Unused prop check
type UnusedProps = UnusedCesiumProps<PointPrimitive, keyof PointPrimitiveProps>;
type IgnoredProps = never;

expectType<TypeEqual<never, Exclude<UnusedProps, IgnoredProps>>>(true);

it("should be compiled", () => {});
