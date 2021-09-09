import { expectType, TypeEqual } from "ts-expect";
import { Viewer } from "cesium";

import { UnusedCesiumProps, ValueOf } from "../core";
import { ViewerProps, cesiumEventProps } from "./Viewer";

// Unused prop check
type UnusedProps = UnusedCesiumProps<Viewer, keyof ViewerProps | ValueOf<typeof cesiumEventProps>>;
type IgnoredProps = never;

expectType<TypeEqual<never, Exclude<UnusedProps, IgnoredProps>>>(true);

it("should be compiled", () => {});
