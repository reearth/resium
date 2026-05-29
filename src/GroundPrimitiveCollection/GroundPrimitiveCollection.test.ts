import type { PrimitiveCollection } from "cesium";
import type { TypeEqual } from "ts-expect";
import { expectType } from "ts-expect";
import { it } from "vitest";

import type { UnusedCesiumProps } from "../core";

import type {
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
