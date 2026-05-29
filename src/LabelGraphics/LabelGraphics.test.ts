import type { LabelGraphics } from "cesium";
import type { TypeEqual } from "ts-expect";
import { expectType } from "ts-expect";
import { it } from "vitest";

import type { UnusedCesiumProps, Merge } from "../core";

import type { LabelGraphicsProps, cesiumEventProps } from "./LabelGraphics";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  Merge<LabelGraphics, LabelGraphics.ConstructorOptions>,
  LabelGraphicsProps,
  typeof cesiumEventProps,
  IgnoredProps
>;
type IgnoredProps = never;

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
