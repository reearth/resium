import { BoundingSphere, EasingFunction, Camera, HeadingPitchRange, Matrix4 } from "cesium";

import createCameraOperation from "./core/CameraOperation";

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

const CameraFlyToBoundingSphere = createCameraOperation({
  name: "CameraFlyToBoundingSphere",
  cameraOperationStart(camera: Camera, props: CameraFlyToBoundingSphereProps) {
    const {
      boundingSphere,
      offset,
      duration,
      onComplete,
      onCancel,
      endTransform,
      maximumHeight,
      pitchAdjustHeight,
      flyOverLongitude,
      flyOverLongitudeWeight,
      easingFunction,
    } = props;

    camera.flyToBoundingSphere(boundingSphere, {
      offset,
      duration,
      complete: onComplete,
      cancel: onCancel,
      endTransform,
      maximumHeight,
      pitchAdjustHeight,
      flyOverLongitude,
      flyOverLongitudeWeight,
      easingFunction,
    });
  },
});

export default CameraFlyToBoundingSphere;
