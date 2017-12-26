import _Object$getPrototypeOf from "babel-runtime/core-js/object/get-prototype-of";
import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _createClass from "babel-runtime/helpers/createClass";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import React from "react";

import viewerType from "./propTypes/viewer";

var Base = function (_React$PureComponent) {
  _inherits(Base, _React$PureComponent);

  function Base() {
    _classCallCheck(this, Base);

    return _possibleConstructorReturn(this, (Base.__proto__ || _Object$getPrototypeOf(Base)).apply(this, arguments));
  }

  _createClass(Base, [{
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