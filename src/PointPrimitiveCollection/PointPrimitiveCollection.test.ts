import type { PointPrimitiveCollection } from "cesium";
import type { TypeEqual } from "ts-expect";
import { expectType } from "ts-expect";
import { it } from "vitest";

import type { UnusedCesiumProps } from "../core";

import type {
  PointPrimitiveCollectionOtherProps,
  PointPrimitiveCollectionProps,
} from "./PointPrimitiveCollection";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  PointPrimitiveCollection,
  Omit<PointPrimitiveCollectionProps, keyof PointPrimitiveCollectionOtherProps>,
  {},
  IgnoredProps
>;
type IgnoredProps = "length";

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
