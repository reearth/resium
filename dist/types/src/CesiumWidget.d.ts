import React from "react";
import Cesium from "cesium";
export interface CesiumWidgetCesiumProps {
    resolutionScale?: number;
    useDefaultRenderLoop?: boolean;
    targetFrameRate?: number;
}
export interface CesiumWidgetCesiumReadonlyProps {
    clock?: Cesium.Clock;
    imageryProvider?: Cesium.ImageryProvider;
    terrainProvider?: Cesium.TerrainProvider;
    skyBox?: Cesium.SkyBox;
    skyAtmosphere?: Cesium.SkyAtmosphere;
    sceneMode?: Cesium.SceneMode;
    scene3DOnly?: boolean;
    orderIndependentTranslucency?: boolean;
    mapProjection?: Cesium.MapProjection;
    globe?: Cesium.Globe;
    showRenderLoopErrors?: boolean;
    contextOptions?: WebGLContextAttributes;
    creditContainer?: Element | string;
    creditViewport?: Element | string;
    terrainExaggeration?: number;
    shadows?: boolean;
    terrainShadows?: Cesium.ShadowMode;
    requestRenderMode?: boolean;
    maximumRenderTimeChange?: number;
}
export interface CesiumWidgetProps extends CesiumWidgetCesiumProps, CesiumWidgetCesiumReadonlyProps {
    className?: string;
    id?: string;
    style?: React.CSSProperties;
    full?: boolean;
    containerProps?: any;
    children?: React.ReactNode;
}
export interface CesiumWidgetContext {
    cesiumWidget: Cesium.CesiumWidget;
    dataSourceCollection: Cesium.DataSourceCollection;
    entityCollection: Cesium.EntityCollection;
    scene: Cesium.Scene;
    globe: Cesium.Globe;
    camera: Cesium.Camera;
}
declare const CesiumWidget: React.ForwardRefExoticComponent<CesiumWidgetProps & React.RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<Cesium.CesiumWidget>>>;
export default CesiumWidget;
