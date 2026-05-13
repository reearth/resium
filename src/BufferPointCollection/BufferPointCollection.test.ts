import { BufferPointCollection } from "cesium";
import { expectType, TypeEqual } from "ts-expect";
import { it } from "vitest";

import { UnusedCesiumProps } from "../core";

import {
  BufferPointCollectionOtherProps,
  BufferPointCollectionProps,
} from "./BufferPointCollection";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  BufferPointCollection,
  Omit<BufferPointCollectionProps, keyof BufferPointCollectionOtherProps | "primitiveCountMax">,
  {},
  IgnoredProps
>;
// modelMatrix, boundingVolume, boundingVolumeWC are readonly on Cesium's
// BufferPrimitiveCollection (Cesium 1.141+) and cannot be wired up reactively.
type IgnoredProps = "length" | "DEFAULT_CAPACITY" | "boundingVolume" | "boundingVolumeWC" | "modelMatrix";

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
