import { expectType, TypeEqual } from "ts-expect";
import { Clock } from "cesium";

import { UnusedCesiumProps, ValueOf } from "../core";
import { cesiumEventProps, ClockProps } from "./Clock";

// Unused prop check
type UnusedProps = UnusedCesiumProps<Clock, keyof ClockProps | ValueOf<typeof cesiumEventProps>>;
type IgnoredProps = never;

expectType<TypeEqual<never, Exclude<UnusedProps, IgnoredProps>>>(true);

it("should be compiled", () => {});
