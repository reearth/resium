import { it } from "vitest";
import { expectType, TypeEqual } from "ts-expect";
import { PrimitiveCollection } from "cesium";

import { UnusedCesiumProps } from "../core";
import {
  GroundPrimitiveCollectionProps,
  GroundPrimitiveCollectionOtherProps,
} from "./GroundPrimitiveCollection";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  PrimitiveCollection,
  Omit<GroundPrimitiveCollectionProps, keyof GroundPrimitiveCollectionOtherProps>,
  {},
  IgnoredProps
>;
type IgnoredProps = never;

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
