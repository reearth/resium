import type { CustomDataSource } from "cesium";
import type { TypeEqual } from "ts-expect";
import { expectType } from "ts-expect";
import { it } from "vitest";

import type { UnusedCesiumProps } from "../core";

import type {
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
