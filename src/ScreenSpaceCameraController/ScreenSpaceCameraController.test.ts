import { expectType, TypeEqual } from "ts-expect";
import { ScreenSpaceCameraController } from "cesium";

import { UnusedCesiumProps } from "../core";
import { ScreenSpaceCameraControllerProps } from "./ScreenSpaceCameraController";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  ScreenSpaceCameraController,
  keyof ScreenSpaceCameraControllerProps
>;
type IgnoredProps = never;

expectType<TypeEqual<never, Exclude<UnusedProps, IgnoredProps>>>(true);

it("should be compiled", () => {});
