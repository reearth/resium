/// <reference types="react" />
import Cesium, { Scene as CesiumScene } from "cesium";
export interface SceneCesiumProps {
    backgroundColor?: Cesium.Color;
    completeMorphOnUserInput?: boolean;
    debugCommandFilter?: (command: any) => boolean;
    debugShowCommands?: boolean;
    debugShowDepthFrustum?: number;
    debugShowFramesPerSecond?: boolean;
    debugShowFrustumPlanes?: boolean;
    debugShowFrustums?: boolean;
    eyeSeparation?: number;
    farToNearRatio?: number;
    focalLength?: number;
    fog?: Cesium.Fog;
    fxaa?: boolean;
    globe?: Cesium.Globe;
    highDynamicRange?: boolean;
    imagerySplitPosition?: number;
    invertClassification?: boolean;
    invertClassificationColor?: Cesium.Color;
    logarithmicDepthBuffer?: number;
    logarithmicDepthFarToNearRatio?: number;
    mapMode2D?: boolean;
    maximumRenderTimeChange?: number;
    minimumDisableDepthTestDistance?: number;
    mode?: Cesium.SceneMode;
    moon?: Cesium.Moon;
    morphTime?: number;
    nearToFarDistance2D?: number;
    pickTranslucentDepth?: boolean;
    requestRenderMode?: boolean;
    rethrowRenderErrors?: boolean;
    shadowMap?: Cesium.ShadowMap;
    skyAtmosphere?: Cesium.SkyAtmosphere;
    skyBox?: Cesium.SkyBox;
    sun?: Cesium.Sun;
    sunBloom?: boolean;
    terrainExaggeration?: number;
    terrainProvider?: Cesium.TerrainProvider;
    useDepthPicking?: boolean;
    useWebVR?: boolean;
}
export interface SceneCesiumEvents {
    onMorphComplete?: () => void;
    onMorphStart?: () => void;
    onPostRender?: () => void;
    onPreRender?: () => void;
    onPreUpdate?: () => void;
    onRenderError?: () => void;
    onTerrainProviderChange?: () => void;
}
export interface SceneProps extends SceneCesiumProps, SceneCesiumEvents {
    children?: React.ReactNode;
    morph?: number;
}
export interface SceneContext {
    scene: CesiumScene;
}
declare const Scene: import("react").ForwardRefExoticComponent<SceneProps & import("react").RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<Cesium.Scene>>>;
export default Scene;
