import {
  ScreenSpaceCameraController as CesiumScreenSpaceCameraController,
  CameraEventType,
  KeyboardEventModifier,
  Scene,
} from "cesium";

import { createCesiumComponent } from "../core/component";

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

export interface ScreenSpaceCameraControllerCesiumProps {
  bounceAnimationTime?: number;
  enableCollisionDetection?: boolean;
  enableInputs?: boolean;
  enableLook?: boolean;
  enableRotate?: boolean;
  enableTilt?: boolean;
  enableTranslate?: boolean;
  enableZoom?: boolean;
  inertiaSpin?: number;
  inertiaTranslate?: number;
  inertiaZoom?: number;
  lookEventTypes?:
    | CameraEventType
    | CameraEventType[]
    | { eventType: CameraEventType; modifier: KeyboardEventModifier }
    | { eventType: CameraEventType; modifier: KeyboardEventModifier }[];
  maximumMovementRatio?: number;
  maximumZoomDistance?: number;
  minimumCollisionTerrainHeight?: number;
  minimumPickingTerrainHeight?: number;
  minimumTrackBallHeight?: number;
  minimumZoomDistance?: number;
  rotateEventTypes?:
    | CameraEventType
    | CameraEventType[]
    | { eventType: CameraEventType; modifier: KeyboardEventModifier }
    | { eventType: CameraEventType; modifier: KeyboardEventModifier }[];
  tiltEventTypes?:
    | CameraEventType
    | CameraEventType[]
    | { eventType: CameraEventType; modifier: KeyboardEventModifier }
    | { eventType: CameraEventType; modifier: KeyboardEventModifier }[];
  translateEventTypes?:
    | CameraEventType
    | CameraEventType[]
    | { eventType: CameraEventType; modifier: KeyboardEventModifier }
    | { eventType: CameraEventType; modifier: KeyboardEventModifier }[];
  zoomEventTypes?:
    | CameraEventType
    | CameraEventType[]
    | { eventType: CameraEventType; modifier: KeyboardEventModifier }
    | { eventType: CameraEventType; modifier: KeyboardEventModifier }[];
}

const cesiumProps: (keyof ScreenSpaceCameraControllerCesiumProps)[] = [
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
];

const ScreenSpaceCameraController = createCesiumComponent<
  CesiumScreenSpaceCameraController,
  ScreenSpaceCameraControllerCesiumProps,
  {
    scene?: Scene;
  }
>({
  name: "ScreenSpaceCameraController",
  create: context => context.scene?.screenSpaceCameraController,
  cesiumProps,
  setCesiumPropsAfterCreate: true,
});

export default ScreenSpaceCameraController;
