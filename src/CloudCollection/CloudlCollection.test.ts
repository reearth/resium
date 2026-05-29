import type { CloudCollection } from "cesium";
import type { TypeEqual } from "ts-expect";
import { expectType } from "ts-expect";
import { it } from "vitest";

import type { UnusedCesiumProps } from "../core";

import type { CloudCollectionOtherProps, CloudCollectionProps } from "./CloudCollection";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  CloudCollection,
  Omit<CloudCollectionProps, keyof CloudCollectionOtherProps>,
  {},
  IgnoredProps
>;
type IgnoredProps = "length";

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
