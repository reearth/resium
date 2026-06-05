import type { TypeEqual } from "ts-expect";
import { expectType } from "ts-expect";
import { it } from "vitest";

import type { UnusedCesiumProps } from "../core";

import type {
  GeoJsonPrimitiveCesiumReadonlyProps,
  GeoJsonPrimitiveOtherProps,
  GeoJsonPrimitiveProps,
  GeoJsonPrimitiveShape,
} from "./GeoJsonPrimitive";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  GeoJsonPrimitiveShape,
  Omit<
    GeoJsonPrimitiveProps,
    keyof GeoJsonPrimitiveOtherProps | keyof GeoJsonPrimitiveCesiumReadonlyProps
  >,
  {},
  IgnoredProps
>;
// Internal-only/getter-only props consumers reach via ref, not as wrapper props:
// - points/polylines/polygons: read-only getters exposing the internal Buffer collections
// - featureCount/ids/properties/url: read-only metadata
type IgnoredProps =
  | "points"
  | "polylines"
  | "polygons"
  | "featureCount"
  | "ids"
  | "properties"
  | "url";

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
