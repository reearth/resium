import { expectType, TypeEqual } from "ts-expect";
import { Scene } from "cesium";

import { UnusedCesiumProps } from "../core";
import { SceneProps, cesiumEventProps, SceneOtherProps } from "./Scene";

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
