/// <reference types="cesium" />
/// <reference types="react" />
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
    lookEventTypes?: Cesium.CameraEventType | Cesium.CameraEventType[] | {
        eventType: Cesium.CameraEventType;
        modifier: Cesium.KeyboardEventModifier;
    } | Array<{
        eventType: Cesium.CameraEventType;
        modifier: Cesium.KeyboardEventModifier;
    }>;
    maximumMovementRatio?: number;
    maximumZoomDistance?: number;
    minimumCollisionTerrainHeight?: number;
    minimumPickingTerrainHeight?: number;
    minimumTrackBallHeight?: number;
    minimumZoomDistance?: number;
    rotateEventTypes?: Cesium.CameraEventType | Cesium.CameraEventType[] | {
        eventType: Cesium.CameraEventType;
        modifier: Cesium.KeyboardEventModifier;
    } | Array<{
        eventType: Cesium.CameraEventType;
        modifier: Cesium.KeyboardEventModifier;
    }>;
    tiltEventTypes?: Cesium.CameraEventType | Cesium.CameraEventType[] | {
        eventType: Cesium.CameraEventType;
        modifier: Cesium.KeyboardEventModifier;
    } | Array<{
        eventType: Cesium.CameraEventType;
        modifier: Cesium.KeyboardEventModifier;
    }>;
    translateEventTypes?: Cesium.CameraEventType | Cesium.CameraEventType[] | {
        eventType: Cesium.CameraEventType;
        modifier: Cesium.KeyboardEventModifier;
    } | Array<{
        eventType: Cesium.CameraEventType;
        modifier: Cesium.KeyboardEventModifier;
    }>;
    zoomEventTypes?: Cesium.CameraEventType | Cesium.CameraEventType[] | {
        eventType: Cesium.CameraEventType;
        modifier: Cesium.KeyboardEventModifier;
    } | Array<{
        eventType: Cesium.CameraEventType;
        modifier: Cesium.KeyboardEventModifier;
    }>;
}
export interface ScreenSpaceCameraControllerContext {
    scene: Cesium.Scene;
}
declare const ScreenSpaceCameraController: import("react").ForwardRefExoticComponent<ScreenSpaceCameraControllerCesiumProps & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<import("cesium").ScreenSpaceCameraController>>>;
export default ScreenSpaceCameraController;
