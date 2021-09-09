import { expectType, TypeEqual } from "ts-expect";

import { UnusedCesiumProps, ValueOf } from "../core";
import { Target, KmlDataSourceProps, cesiumEventProps } from "./KmlDataSource";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  Target,
  keyof KmlDataSourceProps | ValueOf<typeof cesiumEventProps>
>;
type IgnoredProps = "entities" | "isLoading" | "clock" | "kmlTours";

expectType<TypeEqual<never, Exclude<UnusedProps, IgnoredProps>>>(true);

it("should be compiled", () => {});
