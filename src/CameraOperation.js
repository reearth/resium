import React from "react";
import PropTypes from "prop-types";

import { cameraType, sceneType } from "./types";

// abstract
export default class CameraOperation extends React.PureComponent {

  static propTypes = {
    continueCameraFlight: PropTypes.bool
  }

  static contextTypes = {
    camera: cameraType,
    scene: sceneType
  }

  componentDidMount() {
    this.cameraOperationStart(this.camera);
  }

  componentDidUpdate() {
    this.camera.cancelFlight();
    this.cameraOperationStart(this.camera);
  }

  componentWillUnmount() {
    const { continueCameraFlight } = this.props;
    if (!continueCameraFlight) {
      this.camera.cancelFlight();
    }
  }

  get camera() {
    const { camera, scene } = this.context;
    return camera || scene.camera;
  }

  render() {
    return null;
  }

}
