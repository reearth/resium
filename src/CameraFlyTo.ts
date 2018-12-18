import Cesium from "cesium";

import createCameraOperation from "./core/CameraOperation";

// @noCesiumElement

/*
@summary
`CameraFlyTo` is a kind of operation of the camera.

When it is mounted, `camera.flyTo(options)` will be execute.

If any property is changed, the current camera flight will be canceled and a new one is executed.

See also: [Camera#flyTo](https://cesiumjs.org/Cesium/Build/Documentation/Camera.html?classFilter=camer#flyTo)
*/

/*
@scope
Inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) components.
*/

export interface CameraFlyToProps {
  destination: Cesium.Cartesian3 | Cesium.Rectangle;
  orientation?: any;
  duration?: number;
  onComplete?: Cesium.Camera.FlightCompleteCallback;
  onCancel?: Cesium.Camera.FlightCancelledCallback;
  endTransform?: Cesium.Matrix4;
  maximumHeight?: number;
  pitchAdjustHeight?: number;
  flyOverLongitude?: number;
  flyOverLongitudeWeight?: number;
  easingFunction?: Cesium.EasingFunction;
  // If true, cancel camera flight if this component is unmounted. Default value is false.
  cancelCameraFlight?: boolean;
}

const CameraFlyTo = createCameraOperation({
  name: "CameraFlyTo",
  cameraOperationStart(camera: Cesium.Camera, props: CameraFlyToProps) {
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
    } = props;

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
  },
});

export default CameraFlyTo;
