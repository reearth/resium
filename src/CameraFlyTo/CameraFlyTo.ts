import { createCameraOperation, AssertNever } from "../core";
import { EasingFunction, Camera, Matrix4, Rectangle, Cartesian3 } from "cesium";

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

export type CameraFlyToProps = {
  destination: Cartesian3 | Rectangle;
  convert?: boolean;
  orientation?: any;
  duration?: number;
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
type UnusedProps = Exclude<keyof Parameters<Camera["flyTo"]>[0], keyof CameraFlyToProps>;
type AssertUnusedProps = AssertNever<Exclude<UnusedProps, IgnoredProps>>;

const CameraFlyTo = createCameraOperation<CameraFlyToProps>(
  "CameraFlyTo",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (camera, { cancelFlightOnUnmount, onComplete, onCancel, ...props }) => {
    camera.flyTo({ ...props, complete: onComplete, cancel: onCancel });
  },
);

export default CameraFlyTo;
