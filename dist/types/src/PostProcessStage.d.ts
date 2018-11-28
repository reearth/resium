/// <reference types="react" />
import Cesium from "cesium";
export interface PostProcessStageCesiumProps {
    enabled?: boolean;
    selected?: any[];
}
export interface PostProcessStageCesiumReadonlyProps {
    fragmentShader: string;
    uniforms?: any;
    textureScale?: number;
    forcePowerOfTwo?: boolean;
    sampleMode?: any;
    pixelFormat?: Cesium.PixelFormat;
    pixelDatatype?: any;
    clearColor?: Cesium.Color;
    scissorRectangle?: Cesium.BoundingRectangle;
    name?: string;
}
export interface PostProcessStageProps extends PostProcessStageCesiumProps, PostProcessStageCesiumReadonlyProps {
}
export interface PostProcessStageContext {
    scene: Cesium.Scene;
}
export declare const PostProcessStage: import("react").ForwardRefExoticComponent<PostProcessStageProps & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<any>>>;
export declare const BlackAndWhiteStage: import("react").ForwardRefExoticComponent<import("./core/PostProcessStage").PostProcessStageCesiumProps & {
    gradations?: number | undefined;
} & {
    stages?: any[] | undefined;
} & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<any>>>;
export declare const BlurStage: import("react").ForwardRefExoticComponent<import("./core/PostProcessStage").PostProcessStageCesiumProps & {
    delta?: number | undefined;
    sigma?: number | undefined;
    stepSize?: number | undefined;
} & {
    stages?: any[] | undefined;
} & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<any>>>;
export declare const BrightnessStage: import("react").ForwardRefExoticComponent<import("./core/PostProcessStage").PostProcessStageCesiumProps & {
    brightness?: number | undefined;
} & {
    stages?: any[] | undefined;
} & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<any>>>;
export declare const DepthOfFieldStage: import("react").ForwardRefExoticComponent<import("./core/PostProcessStage").PostProcessStageCesiumProps & {
    focalDistance?: number | undefined;
    delta?: number | undefined;
    sigma?: number | undefined;
    stepSize?: number | undefined;
} & {
    stages?: any[] | undefined;
} & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<any>>>;
export declare const EdgeDetectionStage: import("react").ForwardRefExoticComponent<import("./core/PostProcessStage").PostProcessStageCesiumProps & {
    color?: Cesium.Color | undefined;
    length?: number | undefined;
} & {
    stages?: any[] | undefined;
} & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<any>>>;
export declare const LensFlareStage: import("react").ForwardRefExoticComponent<import("./core/PostProcessStage").PostProcessStageCesiumProps & {
    dirtTexture?: any;
    starTexture?: any;
    intensity?: number | undefined;
    distortion?: number | undefined;
    ghostDispersal?: number | undefined;
    haloWidth?: number | undefined;
    earthRadius?: number | undefined;
} & {
    stages?: any[] | undefined;
} & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<any>>>;
export declare const NightVisionStage: import("react").ForwardRefExoticComponent<import("./core/PostProcessStage").PostProcessStageCesiumProps & {
    color?: Cesium.Color | undefined;
    length?: number | undefined;
    stages?: any[] | undefined;
} & {
    stages?: any[] | undefined;
} & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<any>>>;
export declare const SilhouetteStage: import("react").ForwardRefExoticComponent<import("./core/PostProcessStage").PostProcessStageCesiumProps & {
    color?: Cesium.Color | undefined;
    length?: number | undefined;
    stages?: any[] | undefined;
} & {
    stages?: any[] | undefined;
} & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<any>>>;
export declare const Fxaa: import("react").ForwardRefExoticComponent<import("./core/PostProcessStage").PostProcessStageCesiumProps & {
    stages?: any[] | undefined;
} & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<any>>>;
export default PostProcessStage;
