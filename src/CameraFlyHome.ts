import { Camera } from "cesium";

import createCameraOperation from "./core/CameraOperation";

// @noCesiumElement

/*
@summary
`CameraFlyHome` is a kind of operation of the camera.

When it is mounted, `camera.flyHome(duration)` will be execute.

If any property is changed, the current camera flight will be canceled and a new one is executed.

See also: [Camera#flyHome](https://cesiumjs.org/Cesium/Build/Documentation/Camera.html?classFilter=camer#flyHome)
*/

/*
@scope
Inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) components.
*/

export interface CameraFlyHomeProps {
  // Duration of camera flight (second)
  duration: number;
  // If true, cancel camera flight if this component is unmounted. Default value is false.
  cancelCameraFlight?: boolean;
}

const CameraFlyHome = createCameraOperation({
  name: "CameraFlyHome",
  cameraOperationStart(camera: Camera, props: CameraFlyHomeProps) {
    camera.flyHome(props.duration);
  },
});

export default CameraFlyHome;
