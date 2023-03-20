import { expectType, TypeEqual } from "ts-expect";
import { it } from "vitest";

import { UnusedCesiumProps } from "../core";

import { WallGraphicsProps, cesiumEventProps, Target } from "./WallGraphics";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  Target,
  WallGraphicsProps,
  typeof cesiumEventProps,
  IgnoredProps
>;
type IgnoredProps = never;

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
