import { expectType, TypeEqual } from "ts-expect";
import { it } from "vitest";

import { UnusedCesiumProps } from "../core";

import { ModelGraphicsProps, cesiumEventProps, Target } from "./ModelGraphics";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  Target,
  ModelGraphicsProps,
  typeof cesiumEventProps,
  IgnoredProps
>;
type IgnoredProps = never;

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
