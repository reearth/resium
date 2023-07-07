import { expectType, TypeEqual } from "ts-expect";
import { it } from "vitest";

import { UnusedCesiumProps } from "../core";

import { ViewerProps, cesiumEventProps, Target, ViewerOtherProps } from "./Viewer";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  Target,
  Omit<ViewerProps, keyof ViewerOtherProps>,
  typeof cesiumEventProps,
  IgnoredProps
>;
type IgnoredProps = "contextOptions" | "terrainProvider"; // contextOptions is actually used

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
