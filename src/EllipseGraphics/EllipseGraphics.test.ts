import type { EllipseGraphics } from "cesium";
import type { TypeEqual } from "ts-expect";
import { expectType } from "ts-expect";
import { it } from "vitest";

import type { UnusedCesiumProps, Merge } from "../core";

import type { EllipseGraphicsProps, cesiumEventProps } from "./EllipseGraphics";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  Merge<EllipseGraphics, EllipseGraphics.ConstructorOptions>,
  EllipseGraphicsProps,
  typeof cesiumEventProps,
  IgnoredProps
>;
type IgnoredProps = never;

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
