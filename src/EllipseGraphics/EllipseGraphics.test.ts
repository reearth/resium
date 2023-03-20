import { EllipseGraphics } from "cesium";
import { expectType, TypeEqual } from "ts-expect";
import { it } from "vitest";

import { UnusedCesiumProps, Merge } from "../core";

import { EllipseGraphicsProps, cesiumEventProps } from "./EllipseGraphics";

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
