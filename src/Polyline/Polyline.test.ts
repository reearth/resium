import { Polyline } from "cesium";
import { expectType, TypeEqual } from "ts-expect";
import { it } from "vitest";

import { UnusedCesiumProps } from "../core";

import { PolylineOtherProps, PolylineProps } from "./Polyline";

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
