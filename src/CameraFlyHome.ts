import CameraOperation from "./core/CameraOperation";
import { Camera } from "cesium";

export interface CameraFlyHomeProps {
  duration: number;
}

export default class CameraFlyHome extends CameraOperation<CameraFlyHomeProps> {
  public cameraOperationStart(camera: Camera) {
    const { duration } = this.props;
    camera.flyHome(duration);
  }
}
