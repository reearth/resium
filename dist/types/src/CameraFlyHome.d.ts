/// <reference types="react" />
import { Camera } from "cesium";
export interface CameraFlyHomeProps {
    duration: number;
}
declare const CameraFlyHome: import("react").ForwardRefExoticComponent<{
    duration: number;
} & import("./core/CameraOperation").CameraOperationProps & import("react").RefAttributes<import("react").ComponentType<import("./core/context").WithContextProps<{
    duration: number;
} & import("./core/CameraOperation").CameraOperationProps, {
    camera?: Camera | undefined;
}>>>>;
export default CameraFlyHome;
