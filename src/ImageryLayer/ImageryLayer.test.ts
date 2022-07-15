import { it } from "vitest";
import { expectType, TypeEqual } from "ts-expect";

import { UnusedCesiumProps } from "../core";
import { ImageryLayerProps, Target } from "./ImageryLayer";

// Unused prop check
type UnusedProps = UnusedCesiumProps<Target, ImageryLayerProps, {}, IgnoredProps>;
type IgnoredProps = "imageryProvider";

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
