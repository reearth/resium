import React from "react";

import viewerType from "./propTypes/viewer";

var Base = function (_React$PureComponent) {
  babelHelpers.inherits(Base, _React$PureComponent);

  function Base() {
    babelHelpers.classCallCheck(this, Base);
    return babelHelpers.possibleConstructorReturn(this, (Base.__proto__ || Object.getPrototypeOf(Base)).apply(this, arguments));
  }

  babelHelpers.createClass(Base, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var viewer = this.context.viewer;

      if (this.onAdd) this.onAdd(viewer, this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var viewer = this.context.viewer;

      if (this.onUpdate) this.onUpdate(viewer, this.props, prevProps);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var viewer = this.context.viewer;

      if (this.onRemove) this.onRemove(viewer, this.props);
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);
  return Base;
}(React.PureComponent);

Base.propTypes = {};
Base.defaultProps = {};
Base.contextTypes = {
  viewer: viewerType
};
Base.cesiumPropTypes = {};
Base.cesiumEvents = [];
export default Base;