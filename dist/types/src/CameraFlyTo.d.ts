/// <reference types="react" />
import { EasingFunction, Camera, Cartesian3, Matrix4, Rectangle } from "cesium";
export interface CameraFlyToProps {
    destination: Cartesian3 | Rectangle;
    orientation?: any;
    duration?: number;
    onComplete?: Camera.FlightCompleteCallback;
    onCancel?: Camera.FlightCancelledCallback;
    endTransform?: Matrix4;
    maximumHeight?: number;
    pitchAdjustHeight?: number;
    flyOverLongitude?: number;
    flyOverLongitudeWeight?: number;
    easingFunction?: EasingFunction;
}
declare const CameraFlyTo: import("react").ForwardRefExoticComponent<{
    destination: Cartesian3 | Rectangle;
    orientation?: any;
    duration?: number | undefined;
    onComplete?: Camera.FlightCompleteCallback | undefined;
    onCancel?: Camera.FlightCancelledCallback | undefined;
    endTransform?: Matrix4 | undefined;
    maximumHeight?: number | undefined;
    pitchAdjustHeight?: number | undefined;
    flyOverLongitude?: number | undefined;
    flyOverLongitudeWeight?: number | undefined;
    easingFunction?: EasingFunction | undefined;
} & import("./core/CameraOperation").CameraOperationProps & import("react").RefAttributes<import("react").ComponentType<import(".").WithContextProps<{
    destination: Cartesian3 | Rectangle;
    orientation?: any;
    duration?: number | undefined;
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
export default CameraFlyTo;
