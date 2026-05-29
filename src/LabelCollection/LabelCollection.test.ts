import type { LabelCollection } from "cesium";
import type { TypeEqual } from "ts-expect";
import { expectType } from "ts-expect";
import { it } from "vitest";

import type { UnusedCesiumProps } from "../core";

import type { LabelCollectionOtherProps, LabelCollectionProps } from "./LabelCollection";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  LabelCollection,
  Omit<LabelCollectionProps, keyof LabelCollectionOtherProps>,
  {},
  IgnoredProps
>;
type IgnoredProps = "length";

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
