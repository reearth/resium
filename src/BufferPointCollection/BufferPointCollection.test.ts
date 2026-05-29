import type { BufferPointCollection } from "cesium";
import type { TypeEqual } from "ts-expect";
import { expectType } from "ts-expect";
import { it } from "vitest";

import type { UnusedCesiumProps } from "../core";

import type {
  BufferPointCollectionOtherProps,
  BufferPointCollectionProps,
} from "./BufferPointCollection";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  BufferPointCollection,
  Omit<
    BufferPointCollectionProps,
    keyof BufferPointCollectionOtherProps | "primitiveCountMax" | "modelMatrix"
  >,
  {},
  IgnoredProps
>;
type IgnoredProps = "length" | "DEFAULT_CAPACITY" | "boundingVolume" | "boundingVolumeWC";

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
