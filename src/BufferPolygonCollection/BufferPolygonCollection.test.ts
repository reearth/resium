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
type IgnoredProps = "length" | "DEFAULT_CAPACITY" | "boundingVolume" | "boundingVolumeWC";

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
