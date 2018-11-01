import { EasingFunction, Camera, Cartesian3, Matrix4, Rectangle } from "cesium";

import CameraOperation from "./core/CameraOperation";

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

export default class CameraFlyTo extends CameraOperation<CameraFlyToProps> {
  public cameraOperationStart(camera: Camera) {
    const {
      destination,
      orientation,
      duration,
      onComplete,
      onCancel,
      endTransform,
      maximumHeight,
      pitchAdjustHeight,
      flyOverLongitude,
      flyOverLongitudeWeight,
      easingFunction,
    } = this.props;

    camera.flyTo({
      destination,
      orientation,
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
  }
}
