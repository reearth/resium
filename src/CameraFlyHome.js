import PropTypes from "prop-types";

import CameraOperation from "./CameraOperation";

export default class CameraFlyHome extends CameraOperation {

  static propTypes = {
    ...CameraOperation.propTypes,
    duration: PropTypes.number
  }

  cameraOperationStart(camera) {
    const {
      duration
    } = this.props;

    camera.flyHome(duration);
  }

}
