import { expectType, TypeEqual } from "ts-expect";
import { it } from "vitest";

import { UnusedCesiumProps } from "../core";

import { PathGraphicsProps, cesiumEventProps, Target } from "./PathGraphics";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  Target,
  PathGraphicsProps,
  typeof cesiumEventProps,
  IgnoredProps
>;
type IgnoredProps = never;

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
