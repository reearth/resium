import { BufferPolylineCollection } from "cesium";
import { expectType, TypeEqual } from "ts-expect";
import { it } from "vitest";

import { UnusedCesiumProps } from "../core";

import { BufferPolylineCollectionOtherProps, BufferPolylineCollectionProps } from "./BufferPolylineCollection";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  BufferPolylineCollection,
  Omit<BufferPolylineCollectionProps, keyof BufferPolylineCollectionOtherProps | "primitiveCountMax" | "vertexCountMax">,
  {},
  IgnoredProps
>;
type IgnoredProps = "length" | "DEFAULT_CAPACITY" | "boundingVolume" | "boundingVolumeWC";

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
