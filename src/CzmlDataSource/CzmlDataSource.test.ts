import { expectType, TypeEqual } from "ts-expect";

import { UnusedCesiumProps } from "../core";
import {
  Target,
  CzmlDataSourceProps,
  cesiumEventProps,
  CzmlDataSourceOtherProps,
} from "./CzmlDataSource";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  Target,
  Omit<CzmlDataSourceProps, keyof CzmlDataSourceOtherProps>,
  typeof cesiumEventProps,
  IgnoredProps
>;
type IgnoredProps = "clock" | "entities" | "isLoading";

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
