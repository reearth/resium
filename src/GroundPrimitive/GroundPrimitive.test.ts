import { expectType, TypeEqual } from "ts-expect";
import { GroundPrimitive } from "cesium";

import { UnusedCesiumProps } from "../core";
import { GroundPrimitiveProps } from "./GroundPrimitive";

// Unused prop check
type UnusedProps = UnusedCesiumProps<GroundPrimitive, keyof GroundPrimitiveProps>;
type IgnoredProps = never;

expectType<TypeEqual<never, Exclude<UnusedProps, IgnoredProps>>>(true);

it("should be compiled", () => {});
