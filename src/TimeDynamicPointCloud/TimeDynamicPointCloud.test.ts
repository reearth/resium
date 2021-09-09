import { expectType, TypeEqual } from "ts-expect";
import { TimeDynamicPointCloud } from "cesium";

import { UnusedCesiumProps, ValueOf } from "../core";
import { TimeDynamicPointCloudProps, cesiumEventProps } from "./TimeDynamicPointCloud";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  TimeDynamicPointCloud,
  keyof TimeDynamicPointCloudProps | ValueOf<typeof cesiumEventProps>
>;
type IgnoredProps = never;

expectType<TypeEqual<never, Exclude<UnusedProps, IgnoredProps>>>(true);

it("should be compiled", () => {});
