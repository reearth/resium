import React from "react";
import Cesium, { Viewer as CesiumViewer } from "cesium";

import createCesiumComponent, { EventkeyMap } from "./core/CesiumComponent";
import EventManager from "./core/EventManager";

/*
@summary
`Viewer` is a root component of resium same as `CesiumWidget`. All components of resium except the root components have to be mounted inside it.
*/

/*
@example
<Viewer full animation={false} timeline={false} />
*/

/*
@scope
Everywhere. `Viewer` is a root component. 
*/

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
  // If false, the default imagery layer will be removed.
  imageryProvider?: Cesium.ImageryProvider | false;
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
  // Applied to outer `div` element
  className?: string;
  // Applied to outer `div` element
  id?: string;
  // Applied to outer `div` element
  style?: React.CSSProperties;
  // Same as `style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}` if it is true.
  full?: boolean;
  // All props applied to outer `div` element
  containerProps?: any;
  // It is applied in order from the top to Viewer as `viewer.extend(XXX);` after the viewer is mounted. Nothing happens even it is updated by itself.
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

const Viewer = createCesiumComponent<
  CesiumViewer,
  ViewerProps,
  {},
  ViewerContext | {},
  HTMLDivElement
>({
  name: "Viewer",
  createRef: true,
  create(cprops, props, context, ref) {
    // ref is not always undefined
    const v = new CesiumViewer(
      (ref as React.RefObject<HTMLDivElement>).current as any,
      cprops as any,
    );

    if (cprops.imageryProvider === false) {
      v.imageryLayers.removeAll();
    }

    if (v && props.extend) {
      if (Array.isArray(props.extend)) {
        props.extend.forEach(e => {
          v.extend(e, {});
        });
      } else {
        v.extend(props.extend, {});
      }
    }

    // common event manager for managing events of Entity and Primitives
    let state: any;
    if (v) {
      state = new EventManager(v.scene, v.canvas);
    }

    return [v, state];
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
  unmount(element, cprops, props, ref, state) {
    if (element && state) {
      const em = state as EventManager;
      if (!em.isDestroyed()) {
        em.destroy();
      }
    }
    if (element && !element.isDestroyed()) {
      element.destroy();
    }
  },
  provide(element, props, state) {
    if (!element) {
      return {};
    }
    return {
      viewer: element,
      cesiumWidget: element.cesiumWidget,
      dataSourceCollection: element.dataSources,
      entityCollection: element.entities,
      scene: element.scene,
      camera: element.scene.camera,
      imageryLayerCollection: element.scene.globe.imageryLayers,
      primitiveCollection: element.scene.primitives,
      globe: element.scene.globe,
      __RESIUM_EVENT_MANAGER: state, // EventManager
    };
  },
  cesiumProps,
  cesiumReadonlyProps,
  cesiumEventProps,
});

export default Viewer;
