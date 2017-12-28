import React from "react";
import PropTypes from "prop-types";
import { Viewer as CesiumViewer } from "cesium";

import CesiumComponent from "./cesium-component";
import viewerType from "./propTypes/viewer";

export default class Viewer extends CesiumComponent {

  static propTypes = {
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

  getChildContext() {
    return {
      viewer: this.viewer
    };
  }

  componentDidMount() {
    super.componentDidMount();
    this.forceUpdate();
  }

  onMount() {
    this.viewer = new CesiumViewer(this.element);
  }

  onUnmount() {
    this.viewer.destroy();
    this.viewer = null;
    this.element = null;
  }

  // eslint-disable-next-line class-methods-use-this
  getEvents() {
    return [
      "selectedEntityChanged"
    ];
  }

  getTarget() {
    return this.viewer;
  }

  element = null

  viewer = null

  render() {
    const { viewer } = this;
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
        {viewer ? children : null}
      </div>
    );
  }

}
