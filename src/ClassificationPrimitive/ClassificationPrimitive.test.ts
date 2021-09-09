import { expectType, TypeEqual } from "ts-expect";
import { ClassificationPrimitive } from "cesium";

import { UnusedCesiumProps } from "../core";
import { ClassificationPrimitiveProps } from "./ClassificationPrimitive";

// Unused prop check
type UnusedProps = UnusedCesiumProps<ClassificationPrimitive, keyof ClassificationPrimitiveProps>;
type IgnoredProps = never;

expectType<TypeEqual<never, Exclude<UnusedProps, IgnoredProps>>>(true);

it("should be compiled", () => {});
