import { expectType, TypeEqual } from "ts-expect";
import { it } from "vitest";

import { UnusedCesiumProps } from "../core";

import { EllipsoidGraphicsProps, cesiumEventProps, Target } from "./EllipsoidGraphics";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  Target,
  EllipsoidGraphicsProps,
  typeof cesiumEventProps,
  IgnoredProps
>;
type IgnoredProps = never;

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
