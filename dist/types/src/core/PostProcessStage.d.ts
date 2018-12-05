/// <reference types="react" />
import Cesium from "cesium";
export interface PostProcessStageCesiumProps {
    enabled?: boolean;
    selected?: any[];
}
export interface PostProcessStageContext {
    scene: Cesium.Scene;
}
export interface PostProcessStage {
    enabled: boolean;
    uniforms: any;
    isDestroyed(): boolean;
    destroy(): void;
}
export declare const createPostProcessStage: <UniformProps, E extends PostProcessStage = any>(opts: {
    name: string;
    props: (keyof UniformProps)[];
    readonlyProps?: (keyof UniformProps)[] | undefined;
    noMount?: boolean | undefined;
    create(props: Readonly<UniformProps & PostProcessStageCesiumProps>, postProcessStages: any): any;
}) => import("react").ForwardRefExoticComponent<import("react").PropsWithoutRef<PostProcessStageCesiumProps & UniformProps & {
    stages?: any[] | undefined;
}> & import("react").RefAttributes<import("./CesiumComponent").CesiumElementHolder<E>>>;
export default createPostProcessStage;
