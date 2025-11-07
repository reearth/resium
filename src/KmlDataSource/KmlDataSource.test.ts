import { expectType, TypeEqual } from "ts-expect";
import { it } from "vitest";

import { UnusedCesiumProps } from "../core";

import {
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
