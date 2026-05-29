import type { Globe } from "cesium";
import type { TypeEqual } from "ts-expect";
import { expectType } from "ts-expect";
import { it } from "vitest";

import type { UnusedCesiumProps } from "../core";

import type { GlobeProps, cesiumEventProps } from "./Globe";

// Unused prop check
type UnusedProps = UnusedCesiumProps<Globe, GlobeProps, typeof cesiumEventProps, IgnoredProps>;
type IgnoredProps = "ellipsoid" | "imageryLayers";

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
