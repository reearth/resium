import React from "react";
import { Camera } from "cesium";

import { cameraType, sceneType } from "./types";

export interface CameraOperationProps {
  cancelCameraFlight?: boolean;
}

export default abstract class CameraOperation<P = {}, S = {}, SS = any> extends React.PureComponent<
  CameraOperationProps & P,
  S,
  SS
> {
  public static contextTypes = {
    camera: cameraType,
    scene: sceneType,
  };

  public componentDidMount() {
    this.cameraOperationStart(this.camera);
  }

  public componentDidUpdate() {
    this.camera.cancelFlight();
    this.cameraOperationStart(this.camera);
  }

  public componentWillUnmount() {
    const { cancelCameraFlight } = this.props;
    if (cancelCameraFlight) {
      this.camera.cancelFlight();
    }
  }

  public render() {
    return null;
  }

  private get camera() {
    const { camera, scene } = this.context;
    return camera || scene.camera;
  }

  public abstract cameraOperationStart(camera: Camera): void;
}
