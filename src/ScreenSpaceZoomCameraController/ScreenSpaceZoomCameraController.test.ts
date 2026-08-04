import type { ScreenSpaceZoomCameraController } from "cesium";
import type { TypeEqual } from "ts-expect";
import { expectType } from "ts-expect";
import { it } from "vitest";

import type { UnusedCesiumProps } from "../core";

import type { ScreenSpaceZoomCameraControllerOtherProps, ScreenSpaceZoomCameraControllerProps } from "./ScreenSpaceZoomCameraController";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  ScreenSpaceZoomCameraController,
  Omit<ScreenSpaceZoomCameraControllerProps, keyof ScreenSpaceZoomCameraControllerOtherProps>,
  {},
  IgnoredProps
>;
// pickWorldPosition is a callback property, so it is not part of CesiumPureProps
// even though the component forwards it.
type IgnoredProps = "pickWorldPosition";

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
