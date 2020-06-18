import { createCameraOperation, AssertNever } from "../core";
import { BoundingSphere, HeadingPitchRange, Camera, Matrix4, EasingFunction } from "cesium";

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

export type CameraFlyToBoundingSphereProps = {
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
  easingFunction?: EasingFunction.Callback;
  // If true, cancel camera flight if this component is unmounted. Default value is false.
  cancelFlightOnUnmount?: boolean;
  // If true, camera flight will be executed only once time.
  once?: boolean;
};

// Unused prop check
// complete, cancel: prop name changed
type IgnoredProps = "complete" | "cancel";
type UnusedProps = Exclude<
  keyof Parameters<Camera["flyToBoundingSphere"]>[1],
  keyof CameraFlyToBoundingSphereProps
>;
type AssertUnusedProps = AssertNever<Exclude<UnusedProps, IgnoredProps>>;

const CameraFlyToBoundingSphere = createCameraOperation<CameraFlyToBoundingSphereProps>(
  "CameraFlyToBoundingSphere",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (camera, { cancelFlightOnUnmount, boundingSphere, onComplete, onCancel, ...props }) => {
    camera.flyToBoundingSphere(boundingSphere, {
      ...props,
      complete: onComplete,
      cancel: onCancel,
    });
  },
);

export default CameraFlyToBoundingSphere;
