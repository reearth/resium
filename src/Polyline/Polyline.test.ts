import { expectType, TypeEqual } from "ts-expect";
import { Polyline } from "cesium";

import { UnusedCesiumProps } from "../core";
import { PolylineProps } from "./Polyline";

// Unused prop check
type UnusedProps = UnusedCesiumProps<Polyline, keyof PolylineProps>;
type IgnoredProps = never;

expectType<TypeEqual<never, Exclude<UnusedProps, IgnoredProps>>>(true);

it("should be compiled", () => {});
