import PropTypes from "prop-types";

import CameraOperation from "./CameraOperation";

export default class CameraFlyTo extends CameraOperation {

  static propTypes = {
    ...CameraOperation.propTypes,
    destination: PropTypes.any.isRequired,
    duration: PropTypes.number,
    easingFunction: PropTypes.any,
    endTransform: PropTypes.any,
    flyOverLongitude: PropTypes.number,
    flyOverLongitudeWeight: PropTypes.number,
    maximumHeight: PropTypes.number,
    onCancel: PropTypes.func,
    onComplete: PropTypes.func,
    orientation: PropTypes.object,
    pitchAdjustHeight: PropTypes.number
  }

  cameraOperationStart(camera) {
    const {
      destination,
      orientation,
      duration,
      onComplete,
      onCancel,
      endTransform,
      maximumHeight,
      pitchAdjustHeight,
      flyOverLongitude,
      flyOverLongitudeWeight,
      easingFunction
    } = this.props;

    camera.flyTo({
      destination,
      orientation,
      duration,
      complete: onComplete,
      cancel: onCancel,
      endTransform,
      maximumHeight,
      pitchAdjustHeight,
      flyOverLongitude,
      flyOverLongitudeWeight,
      easingFunction
    });
  }

}
