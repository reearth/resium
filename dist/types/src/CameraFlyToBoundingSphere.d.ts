/// <reference types="react" />
import { BoundingSphere, EasingFunction, Camera, HeadingPitchRange, Matrix4 } from "cesium";
export interface CameraFlyToBoundingSphereProps {
    boundingSphere: BoundingSphere;
    duration?: number;
    offset?: HeadingPitchRange;
    onComplete?: Camera.FlightCompleteCallback;
    onCancel?: Camera.FlightCancelledCallback;
    endTransform?: Matrix4;
    maximumHeight?: number;
    pitchAdjustHeight?: number;
    flyOverLongitude?: number;
    flyOverLongitudeWeight?: number;
    easingFunction?: EasingFunction;
}
declare const CameraFlyToBoundingSphere: import("react").ForwardRefExoticComponent<{
    boundingSphere: BoundingSphere;
    duration?: number | undefined;
    offset?: HeadingPitchRange | undefined;
    onComplete?: Camera.FlightCompleteCallback | undefined;
    onCancel?: Camera.FlightCancelledCallback | undefined;
    endTransform?: Matrix4 | undefined;
    maximumHeight?: number | undefined;
    pitchAdjustHeight?: number | undefined;
    flyOverLongitude?: number | undefined;
    flyOverLongitudeWeight?: number | undefined;
    easingFunction?: EasingFunction | undefined;
} & import("./core/CameraOperation").CameraOperationProps & import("react").RefAttributes<import("react").ComponentType<import(".").WithContextProps<{
    boundingSphere: BoundingSphere;
    duration?: number | undefined;
    offset?: HeadingPitchRange | undefined;
    onComplete?: Camera.FlightCompleteCallback | undefined;
    onCancel?: Camera.FlightCancelledCallback | undefined;
    endTransform?: Matrix4 | undefined;
    maximumHeight?: number | undefined;
    pitchAdjustHeight?: number | undefined;
    flyOverLongitude?: number | undefined;
    flyOverLongitudeWeight?: number | undefined;
    easingFunction?: EasingFunction | undefined;
} & import("./core/CameraOperation").CameraOperationProps, {
    camera?: Camera | undefined;
}>>>>;
export default CameraFlyToBoundingSphere;
