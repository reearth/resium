import React from "react";

import createCesiumComponent from "./core/CesiumComponent";
import { CesiumWidget as CesiumCesiumWidget } from "cesium";

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
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  full?: boolean;
  containerProps?: any;
}

export interface CesiumWidgetContext {
  cesiumWidget: Cesium.CesiumWidget;
  dataSourceCollection: Cesium.DataSourceCollection;
  entityCollection: Cesium.EntityCollection;
  scene: Cesium.Scene;
  camera: Cesium.Camera;
}

const CesiumWidget = createCesiumComponent<
  Cesium.CesiumWidget | undefined,
  CesiumWidgetProps,
  {},
  CesiumWidgetContext | {},
  HTMLDivElement
>({
  name: "Viewer",
  initLazy: true,
  createRef: true,
  create(cprops, props, context, ref) {
    // ref is not always undefined
    const v = new CesiumCesiumWidget(
      (ref as React.RefObject<HTMLDivElement>).current as any,
      cprops,
    );

    if (!v) {
      return undefined; // failed to initialize Viewer
    }

    if (typeof props.resolutionScale === "number") {
      v.resolutionScale = props.resolutionScale;
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
      cesiumWidget: element,
      scene: element.scene,
      camera: element.scene.camera,
    };
  },
  cesiumProps,
  cesiumReadonlyProps,
});

export default CesiumWidget;
