import type { CylinderGraphics } from "cesium";
import type { TypeEqual } from "ts-expect";
import { expectType } from "ts-expect";
import { it } from "vitest";

import type { Merge, UnusedCesiumProps } from "../core";

import type { cesiumEventProps, CylinderGraphicsProps } from "./CylinderGraphics";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  Merge<CylinderGraphics, CylinderGraphics.ConstructorOptions>,
  CylinderGraphicsProps,
  typeof cesiumEventProps,
  IgnoredProps
>;
type IgnoredProps = never;

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
