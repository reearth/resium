import React from "react";
import {
  Viewer as CesiumViewer,
  Globe,
  Camera,
  Scene,
  EntityCollection,
  CesiumWidget,
  DataSourceCollection,
  ImageryProvider,
  MapProjection,
  SceneMode,
  SkyAtmosphere,
  SkyBox,
  MapMode2D,
  ProviderViewModel,
  ClockViewModel,
  Entity,
  ShadowMode,
  DataSource,
  TerrainProvider,
} from "cesium";

import { createCesiumComponent, EventkeyMap } from "../core/component";
import EventManager, { eventManagerContextKey, RootEventProps } from "../core/EventManager";

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
  terrainProvider?: TerrainProvider;
  terrainShadows?: ShadowMode;
  clockTrackedDataSource?: DataSource;
  targetFrameRate?: number;
  useDefaultRenderLoop?: boolean;
  resolutionScale?: number;
  allowDataSourcesToSuspendAnimation?: boolean;
  trackedEntity?: Entity;
  selectedEntity?: Entity;
  shadows?: boolean;
  useBrowserRecommendedResolution?: boolean;
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
  clockViewModel?: ClockViewModel;
  selectedImageryProviderViewModel?: ProviderViewModel;
  imageryProviderViewModels?: ProviderViewModel[];
  selectedTerrainProviderViewModel?: ProviderViewModel;
  terrainProviderViewModels?: ProviderViewModel[];
  // If false, the default imagery layer will be removed.
  imageryProvider?: ImageryProvider | false;
  skyBox?: SkyBox;
  skyAtmosphere?: SkyAtmosphere;
  fullscreenElement?: Element | string;
  showRenderLoopErrors?: boolean;
  automaticallyTrackDataSourceClocks?: boolean;
  contextOptions?: any;
  sceneMode?: SceneMode;
  mapProjection?: MapProjection;
  globe?: Globe;
  orderIndependentTranslucency?: boolean;
  creditContainer?: Element | string;
  creditViewport?: Element | string;
  dataSources?: DataSourceCollection;
  terrainExaggeration?: number;
  mapMode2D?: MapMode2D;
  projectionPicker?: boolean;
  requestRenderMode?: boolean;
  maximumRenderTimeChange?: number;
}

export interface ViewerCesiumEvents {
  onSelectedEntityChange?: () => void;
  onTrackedEntityChange?: () => void;
}

const cesiumProps: (keyof ViewerCesiumProps)[] = [
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
  "useBrowserRecommendedResolution",
];

const cesiumReadonlyProps: (keyof ViewerCesiumReadonlyProps)[] = [
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

const cesiumEventProps: EventkeyMap<CesiumViewer, ViewerCesiumEvents> = {
  onSelectedEntityChange: "selectedEntityChanged",
  onTrackedEntityChange: "trackedEntityChanged",
};

export interface ViewerProps
  extends ViewerCesiumProps,
    ViewerCesiumReadonlyProps,
    ViewerCesiumEvents,
    RootEventProps {
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

const Viewer = createCesiumComponent<
  CesiumViewer,
  ViewerProps,
  undefined,
  {
    viewer: CesiumViewer;
    cesiumWidget: CesiumWidget;
    dataSourceCollection: DataSourceCollection;
    entityCollection: EntityCollection;
    scene: Scene;
    globe: Globe;
    camera: Camera;
    [eventManagerContextKey]?: EventManager;
  },
  EventManager
>({
  name: "Viewer",
  create(_context, props, wrapper) {
    if (!wrapper) return;
    const v = new CesiumViewer(wrapper, props as any); // WORKAROUND: imageryProvider
    if (!v) return;

    if (props.imageryProvider === false) {
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
    const state = new EventManager(v.scene);

    return [v, state];
  },
  destroy(element, _context, _ref, state) {
    if (state && !state.isDestroyed()) {
      state.destroy();
    }
    if (!element.isDestroyed()) {
      element.destroy();
    }
  },
  provide(element, _props, state) {
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
      [eventManagerContextKey]: state,
    };
  },
  containerProps: ({ id, className, style, full, containerProps }) => ({
    className,
    id,
    style: {
      ...(full
        ? {
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            top: "0",
          }
        : {}),
      ...style,
    },
    ...containerProps,
  }),
  cesiumProps,
  cesiumReadonlyProps,
  cesiumEventProps,
  renderContainer: true,
  useCommonEvent: true,
  useRootEvent: true,
});

export default Viewer;
