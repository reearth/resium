import type { TypeEqual } from "ts-expect";
import { expectType } from "ts-expect";
import { it } from "vitest";

import type { UnusedCesiumProps } from "../core";

import type {
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
