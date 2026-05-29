import type { ScreenSpaceCameraController } from "cesium";
import type { TypeEqual } from "ts-expect";
import { expectType } from "ts-expect";
import { it } from "vitest";

import type { UnusedCesiumProps } from "../core";

import type { ScreenSpaceCameraControllerProps } from "./ScreenSpaceCameraController";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  ScreenSpaceCameraController,
  ScreenSpaceCameraControllerProps,
  {},
  IgnoredProps
>;
type IgnoredProps = never;

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
