import { createCameraOperation } from "../core/CameraOperation";

// @noCesiumElement

/*
@summary
`CameraFlyToBoundingSphere` is a kind of operation of the camera.

When it is mounted, `camera.flyToBoundingSphere(boundingSphere, options)` will be execute.

If any property is changed, the current camera flight will be canceled and a new one is executed.

See also: [Camera#flyToBoundingSphere](https://cesiumjs.org/Cesium/Build/Documentation/Camera.html?classFilter=camer#flyToBoundingSphere)
*/

/*
@scope
Inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) components.
*/

export interface CameraFlyToBoundingSphereProps {
  boundingSphere: Cesium.BoundingSphere;
  duration?: number;
  offset?: Cesium.HeadingPitchRange;
  onComplete?: Cesium.Camera.FlightCompleteCallback;
  onCancel?: Cesium.Camera.FlightCancelledCallback;
  endTransform?: Cesium.Matrix4;
  maximumHeight?: number;
  pitchAdjustHeight?: number;
  flyOverLongitude?: number;
  flyOverLongitudeWeight?: number;
  easingFunction?: Cesium.EasingFunction;
  // If true, cancel camera flight if this component is unmounted. Default value is false.
  cancelFlightOnUnmount?: boolean;
  // If true, camera flight will be executed only once time.
  once?: boolean;
}

const CameraFlyToBoundingSphere = createCameraOperation<CameraFlyToBoundingSphereProps>(
  "CameraFlyToBoundingSphere",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (camera, { cancelFlightOnUnmount, boundingSphere, ...props }) => {
    camera.flyToBoundingSphere(boundingSphere, props);
  },
);

export default CameraFlyToBoundingSphere;
