import type { Clock } from "cesium";
import type { TypeEqual } from "ts-expect";
import { expectType } from "ts-expect";
import { it } from "vitest";

import type { UnusedCesiumProps } from "../core";

import type { cesiumEventProps, ClockProps } from "./Clock";

// Unused prop check
type UnusedProps = UnusedCesiumProps<Clock, ClockProps, typeof cesiumEventProps, IgnoredProps>;
type IgnoredProps = never;

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
