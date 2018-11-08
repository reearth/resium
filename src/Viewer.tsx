import React from "react";
import Cesium, {
  Viewer as CesiumViewer,
  CesiumWidget,
  DataSourceCollection,
  EntityCollection,
  Scene,
} from "cesium";

import createCesiumComponent, { EventkeyMap } from "./core/TCesiumComponent";

export interface ViewerCesiumProps {
  terrainProvider: Cesium.TerrainProvider;
  terrainShadows: Cesium.ShadowMode;
  clockTrackedDataSource: Cesium.DataSource;
  targetFrameRate: number;
  useDefaultRenderLoop: boolean;
  resolutionScale: number;
  allowDataSourcesToSuspendAnimation: boolean;
  trackedEntity: Cesium.Entity;
  selectedEntity: Cesium.Entity;
  shadows: boolean;
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
  dataSources?: DataSourceCollection;
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

const cesiumProps: Array<keyof ViewerCesiumProps> = [
  "terrainProvider",
  "terrainShadows",
  "clockTrackedDataSource",
  "targetFrameRate",
  "useDefaultRenderLoop",
  "resolutionScale",
  "allowDataSourcesToSuspendAnimation",
  "trackedEntity",
  "selectedEntity",
  "shadows",
];

const cesiumReadonlyProps: Array<keyof ViewerCesiumReadonlyProps> = [
  "animation",
  "baseLayerPicker",
  "fullscreenButton",
  "vrButton",
  "geocoder",
  "homeButton",
  "infoBox",
  "sceneModePicker",
  "selectionIndicator",
  "timeline",
  "navigationHelpButton",
  "navigationInstructionsInitiallyVisible",
  "scene3DOnly",
  "shouldAnimate",
  "clockViewModel",
  "selectedImageryProviderViewModel",
  "imageryProviderViewModels",
  "selectedTerrainProviderViewModel",
  "terrainProviderViewModels",
  "imageryProvider",
  "skyBox",
  "skyAtmosphere",
  "fullscreenElement",
  "showRenderLoopErrors",
  "automaticallyTrackDataSourceClocks",
  "contextOptions",
  "sceneMode",
  "mapProjection",
  "globe",
  "orderIndependentTranslucency",
  "creditContainer",
  "creditViewport",
  "dataSources",
  "terrainExaggeration",
  "mapMode2D",
  "projectionPicker",
  "requestRenderMode",
  "maximumRenderTimeChange",
];

const cesiumEventProps: EventkeyMap<CesiumViewer, keyof ViewerCesiumEvents> = {
  selectedEntityChanged: "onSelectedEntityChange",
  trackedEntityChanged: "onTrackedEntityChange",
};

export interface ViewerProps
  extends ViewerCesiumProps,
    ViewerCesiumReadonlyProps,
    ViewerCesiumEvents {
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  full?: boolean;
  containerProps?: any;
  extend?: CesiumViewer.ViewerMixin[] | CesiumViewer.ViewerMixin;
}

export interface ViewerContext {
  viewer: CesiumViewer;
  cesiumWidget: CesiumWidget;
  dataSourceCollection: DataSourceCollection;
  entityCollection: EntityCollection;
  scene: Scene;
}

const Viewer = createCesiumComponent<
  CesiumViewer | undefined,
  ViewerProps,
  {},
  ViewerContext | {},
  HTMLDivElement
>({
  name: "Viewer",
  initLazy: true,
  createRef: true,
  create(cprops, props, ref) {
    // ref is not always undefined
    const v = new CesiumViewer((ref as React.RefObject<HTMLDivElement>).current as any, cprops);

    if (!v) {
      return undefined; // failed to initialize Viewer
    }

    if (props.extend) {
      if (Array.isArray(props.extend)) {
        props.extend.forEach(e => {
          v.extend(e, {});
        });
      } else {
        v.extend(props.extend, {});
      }
    }

    return v;
  },
  render(element, props, mounted, ref) {
    return (
      <div
        className={props.className}
        id={props.id}
        ref={ref}
        style={{
          ...(props.full
            ? {
                position: "absolute",
                bottom: "0",
                left: "0",
                right: "0",
                top: "0",
              }
            : {}),
          ...props.style,
        }}
        {...props.containerProps}>
        {element ? props.children : null}
      </div>
    );
  },
  unmount(element) {
    if (element && !element.isDestroyed) {
      element.destroy();
    }
  },
  provide(element) {
    if (!element) {
      return {};
    }
    return {
      viewer: element,
      cesiumWidget: element.cesiumWidget,
      dataSourceCollection: element.dataSources,
      entityCollection: element.entities,
      scene: element.scene,
    };
  },
  cesiumProps,
  cesiumReadonlyProps,
  cesiumEventProps,
});

export default Viewer;
