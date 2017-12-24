import React from "react";
import PropTypes from "prop-types";
import { Viewer as CesiumViewer } from "cesium";

import viewerType from "./propTypes/viewer";

export default class Viewer extends React.PureComponent {

  static propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    full: PropTypes.bool,
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
    this.viewer = new CesiumViewer(this.element);
    this.forceUpdate();
  }

  componentWillUnmount() {
    this.viewer.destroy();
    this.viewer = null;
    this.element = null;
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
