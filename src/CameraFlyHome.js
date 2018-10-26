import PropTypes from "prop-types";

import CameraOperation from "./core/CameraOperation";

export default class CameraFlyHome extends CameraOperation {
  static propTypes = {
    ...CameraOperation.propTypes,
    duration: PropTypes.number,
  };

  cameraOperationStart(camera) {
    const { duration } = this.props;

    camera.flyHome(duration);
  }
}
