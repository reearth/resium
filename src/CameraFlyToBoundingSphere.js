import PropTypes from "prop-types";

import CameraOperation from "./CameraOperation";

export default class CameraFlyToBoundingSphere extends CameraOperation {
  static propTypes = {
    ...CameraOperation.propTypes,
    boundingSphere: PropTypes.any.isRequired,
    duration: PropTypes.number,
    easingFunction: PropTypes.any,
    endTransform: PropTypes.any,
    flyOverLongitude: PropTypes.number,
    flyOverLongitudeWeight: PropTypes.number,
    maximumHeight: PropTypes.number,
    offset: PropTypes.any,
    onCancel: PropTypes.func,
    onComplete: PropTypes.func,
    pitchAdjustHeight: PropTypes.number,
  };

  cameraOperationStart(camera) {
    const {
      boundingSphere,
      offset,
      duration,
      onComplete,
      onCancel,
      endTransform,
      maximumHeight,
      pitchAdjustHeight,
      flyOverLongitude,
      flyOverLongitudeWeight,
      easingFunction,
    } = this.props;

    camera.flyToBoundingSphere(boundingSphere, {
      offset,
      duration,
      complete: onComplete,
      cancel: onCancel,
      endTransform,
      maximumHeight,
      pitchAdjustHeight,
      flyOverLongitude,
      flyOverLongitudeWeight,
      easingFunction,
    });
  }
}
