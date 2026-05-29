import type { Polyline } from "cesium";
import type { TypeEqual } from "ts-expect";
import { expectType } from "ts-expect";
import { it } from "vitest";

import type { UnusedCesiumProps } from "../core";

import type { PolylineOtherProps, PolylineProps } from "./Polyline";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  Polyline,
  Omit<PolylineProps, keyof PolylineOtherProps>,
  {},
  IgnoredProps
>;
type IgnoredProps = "id"; // id is actually used

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
