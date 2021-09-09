import { expectType, TypeEqual } from "ts-expect";

import { UnusedCesiumProps, ValueOf } from "../core";
import { Target, GeoJsonDataSourceProps, cesiumEventProps } from "./GeoJsonDataSource";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  Target,
  keyof GeoJsonDataSourceProps | ValueOf<typeof cesiumEventProps>
>;
type IgnoredProps = "entities" | "clock" | "isLoading";

expectType<TypeEqual<never, Exclude<UnusedProps, IgnoredProps>>>(true);

it("should be compiled", () => {});
