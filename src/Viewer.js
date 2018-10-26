import React from "react";
import PropTypes from "prop-types";
import { Viewer as CesiumViewer } from "cesium";

import CesiumComponent from "./core/CesiumComponent";
import {
  cesiumWidgetType,
  dataSourceCollectionType,
  entityCollectionType,
  sceneType,
  viewerType,
} from "./core/types";

export default class Viewer extends CesiumComponent {
  static propTypes = {
    ...CesiumComponent.propTypes,
    animation: PropTypes.any,
    automaticallyTrackDataSourceClocks: PropTypes.any,
    baseLayerPicker: PropTypes.any,
    children: PropTypes.any,
    className: PropTypes.string,
    clockViewModel: PropTypes.any,
    containerProps: PropTypes.object,
    contextOptions: PropTypes.any,
    creditContainer: PropTypes.any,
    creditViewport: PropTypes.any,
    dataSources: PropTypes.any,
    extend: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.any), PropTypes.any]),
    full: PropTypes.bool,
    fullscreenButton: PropTypes.any,
    fullscreenElement: PropTypes.any,
    geocoder: PropTypes.any,
    globe: PropTypes.any,
    homeButton: PropTypes.any,
    id: PropTypes.string,
    imageryProvider: PropTypes.any,
    imageryProviderViewModels: PropTypes.any,
    infoBox: PropTypes.any,
    mapMode2D: PropTypes.any,
    mapProjection: PropTypes.any,
    maximumRenderTimeChange: PropTypes.any,
    navigationHelpButton: PropTypes.any,
    navigationInstructionsInitiallyVisible: PropTypes.any,
    onSelectedEntityChanged: PropTypes.func,
    onTrackedEntityChanged: PropTypes.func,
    orderIndependentTranslucency: PropTypes.any,
    projectionPicker: PropTypes.any,
    requestRenderMode: PropTypes.any,
    scene3DOnly: PropTypes.any,
    sceneMode: PropTypes.any,
    sceneModePicker: PropTypes.any,
    selectedEntity: PropTypes.any,
    selectedImageryProviderViewModel: PropTypes.any,
    selectedTerrainProviderViewModel: PropTypes.any,
    selectionIndicator: PropTypes.any,
    shadows: PropTypes.any,
    showRenderLoopErrors: PropTypes.any,
    skyAtmosphere: PropTypes.any,
    skyBox: PropTypes.any,
    style: PropTypes.object,
    targetFrameRate: PropTypes.any,
    terrainExaggeration: PropTypes.any,
    terrainProvider: PropTypes.any,
    terrainProviderViewModels: PropTypes.any,
    terrainShadows: PropTypes.any,
    timeline: PropTypes.any,
    trackedEntity: PropTypes.any,
    useDefaultRenderLoop: PropTypes.any,
    vrButton: PropTypes.any,
  };

  static defaultProps = {
    style: {},
  };

  static childContextTypes = {
    cesiumWidget: cesiumWidgetType,
    dataSourceCollection: dataSourceCollectionType,
    entityCollection: entityCollectionType,
    scene: sceneType,
    viewer: viewerType,
  };

  static cesiumProps = [
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
    "clockViewModel",
    "selectedImageryProviderViewModel",
    "imageryProviderViewModels",
    "selectedTerrainProviderViewModel",
    "terrainProviderViewModels",
    "imageryProvider",
    "terrainProvider",
    "skyBox",
    "skyAtmosphere",
    "fullscreenElement",
    "useDefaultRenderLoop",
    "targetFrameRate",
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
    "shadows",
    "terrainShadows",
    "mapMode2D",
    "projectionPicker",
    "requestRenderMode",
    "maximumRenderTimeChange",
  ];

  static cesiumEvents = ["selectedEntityChanged", "trackedEntityChanged"];

  static initCesiumComponentWhenComponentDidMount = true;

  getChildContext() {
    return {
      cesiumWidget: this.cesiumElement ? this.cesiumElement.cesiumWidget : null,
      dataSourceCollection: this.cesiumElement
        ? this.cesiumElement.dataSourceDisplay.dataSources
        : null,
      entityCollection: this.cesiumElement ? this.cesiumElement.entities : null,
      scene: this.cesiumElement ? this.cesiumElement.scene : null,
      viewer: this.cesiumElement,
    };
  }

  componentDidMount() {
    super.componentDidMount();
    this.forceUpdate();
  }

  createCesiumElement(options) {
    if (this.element) {
      const v = new CesiumViewer(this.element, options);
      if (!v) return null; // failed to initialize Viewer

      const { extend } = this.props;
      if (extend) {
        if (Array.isArray(extend)) {
          extend.forEach(e => {
            v.extend(e);
          });
        } else {
          v.extend(extend);
        }
      }
      return v;
    }
    return null;
  }

  updateCesiumElement(cesiumElement, prev) {
    if (!cesiumElement) return;
    if (this.props.selectedEntity !== prev.selectedEntity) {
      cesiumElement.selectedEntity = this.props.selectedEntity;
    }
    if (this.props.trackedEntity !== prev.trackedEntity) {
      cesiumElement.trackedEntity = this.props.trackedEntity;
    }
  }

  destroyCesiumElement(cesiumElement) {
    if (!cesiumElement) return;
    cesiumElement.destroy();
  }

  element = null;

  render() {
    const { children, containerProps, className, full, id, style } = this.props;
    return (
      <div
        className={className}
        id={id}
        ref={e => {
          this.element = e;
        }}
        style={{
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
        }}
        {...containerProps}>
        {this.cesiumElement ? children : null}
      </div>
    );
  }
}
