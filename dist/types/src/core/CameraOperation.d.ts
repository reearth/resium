import React from "react";
import { Camera } from "cesium";
export interface CameraOperationProps {
    cancelCameraFlight?: boolean;
}
declare const createCameraOperation: <P>(opts: {
    name: string;
    cameraOperationStart: (camera: Camera, props: Readonly<P>, prevProps?: Readonly<P> | undefined) => void;
}) => React.ForwardRefExoticComponent<React.PropsWithoutRef<P & CameraOperationProps> & React.RefAttributes<React.ComponentType<import("./context").WithContextProps<P & CameraOperationProps, {
    camera?: Camera | undefined;
}>>>>;
export default createCameraOperation;
