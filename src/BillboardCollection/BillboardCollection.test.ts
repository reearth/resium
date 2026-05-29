import type { BillboardCollection } from "cesium";
import type { TypeEqual } from "ts-expect";
import { expectType } from "ts-expect";
import { it } from "vitest";

import type { UnusedCesiumProps } from "../core";

import type { BillboardCollectionProps, BillboardCollectionOtherProps } from "./BillboardCollection";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  BillboardCollection,
  Omit<BillboardCollectionProps, keyof BillboardCollectionOtherProps>,
  {},
  IgnoredProps
>;
type IgnoredProps = "length";

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
