import { expectType, TypeEqual } from "ts-expect";
import { CustomDataSource } from "cesium";

import { UnusedCesiumProps, ValueOf } from "../core";
import { cesiumEventProps, CustomDataSourceProps } from "./CustomDataSource";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  CustomDataSource,
  keyof CustomDataSourceProps | ValueOf<typeof cesiumEventProps>
>;
type IgnoredProps = "entities";

expectType<TypeEqual<never, Exclude<UnusedProps, IgnoredProps>>>(true);

it("should be compiled", () => {});
