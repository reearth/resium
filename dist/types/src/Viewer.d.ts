import React from "react";
import Cesium, { Viewer as CesiumViewer } from "cesium";
export interface ViewerCesiumProps {
    terrainProvider?: Cesium.TerrainProvider;
    terrainShadows?: Cesium.ShadowMode;
    clockTrackedDataSource?: Cesium.DataSource;
    targetFrameRate?: number;
    useDefaultRenderLoop?: boolean;
    resolutionScale?: number;
    allowDataSourcesToSuspendAnimation?: boolean;
    trackedEntity?: Cesium.Entity;
    selectedEntity?: Cesium.Entity;
    shadows?: boolean;
}
export interface ViewerCesiumReadonlyProps {
    animation?: boolean;
    baseLayerPicker?: boolean;
    fullscreenButton?: boolean;
    vrButton?: boolean;
    geocoder?: boolean;
    homeButton?: boolean;
    infoBox?: boolean;
    sceneModePicker?: boolean;
    selectionIndicator?: boolean;
    timeline?: boolean;
    navigationHelpButton?: boolean;
    navigationInstructionsInitiallyVisible?: boolean;
    scene3DOnly?: boolean;
    shouldAnimate?: boolean;
    clockViewModel?: Cesium.ClockViewModel;
    selectedImageryProviderViewModel?: Cesium.ProviderViewModel;
    imageryProviderViewModels?: Cesium.ProviderViewModel[];
    selectedTerrainProviderViewModel?: Cesium.ProviderViewModel;
    terrainProviderViewModels?: Cesium.ProviderViewModel[];
    imageryProvider?: Cesium.ImageryProvider;
    skyBox?: Cesium.SkyBox;
    skyAtmosphere?: Cesium.SkyAtmosphere;
    fullscreenElement?: Element | string;
    showRenderLoopErrors?: boolean;
    automaticallyTrackDataSourceClocks?: boolean;
    contextOptions?: any;
    sceneMode?: Cesium.SceneMode;
    mapProjection?: Cesium.MapProjection;
    globe?: Cesium.Globe;
    orderIndependentTranslucency?: boolean;
    creditContainer?: Element | string;
    creditViewport?: Element | string;
    dataSources?: Cesium.DataSourceCollection;
    terrainExaggeration?: number;
    mapMode2D?: Cesium.MapMode2D;
    projectionPicker?: boolean;
    requestRenderMode?: boolean;
    maximumRenderTimeChange?: number;
}
export interface ViewerCesiumEvents {
    onSelectedEntityChange?: () => void;
    onTrackedEntityChange?: () => void;
}
export interface ViewerProps extends ViewerCesiumProps, ViewerCesiumReadonlyProps, ViewerCesiumEvents {
    className?: string;
    id?: string;
    style?: React.CSSProperties;
    full?: boolean;
    containerProps?: any;
    extend?: CesiumViewer.ViewerMixin[] | CesiumViewer.ViewerMixin;
    children?: React.ReactNode;
}
export interface ViewerContext {
    viewer: CesiumViewer;
    cesiumWidget: Cesium.CesiumWidget;
    dataSourceCollection: Cesium.DataSourceCollection;
    entityCollection: Cesium.EntityCollection;
    scene: Cesium.Scene;
    globe: Cesium.Globe;
    camera: Cesium.Camera;
}
declare const Viewer: React.ForwardRefExoticComponent<ViewerProps & React.RefAttributes<import("./core/CesiumComponent").CesiumElementHolder<Cesium.Viewer>>>;
export default Viewer;
