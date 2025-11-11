import { CustomDataSource } from "cesium";
import { expectType, TypeEqual } from "ts-expect";
import { it } from "vitest";

import { UnusedCesiumProps } from "../core";

import {
  cesiumEventProps,
  CustomDataSourceProps,
  CustomDataSourceOtherProps,
} from "./CustomDataSource";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  CustomDataSource,
  Omit<CustomDataSourceProps, keyof CustomDataSourceOtherProps>,
  typeof cesiumEventProps,
  IgnoredProps
>;
type IgnoredProps = "entities";

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
