import type { TypeEqual } from "ts-expect";
import { expectType } from "ts-expect";
import { it } from "vitest";

import type { UnusedCesiumProps } from "../core";

import type {
  Target,
  KmlDataSourceProps,
  cesiumEventProps,
  KmlDataSourceOtherProps,
} from "./KmlDataSource";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  Target,
  Omit<KmlDataSourceProps, keyof KmlDataSourceOtherProps>,
  typeof cesiumEventProps,
  IgnoredProps
>;
type IgnoredProps = "entities" | "isLoading" | "clock" | "kmlTours";

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
