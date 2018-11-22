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
  withContext<P & CameraOperationProps, { camera?: Cesium.Camera }>(
    class CameraOperation extends React.PureComponent<
      CameraOperationProps & { cesium: { camera?: Cesium.Camera } } & P
    > {
      public static displayName = name;

      public componentDidMount() {
        if (this.props.cesium.camera) {
          opts.cameraOperationStart(this.props.cesium.camera, this.props);
        }
      }

      public componentDidUpdate(prevProps: Readonly<P>) {
        if (this.props.cesium.camera) {
          this.props.cesium.camera.cancelFlight();
          opts.cameraOperationStart(this.props.cesium.camera, this.props, prevProps);
        }
      }

      public componentWillUnmount() {
        const {
          cancelCameraFlight,
          cesium: { camera },
        } = this.props;
        if (cancelCameraFlight && camera) {
          camera.cancelFlight();
        }
      }

      public render() {
        return null;
      }
    },
  );

export default createCameraOperation;
