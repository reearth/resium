import { expectType, TypeEqual } from "ts-expect";
import { it } from "vitest";

import { UnusedCesiumProps } from "../core";

import { PointGraphicsProps, cesiumEventProps, Target } from "./PointGraphics";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  Target,
  PointGraphicsProps,
  typeof cesiumEventProps,
  IgnoredProps
>;
type IgnoredProps = never;

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
