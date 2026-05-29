import type { Scene } from "cesium";
import type { TypeEqual } from "ts-expect";
import { expectType } from "ts-expect";
import { it } from "vitest";

import type { UnusedCesiumProps } from "../core";

import type { SceneProps, cesiumEventProps, SceneOtherProps } from "./Scene";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  Scene,
  Omit<SceneProps, keyof SceneOtherProps>,
  typeof cesiumEventProps,
  IgnoredProps
>;
type IgnoredProps = "postProcessStages" | "mode" | "debugCommandFilter" | "mapMode2D";

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
