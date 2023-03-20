import { expectType, TypeEqual } from "ts-expect";
import { it } from "vitest";

import { UnusedCesiumProps } from "../core";

import {
  TimeDynamicPointCloudProps,
  cesiumEventProps,
  Target,
  TimeDynamicPointCloudOtherProps,
} from "./TimeDynamicPointCloud";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  Target,
  Omit<TimeDynamicPointCloudProps, keyof TimeDynamicPointCloudOtherProps>,
  typeof cesiumEventProps,
  IgnoredProps
>;
type IgnoredProps = "shading"; // shading is actually used

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
