/// <reference types="react" />
import Cesium from "cesium";
export interface TimeDynamicPointCloudCesiunProps {
    clock?: Cesium.Clock;
    intervals: Cesium.TimeIntervalCollection;
    show?: boolean;
    modelMatrix?: Cesium.Matrix4;
    shadows?: Cesium.ShadowMode;
    maximumMemoryUsage?: number;
    style?: any;
    clippingPlanes?: any;
}
export interface TimeDynamicPointCloudCesiunReadonlyProps {
    shading?: {
        attenuation?: boolean;
        geometricErrorScale?: number;
        maximumAttenuation?: number;
        baseResolution?: number;
        eyeDomeLighting?: boolean;
        eyeDomeLightingStrength?: number;
        eyeDomeLightingRadius?: number;
    };
}
export interface TimeDynamicPointCloudProps extends TimeDynamicPointCloudCesiunProps, TimeDynamicPointCloudCesiunReadonlyProps {
    onReady?: (pointCloud: any) => void;
    onFrameChange?: (pointCloud: any) => void;
}
export interface TimeDynamicPointCloudContext {
    primitiveCollection?: Cesium.PrimitiveCollection;
    cesiumWidget?: Cesium.CesiumWidget;
}
declare const TimeDynamicPointCloud: import("react").ForwardRefExoticComponent<TimeDynamicPointCloudProps & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<any>>>;
export default TimeDynamicPointCloud;
