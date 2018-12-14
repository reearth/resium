import React from "react";

import createCesiumComponent from "./core/CesiumComponent";
import Cesium, { CesiumWidget as CesiumCesiumWidget } from "cesium";

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

const cesiumProps: Array<keyof CesiumWidgetCesiumProps> = [
  "resolutionScale",
  "useDefaultRenderLoop",
  "targetFrameRate",
];

const cesiumReadonlyProps: Array<keyof CesiumWidgetCesiumReadonlyProps> = [
  "clock",
  "imageryProvider",
  "terrainProvider",
  "skyBox",
  "skyAtmosphere",
  "sceneMode",
  "scene3DOnly",
  "orderIndependentTranslucency",
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
    CesiumWidgetCesiumReadonlyProps {
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

export interface CesiumWidgetContext {
  cesiumWidget: Cesium.CesiumWidget;
  dataSourceCollection: Cesium.DataSourceCollection;
  entityCollection: Cesium.EntityCollection;
  scene: Cesium.Scene;
  globe: Cesium.Globe;
  camera: Cesium.Camera;
}

const CesiumWidget = createCesiumComponent<
  Cesium.CesiumWidget,
  CesiumWidgetProps,
  {},
  CesiumWidgetContext | {},
  HTMLDivElement
>({
  name: "Viewer",
  createRef: true,
  create(cprops, props, context, ref) {
    // ref is not always undefined
    const v = new CesiumCesiumWidget(
      (ref as React.RefObject<HTMLDivElement>).current as any,
      cprops,
    );

    if (v && typeof props.resolutionScale === "number") {
      v.resolutionScale = props.resolutionScale;
    }

    // common ScreenSpaceEventHandler for events of Entity and Primitives
    let state: any;
    if (v) {
      state = new Cesium.ScreenSpaceEventHandler(v.canvas);
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
      const sshe = state as Cesium.ScreenSpaceEventHandler;
      if (!sshe.isDestroyed()) {
        sshe.destroy();
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
      cesiumWidget: element,
      scene: element.scene,
      camera: element.scene.camera,
      imageryLayerCollection: element.scene.globe.imageryLayers,
      primitiveCollection: element.scene.primitives,
      globe: element.scene.globe,
      __RESIUM_SSEH: state, // ScreenSpaceEventHandler
    };
  },
  cesiumProps,
  cesiumReadonlyProps,
});

export default CesiumWidget;
