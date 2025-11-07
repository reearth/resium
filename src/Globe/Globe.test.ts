import { Globe } from "cesium";
import { expectType, TypeEqual } from "ts-expect";
import { it } from "vitest";

import { UnusedCesiumProps } from "../core";

import { GlobeProps, cesiumEventProps } from "./Globe";

// Unused prop check
type UnusedProps = UnusedCesiumProps<Globe, GlobeProps, typeof cesiumEventProps, IgnoredProps>;
type IgnoredProps = "ellipsoid" | "imageryLayers";

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
