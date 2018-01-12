import React from "react";
import PropTypes from "prop-types";
import { CesiumWidget as CesiumCesiumWidget } from "cesium";

import CesiumComponent from "./CesiumComponent";
import { cesiumWidgetType, sceneType } from "./types";

export default class CesiumWidget extends CesiumComponent {

  static propTypes = {
    ...CesiumComponent.propTypes,
    children: PropTypes.any,
    className: PropTypes.string,
    clock: PropTypes.any,
    containerProps: PropTypes.object,
    contextOptions: PropTypes.any,
    creditContainer: PropTypes.any,
    creditViewport: PropTypes.any,
    full: PropTypes.bool,
    globe: PropTypes.any,
    id: PropTypes.string,
    imageryProvider: PropTypes.any,
    mapMode2D: PropTypes.any,
    mapProjection: PropTypes.any,
    orderIndependentTranslucency: PropTypes.any,
    scene3DOnly: PropTypes.any,
    sceneMode: PropTypes.any,
    shadows: PropTypes.any,
    showRenderLoopErrors: PropTypes.any,
    skyAtmosphere: PropTypes.any,
    skyBox: PropTypes.any,
    style: PropTypes.object,
    targetFrameRate: PropTypes.any,
    terrainExaggeration: PropTypes.any,
    terrainProvider: PropTypes.any,
    terrainShadows: PropTypes.any,
    useDefaultRenderLoop: PropTypes.any
  }

  static defaultProps = {
    style: {}
  }

  static childContextTypes = {
    cesiumWidget: cesiumWidgetType,
    scene: sceneType,
  }

  static cesiumProps = [
    "scene3DOnly",
    "clock",
    "imageryProvider",
    "terrainProvider",
    "skyBox",
    "skyAtmosphere",
    "useDefaultRenderLoop",
    "targetFrameRate",
    "showRenderLoopErrors",
    "contextOptions",
    "sceneMode",
    "mapProjection",
    "globe",
    "orderIndependentTranslucency",
    "creditContainer",
    "creditViewport",
    "terrainExaggeration",
    "shadows",
    "terrainShadows",
    "mapMode2D"
  ]

  static initCesiumComponentWhenComponentDidMount = true

  getChildContext() {
    return {
      cesiumWidget: this.cesiumElement,
      scene: this.cesiumElement ? this.cesiumElement.scene : null
    };
  }

  componentDidMount() {
    super.componentDidMount();
    this.forceUpdate();
  }

  createCesiumElement(options) {
    if (this.element) {
      return new CesiumCesiumWidget(this.element, options);
    }
    return null;
  }

  destroyCesiumElement(cesiumElement) {
    cesiumElement.destroy();
  }

  element = null

  render() {
    const { children, containerProps, className, full, id, style } = this.props;
    return (
      <div
        className={className}
        id={id}
        ref={e => { this.element = e; }}
        style={{
          ...full ? {
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            top: "0"
          } : {},
          ...style
        }}
        {...containerProps}>
        {this.cesiumElement ? children : null}
      </div>
    );
  }

}
