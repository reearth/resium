import { BufferPolygonCollection } from "cesium";
import { expectType, TypeEqual } from "ts-expect";
import { it } from "vitest";

import { UnusedCesiumProps } from "../core";

import { BufferPolygonCollectionOtherProps, BufferPolygonCollectionProps } from "./BufferPolygonCollection";

type ConstructorOnlyProps = "primitiveCountMax" | "vertexCountMax" | "holeCountMax" | "triangleCountMax" | "positionDatatype" | "allowPicking";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  BufferPolygonCollection,
  Omit<BufferPolygonCollectionProps, keyof BufferPolygonCollectionOtherProps | ConstructorOnlyProps>,
  {},
  IgnoredProps
>;
// modelMatrix, boundingVolume, boundingVolumeWC are readonly on Cesium's
// BufferPrimitiveCollection (Cesium 1.141+) and cannot be wired up reactively.
type IgnoredProps = "length" | "DEFAULT_CAPACITY" | "boundingVolume" | "boundingVolumeWC" | "modelMatrix";

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
