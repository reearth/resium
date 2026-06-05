import type { BufferPolylineCollection } from "cesium";
import type { TypeEqual } from "ts-expect";
import { expectType } from "ts-expect";
import { it } from "vitest";

import type { UnusedCesiumProps } from "../core";

import type { BufferPolylineCollectionOtherProps, BufferPolylineCollectionProps } from "./BufferPolylineCollection";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  BufferPolylineCollection,
  Omit<
    BufferPolylineCollectionProps,
    | keyof BufferPolylineCollectionOtherProps
    | "primitiveCountMax"
    | "vertexCountMax"
    | "modelMatrix"
    | "boundingVolume"
    | "blendOption"
  >,
  {},
  IgnoredProps
>;
type IgnoredProps = "length" | "DEFAULT_CAPACITY" | "boundingVolumeWC";

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
