import { expectType, TypeEqual } from "ts-expect";
import { Globe } from "cesium";

import { UnusedCesiumProps, ValueOf } from "../core";
import { GlobeProps, cesiumEventProps } from "./Globe";

// Unused prop check
type UnusedProps = UnusedCesiumProps<Globe, keyof GlobeProps | ValueOf<typeof cesiumEventProps>>;
type IgnoredProps = "ellipsoid" | "imageryLayers";

expectType<TypeEqual<never, Exclude<UnusedProps, IgnoredProps>>>(true);

it("should be compiled", () => {});
