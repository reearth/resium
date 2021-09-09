import { expectType, TypeEqual } from "ts-expect";
import { GroundPolylinePrimitive } from "cesium";

import { UnusedCesiumProps } from "../core";
import { GroundPolylinePrimitiveProps } from "./GroundPolylinePrimitive";

// Unused prop check
type UnusedProps = UnusedCesiumProps<GroundPolylinePrimitive, keyof GroundPolylinePrimitiveProps>;
type IgnoredProps = never;

expectType<TypeEqual<never, Exclude<UnusedProps, IgnoredProps>>>(true);

it("should be compiled", () => {});
