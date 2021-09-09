import { expectType, TypeEqual } from "ts-expect";

import { UnusedCesiumProps, ValueOf } from "../core";
import { Target, CzmlDataSourceProps, cesiumEventProps } from "./CzmlDataSource";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  Target,
  keyof CzmlDataSourceProps | ValueOf<typeof cesiumEventProps>
>;
type IgnoredProps = "clock" | "entities" | "isLoading";

expectType<TypeEqual<never, Exclude<UnusedProps, IgnoredProps>>>(true);

it("should be compiled", () => {});
