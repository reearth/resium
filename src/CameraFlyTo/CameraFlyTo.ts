import { createCameraOperation } from "../core/CameraOperation";
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
  easingFunction?: EasingFunction.Callback;
  // If true, cancel camera flight if this component is unmounted. Default value is false.
  cancelFlightOnUnmount?: boolean;
  // If true, camera flight will be executed only once time.
  once?: boolean;
}

const CameraFlyTo = createCameraOperation<CameraFlyToProps>(
  "CameraFlyTo",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (camera, { ...props }) => {
    camera.flyTo(props);
  },
);

export default CameraFlyTo;
