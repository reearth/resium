import React from "react";
import { Camera } from "cesium";
import { withContext } from "./context";

export interface CameraOperationProps {
  cancelCameraFlight?: boolean;
}

const createCameraOperation = <P>(opts: {
  name: string;
  cameraOperationStart: (camera: Camera, props: Readonly<P>, prevProps?: Readonly<P>) => void;
}) =>
  withContext<P & CameraOperationProps, { camera: Cesium.Camera }>(
    class CameraOperation extends React.PureComponent<
      CameraOperationProps & { cesium: { camera: Cesium.Camera } } & P
    > {
      public static displayName = name;

      public componentDidMount() {
        opts.cameraOperationStart(this.props.cesium.camera, this.props);
      }

      public componentDidUpdate(prevProps: Readonly<P>) {
        this.props.cesium.camera.cancelFlight();
        opts.cameraOperationStart(this.props.cesium.camera, this.props, prevProps);
      }

      public componentWillUnmount() {
        const { cancelCameraFlight } = this.props;
        if (cancelCameraFlight) {
          this.props.cesium.camera.cancelFlight();
        }
      }

      public render() {
        return null;
      }
    },
  );

export default createCameraOperation;
