import type { TypeEqual } from "ts-expect";
import { expectType } from "ts-expect";
import { it } from "vitest";

import type { UnusedCesiumProps } from "../core";

import type { PolygonGraphicsProps, cesiumEventProps, Target } from "./PolygonGraphics";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  Target,
  PolygonGraphicsProps,
  typeof cesiumEventProps,
  IgnoredProps
>;
type IgnoredProps = never;

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
