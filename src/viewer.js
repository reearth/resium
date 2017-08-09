import React from "react";
import PropTypes from "prop-types";
import { Viewer as CesiumViewer } from "cesium";

import viewerType from "./propTypes/viewer";
import viewerContainerType from "./propTypes/viewerContainer";

export default class Viewer extends React.PureComponent {

  static propTypes = {
    className: PropTypes.string,
    full: PropTypes.bool,
    style: PropTypes.object
  }

  static defaultProps = {
    full: true,
    style: {}
  }

  static childContextTypes = {
    viewer: viewerType,
    viewerContainer: viewerContainerType
  }

  getChildContext() {
    return {
      viewer: this.viewer,
      viewerContainer: this.element
    };
  }

  componentDidMount() {
    if (this.element) {
      this.viewer = new CesiumViewer(this.element);
    }
  }

  componentWillUnmount() {
    this.viewer = null;
    this.element = null;
  }

  element = null
  viewer = null

  render() {
    const { className, full, style } = this.props;
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
        }} />
    );
  }

}
