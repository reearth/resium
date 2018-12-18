import createCesiumComponent from "./core/CesiumComponent";

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
    | Cesium.CameraEventType
    | Cesium.CameraEventType[]
    | { eventType: Cesium.CameraEventType; modifier: Cesium.KeyboardEventModifier }
    | Array<{ eventType: Cesium.CameraEventType; modifier: Cesium.KeyboardEventModifier }>;
  maximumMovementRatio?: number;
  maximumZoomDistance?: number;
  minimumCollisionTerrainHeight?: number;
  minimumPickingTerrainHeight?: number;
  minimumTrackBallHeight?: number;
  minimumZoomDistance?: number;
  rotateEventTypes?:
    | Cesium.CameraEventType
    | Cesium.CameraEventType[]
    | { eventType: Cesium.CameraEventType; modifier: Cesium.KeyboardEventModifier }
    | Array<{ eventType: Cesium.CameraEventType; modifier: Cesium.KeyboardEventModifier }>;
  tiltEventTypes?:
    | Cesium.CameraEventType
    | Cesium.CameraEventType[]
    | { eventType: Cesium.CameraEventType; modifier: Cesium.KeyboardEventModifier }
    | Array<{ eventType: Cesium.CameraEventType; modifier: Cesium.KeyboardEventModifier }>;
  translateEventTypes?:
    | Cesium.CameraEventType
    | Cesium.CameraEventType[]
    | { eventType: Cesium.CameraEventType; modifier: Cesium.KeyboardEventModifier }
    | Array<{ eventType: Cesium.CameraEventType; modifier: Cesium.KeyboardEventModifier }>;
  zoomEventTypes?:
    | Cesium.CameraEventType
    | Cesium.CameraEventType[]
    | { eventType: Cesium.CameraEventType; modifier: Cesium.KeyboardEventModifier }
    | Array<{ eventType: Cesium.CameraEventType; modifier: Cesium.KeyboardEventModifier }>;
}

export interface ScreenSpaceCameraControllerContext {
  scene: Cesium.Scene;
}

const cesiumProps: Array<keyof ScreenSpaceCameraControllerCesiumProps> = [
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
  Cesium.ScreenSpaceCameraController,
  ScreenSpaceCameraControllerCesiumProps,
  ScreenSpaceCameraControllerContext
>({
  name: "ScreenSpaceCameraController",
  create(cprops, props, context) {
    return context.scene.screenSpaceCameraController;
  },
  cesiumProps,
  setCesiumPropsAfterCreate: true,
});

export default ScreenSpaceCameraController;
