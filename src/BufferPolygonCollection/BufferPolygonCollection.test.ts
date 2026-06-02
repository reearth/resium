import type { BufferPolygonCollection } from "cesium";
import type { TypeEqual } from "ts-expect";
import { expectType } from "ts-expect";
import { it } from "vitest";

import type { UnusedCesiumProps } from "../core";

import type { BufferPolygonCollectionOtherProps, BufferPolygonCollectionProps } from "./BufferPolygonCollection";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  BufferPolygonCollection,
  Omit<
    BufferPolygonCollectionProps,
    | keyof BufferPolygonCollectionOtherProps
    | "primitiveCountMax"
    | "vertexCountMax"
    | "holeCountMax"
    | "triangleCountMax"
    | "positionDatatype"
    | "allowPicking"
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
