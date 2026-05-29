import type { TypeEqual } from "ts-expect";
import { expectType } from "ts-expect";
import { it } from "vitest";

import type { UnusedCesiumProps } from "../core";

import type { ImageryLayerProps, Target } from "./ImageryLayer";

// Unused prop check
type UnusedProps = UnusedCesiumProps<Target, ImageryLayerProps, {}, IgnoredProps>;
// imageryProvider is handled separately, errorEvent and readyEvent are readonly events
type IgnoredProps = "imageryProvider" | "errorEvent" | "readyEvent";

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
