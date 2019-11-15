import React from "react";
import { CesiumWidget as CesiumCesiumWidget } from "cesium";

import { createCesiumComponent } from "../core/component";
import EventManager, { eventManagerContextKey, RootEventProps } from "../core/EventManager";
import { pick } from "../core/util";

/*
@summary
`CesiumWidget` is the simplest root component of resium. All components of resium except the root components have to be mounted inside it.

`Viewer` is also a root component. It is a component with some widgets (info box, timeline, and so on) added to `CesiumWidget`.
*/

/*
@example
<CesiumWidget full />
*/

/*
@scope
Everywhere. `CesiumWidget` is a root component. 
*/

export interface CesiumWidgetCesiumProps {
  resolutionScale?: number;
  useDefaultRenderLoop?: boolean;
  targetFrameRate?: number;
  useBrowserRecommendedResolution?: boolean;
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
  mapMode2D?: Cesium.MapMode2D;
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

const cesiumProps: (keyof CesiumWidgetCesiumProps)[] = [
  "resolutionScale",
  "useDefaultRenderLoop",
  "targetFrameRate",
  "useBrowserRecommendedResolution",
];

const cesiumReadonlyProps: (keyof CesiumWidgetCesiumReadonlyProps)[] = [
  "clock",
  "imageryProvider",
  "terrainProvider",
  "skyBox",
  "skyAtmosphere",
  "sceneMode",
  "scene3DOnly",
  "orderIndependentTranslucency",
  "mapMode2D",
  "mapProjection",
  "globe",
  "showRenderLoopErrors",
  "contextOptions",
  "creditContainer",
  "creditViewport",
  "terrainExaggeration",
  "shadows",
  "terrainShadows",
  "requestRenderMode",
  "maximumRenderTimeChange",
];

export interface CesiumWidgetProps
  extends CesiumWidgetCesiumProps,
    CesiumWidgetCesiumReadonlyProps,
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
  children?: React.ReactNode;
}

const CesiumWidget = createCesiumComponent<
  Cesium.CesiumWidget,
  CesiumWidgetProps,
  {},
  {
    cesiumWidget: Cesium.CesiumWidget;
    scene: Cesium.Scene;
    globe: Cesium.Globe;
    camera: Cesium.Camera;
    [eventManagerContextKey]?: EventManager;
  },
  EventManager
>({
  name: "CesiumWidget",
  create(context, props, container) {
    if (!container) return;
    const v = new CesiumCesiumWidget(
      container,
      pick(props, [...cesiumProps, ...cesiumReadonlyProps]),
    );
    if (!v) return;

    if (typeof props.resolutionScale === "number") {
      v.resolutionScale = props.resolutionScale;
    }

    // common event manager for managing events of Entity and Primitives
    const eventManager = new EventManager(v.scene);

    return [v, eventManager];
  },
  destroy(element, context, ref, state) {
    if (state && !state.isDestroyed()) {
      state.destroy();
    }
    if (!element.isDestroyed()) {
      element.destroy();
    }
  },
  provide(element, props, state) {
    return {
      cesiumWidget: element,
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
  renderContainer: true,
  useCommonEvent: true,
  useRootEvent: true,
});

export default CesiumWidget;
