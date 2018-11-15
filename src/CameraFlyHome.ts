import { Camera } from "cesium";

import createCameraOperation from "./core/CameraOperation";

export interface CameraFlyHomeProps {
  duration: number;
}

const CameraFlyHome = createCameraOperation({
  name: "CameraFlyHome",
  cameraOperationStart(camera: Camera, props: CameraFlyHomeProps) {
    camera.flyHome(props.duration);
  },
});

export default CameraFlyHome;
