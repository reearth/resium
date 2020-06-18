import { ScreenSpaceCameraController as CesiumScreenSpaceCameraController } from "cesium";

import { createCesiumComponent, PickCesiumProps, UnusedCesiumProps, AssertNever } from "../core";

/*
@summary
`ScreenSpaceCameraController` can change how to operate the camera of the scene.
All properties are applied to single ScreenSpaceCameraController in the scene.
*/

/*
@scope
ScreenSpaceCameraController is available inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) components.
It can not be used more than once for each Viewer or CesiumWidget.
*/

export type ScreenSpaceCameraControllerCesiumProps = PickCesiumProps<
  CesiumScreenSpaceCameraController,
  typeof cesiumProps
>;

const cesiumProps = [
  "bounceAnimationTime",
  "enableCollisionDetection",
  "enableInputs",
  "enableLook",
  "enableRotate",
  "enableTilt",
  "enableTranslate",
  "enableZoom",
  "inertiaSpin",
  "inertiaTranslate",
  "inertiaZoom",
  "lookEventTypes",
  "maximumMovementRatio",
  "maximumZoomDistance",
  "minimumCollisionTerrainHeight",
  "minimumPickingTerrainHeight",
  "minimumTrackBallHeight",
  "minimumZoomDistance",
  "rotateEventTypes",
  "tiltEventTypes",
  "translateEventTypes",
  "zoomEventTypes",
] as const;

// Unused prop check
type IgnoredProps = never;
type UnusedProps = UnusedCesiumProps<CesiumScreenSpaceCameraController, typeof cesiumProps>;
type AssertUnusedProps = AssertNever<Exclude<UnusedProps, IgnoredProps>>;

const ScreenSpaceCameraController = createCesiumComponent<
  CesiumScreenSpaceCameraController,
  ScreenSpaceCameraControllerCesiumProps
>({
  name: "ScreenSpaceCameraController",
  create: context => context.scene?.screenSpaceCameraController,
  cesiumProps,
  setCesiumPropsAfterCreate: true,
});

export default ScreenSpaceCameraController;
