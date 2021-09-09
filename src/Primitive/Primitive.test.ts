import { expectType, TypeEqual } from "ts-expect";
import { Primitive } from "cesium";

import { UnusedCesiumProps } from "../core";
import { PrimitiveProps } from "./Primitive";

// Unused prop check
type UnusedProps = UnusedCesiumProps<Primitive, keyof PrimitiveProps>;
type IgnoredProps = never;

expectType<TypeEqual<never, Exclude<UnusedProps, IgnoredProps>>>(true);

it("should be compiled", () => {});
