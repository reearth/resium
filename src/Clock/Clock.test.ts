import { expectType, TypeEqual } from "ts-expect";
import { Clock } from "cesium";

import { UnusedCesiumProps } from "../core";
import { cesiumEventProps, ClockProps } from "./Clock";

// Unused prop check
type UnusedProps = UnusedCesiumProps<Clock, ClockProps, typeof cesiumEventProps, IgnoredProps>;
type IgnoredProps = never;

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
