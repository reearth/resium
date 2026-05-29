import type { TypeEqual } from "ts-expect";
import { expectType } from "ts-expect";
import { it } from "vitest";

import type { UnusedCesiumProps } from "../core";

import type {
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
