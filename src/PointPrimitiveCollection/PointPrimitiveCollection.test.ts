import { PointPrimitiveCollection } from "cesium";
import { expectType, TypeEqual } from "ts-expect";
import { it } from "vitest";

import { UnusedCesiumProps } from "../core";

import {
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
