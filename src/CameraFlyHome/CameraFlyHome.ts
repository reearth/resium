import { createCameraOperation } from "../core";

// @noCesiumElement

/*
@summary
`CameraFlyHome` is a kind of operation of the camera.

When it is mounted, `camera.flyHome(duration)` will be execute.

If any property is changed, the current camera flight will be canceled and a new one is executed.

See also: [Camera#flyHome](https://cesium.com/docs/cesiumjs-ref-doc/Camera.html?classFilter=camer#flyHome)
*/

/*
@scope
Inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) components.
*/

export type CameraFlyHomeProps = {
  /** Duration of camera flight (second) */
  duration: number;
  /** If true, cancel camera flight if this component is unmounted. Default value is false. */
  cancelFlightOnUnmount?: boolean;
  /** If true, camera flight will be executed only once time. */
  once?: boolean;
};

const CameraFlyHome = createCameraOperation<CameraFlyHomeProps>(
  "CameraFlyHome",
  (camera, { duration }) => {
    camera.flyHome(duration);
  },
);

export default CameraFlyHome;
