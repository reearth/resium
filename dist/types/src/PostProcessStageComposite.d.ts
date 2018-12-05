/// <reference types="react" />
import Cesium from "cesium";
export interface PostProcessStageCompositeCesiumProps {
    enabled?: boolean;
    selected?: any[];
}
export interface PostProcessStageCompositeCesiumReadonlyProps {
    stages: any[];
    inputPreviousStageTexture?: boolean;
    name?: string;
    uniforms?: any;
}
export interface PostProcessStageCompositeProps extends PostProcessStageCompositeCesiumProps, PostProcessStageCompositeCesiumReadonlyProps {
}
export interface PostProcessStageCompositeContext {
    scene?: Cesium.Scene;
}
export declare const PostProcessStageComposite: import("react").ForwardRefExoticComponent<PostProcessStageCompositeProps & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<any>>>;
export declare const AmbientOcclusion: import("react").ForwardRefExoticComponent<import("./core/PostProcessStage").PostProcessStageCesiumProps & {
    intensity?: number | undefined;
    bias?: number | undefined;
    lengthCap?: number | undefined;
    stepSize?: number | undefined;
    frustumLength?: number | undefined;
    ambientOcclusionOnly?: boolean | undefined;
    delta?: number | undefined;
    sigma?: number | undefined;
} & {
    stages?: any[] | undefined;
} & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<any>>>;
export declare const Bloom: import("react").ForwardRefExoticComponent<import("./core/PostProcessStage").PostProcessStageCesiumProps & {
    contrast?: number | undefined;
    brightness?: number | undefined;
    glowOnly?: boolean | undefined;
    delta?: number | undefined;
    sigma?: number | undefined;
    stepSize?: number | undefined;
} & {
    stages?: any[] | undefined;
} & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<any>>>;
export default PostProcessStageComposite;
