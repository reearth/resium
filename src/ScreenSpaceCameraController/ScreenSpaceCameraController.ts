import { ScreenSpaceCameraController as CesiumScreenSpaceCameraController } from "cesium";

import { createCesiumComponent, PickCesiumProps } from "../core";

/*
@summary
`ScreenSpaceCameraController` can change how to operate the camera of the scene.
All properties are applied to single ScreenSpaceCameraController in the scene.
*/

/*
@scope
ScreenSpaceCameraController can be mounted inside[Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) components.
It can not be mounted more than once for each Viewer or CesiumWidget.
*/

export type ScreenSpaceCameraControllerCesiumProps = PickCesiumProps<
  CesiumScreenSpaceCameraController,
  typeof cesiumProps
>;

export type ScreenSpaceCameraControllerProps = ScreenSpaceCameraControllerCesiumProps;

const cesiumProps = [
  "bounceAnimationTime",
  "enableCollisionDetection",
  "enableInputs",
  "enableLook",
  "enableRotate",
  "enableTilt",
  "enableTranslate",
  "enableZoom",
  "zoomFactor",
  "maximumTiltAngle",
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
  "minimumPickingTerrainDistanceWithInertia",
] as const;

const ScreenSpaceCameraController = createCesiumComponent<
  CesiumScreenSpaceCameraController,
  ScreenSpaceCameraControllerProps
>({
  name: "ScreenSpaceCameraController",
  create: context => context.scene?.screenSpaceCameraController,
  cesiumProps,
  setCesiumPropsAfterCreate: true,
});

export default ScreenSpaceCameraController;
