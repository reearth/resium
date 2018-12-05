/// <reference types="cesium" />
/// <reference types="react" />
export interface CameraCesiumProps {
    position?: Cesium.Cartesian3;
    direction?: Cesium.Cartesian3;
    up?: Cesium.Cartesian3;
    right?: Cesium.Cartesian3;
    frustum?: Cesium.Frustum;
    defaultMoveAmount?: number;
    defaultLookAmount?: number;
    defaultRotateAmount?: number;
    defaultZoomAmount?: number;
    constrainedAxis?: Cesium.Cartesian3;
    maximumTranslateFactor?: number;
    maximumZoomFactor?: number;
}
export interface CameraCesiumEventProps {
    onChange?: (areaPercentage: number) => void;
    onMoveEnd?: () => void;
    onMoveStart?: () => void;
}
export interface CameraProps extends CameraCesiumProps, CameraCesiumEventProps {
}
export interface CameraContext {
    scene: Cesium.Scene;
}
declare const Camera: import("react").ForwardRefExoticComponent<CameraProps & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<import("cesium").Camera>>>;
export default Camera;
