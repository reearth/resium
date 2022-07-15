import { it } from "vitest";
import { expectType, TypeEqual } from "ts-expect";
import { EllipseGraphics } from "cesium";

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
