import React from "react";
import PropTypes from "prop-types";
import { Viewer as CesiumViewer } from "cesium";

import CesiumComponent from "./cesium-component";
import { viewerType } from "./types";

export default class Viewer extends CesiumComponent {

  static propTypes = {
    ...CesiumComponent.propTypes,
    children: PropTypes.any,
    className: PropTypes.string,
    full: PropTypes.bool,
    onSelectedEntityChanged: PropTypes.func,
    style: PropTypes.object
  }

  static defaultProps = {
    style: {}
  }

  static childContextTypes = {
    viewer: viewerType
  }

  static cesiumProps = []

  static cesiumEvents = [
    "selectedEntityChanged"
  ]

  static initCesiumComponentWhenComponentDidMount = true

  getChildContext() {
    return {
      viewer: this.cesiumElement
    };
  }

  componentDidMount() {
    super.componentDidMount();
    this.forceUpdate();
  }

  createCesiumElement() {
    if (this.element) {
      return new CesiumViewer(this.element, {});
    }
    return null;
  }

  destroyCesiumElement(cesiumElement) {
    cesiumElement.destroy();
    this.element = null;
  }

  element = null

  render() {
    const { children, className, full, style } = this.props;
    return (
      <div
        className={className}
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
        }}>
        {this.cesiumElement ? children : null}
      </div>
    );
  }

}
