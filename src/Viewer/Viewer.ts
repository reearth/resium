import { Viewer as CesiumViewer, Entity, TerrainProvider } from "cesium";
import { ReactNode, CSSProperties } from "react";

import {
  createCesiumComponent,
  EventManager,
  eventManagerContextKey,
  RootEventProps,
  PickCesiumProps,
  Merge,
  RootComponentInternalProps,
  isPromise,
} from "../core";

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

export type Target = Merge<CesiumViewer, CesiumViewer.ConstructorOptions>;

export type ViewerCesiumProps = PickCesiumProps<CesiumViewer, typeof cesiumProps>;

export type ViewerCesiumReadonlyProps = PickCesiumProps<Target, typeof cesiumReadonlyProps>;

export type ViewerCesiumEvents = {
  onSelectedEntityChange?: (entity: Entity) => void;
  onTrackedEntityChange?: (entity: Entity) => void;
};

const cesiumProps = [
  "terrainShadows",
  "clockTrackedDataSource",
  "targetFrameRate",
  "useDefaultRenderLoop",
  "resolutionScale",
  "allowDataSourcesToSuspendAnimation",
  "trackedEntity",
  "ellipsoid",
  "selectedEntity",
  "shadows",
  "useBrowserRecommendedResolution",
  "creditDisplay",
] as const;

const cesiumReadonlyProps = [
  "baseLayer",
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
  "mapMode2D",
  "projectionPicker",
  "requestRenderMode",
  "maximumRenderTimeChange",
  "depthPlaneEllipsoidOffset",
  "msaaSamples",
  "blurActiveElementOnCanvasFocus",
  "terrain",
] as const;

export const cesiumEventProps = {
  onSelectedEntityChange: "selectedEntityChanged",
  onTrackedEntityChange: "trackedEntityChanged",
} as const;

export const otherProps = [
  "className",
  "id",
  "style",
  "full",
  "containerProps",
  "extend",
  "terrainProvider",
] as const;

export type ViewerOtherProps = RootEventProps &
  RootComponentInternalProps & {
    /** Applied to outer `div` element */
    className?: string;
    /** Applied to outer `div` element */
    id?: string;
    /** Applied to outer `div` element */
    style?: CSSProperties;
    /** Same as `style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}` if it is true. */
    full?: boolean;
    /** All props applied to outer `div` element */
    containerProps?: any;
    /** It is applied in order from the top to Viewer as `viewer.extend(XXX);` after the viewer is mounted. Nothing happens even it is updated by itself. */
    extend?: CesiumViewer.ViewerMixin[] | CesiumViewer.ViewerMixin;
    children?: ReactNode;
    terrainProvider?: TerrainProvider | Promise<TerrainProvider>;
  };

export type ViewerProps = ViewerCesiumProps &
  ViewerCesiumReadonlyProps &
  ViewerCesiumEvents &
  ViewerOtherProps;

const Viewer = createCesiumComponent<CesiumViewer, ViewerProps, EventManager>({
  name: "Viewer",
  async create(_context, { baseLayer, terrainProvider, ...props }, wrapper) {
    if (!wrapper) return;

    let resultTerrainProvider: TerrainProvider;
    if (isPromise(terrainProvider)) {
      resultTerrainProvider = await terrainProvider;
    } else {
      resultTerrainProvider = terrainProvider as TerrainProvider;
    }

    const v = new CesiumViewer(wrapper, {
      ...props,
      terrainProvider: resultTerrainProvider,
      baseLayer: baseLayer === false ? undefined : baseLayer,
    });
    if (!v) return;

    if (baseLayer === false) {
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
  provide(element, _context, props, state) {
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
      __$internal: {
        onUpdate: props?.onUpdate,
        imageryLayerWaitingList: [],
      },
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
  otherProps,
  renderContainer: true,
  useCommonEvent: true,
  useRootEvent: true,
});

export default Viewer;
