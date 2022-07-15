import { it } from "vitest";
import { expectType, TypeEqual } from "ts-expect";

import { UnusedCesiumProps } from "../core";
import {
  Target,
  GeoJsonDataSourceProps,
  cesiumEventProps,
  GeoJsonDataSourceOtherProps,
} from "./GeoJsonDataSource";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  Target,
  Omit<GeoJsonDataSourceProps, keyof GeoJsonDataSourceOtherProps>,
  typeof cesiumEventProps,
  IgnoredProps
>;
type IgnoredProps = "clock" | "entities" | "isLoading";

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
