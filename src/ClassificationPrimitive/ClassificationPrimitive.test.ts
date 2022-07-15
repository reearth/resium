import { expectType, TypeEqual } from "ts-expect";
import { it } from "vitest";

import { UnusedCesiumProps } from "../core";

import {
  Target,
  ClassificationPrimitiveProps,
  ClassificationPrimitiveOtherProps,
} from "./ClassificationPrimitive";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  Target,
  Omit<ClassificationPrimitiveProps, keyof ClassificationPrimitiveOtherProps>,
  {},
  IgnoredProps
>;
type IgnoredProps = never;

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
