import _extends from "babel-runtime/helpers/extends";
import _Object$getPrototypeOf from "babel-runtime/core-js/object/get-prototype-of";
import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _createClass from "babel-runtime/helpers/createClass";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import React from "react";
import PropTypes from "prop-types";
import { Viewer as CesiumViewer } from "cesium";

import viewerType from "./propTypes/viewer";

var Viewer = function (_React$PureComponent) {
  _inherits(Viewer, _React$PureComponent);

  function Viewer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Viewer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Viewer.__proto__ || _Object$getPrototypeOf(Viewer)).call.apply(_ref, [this].concat(args))), _this), _this.element = null, _this.viewer = null, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Viewer, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        viewer: this.viewer
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.viewer = new CesiumViewer(this.element);
      this.forceUpdate();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.viewer.destroy();
      this.viewer = null;
      this.element = null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var viewer = this.viewer;
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          full = _props.full,
          style = _props.style;

      return React.createElement(
        "div",
        {
          className: className,
          ref: function ref(e) {
            _this2.element = e;
          },
          style: _extends({}, full ? {
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            top: "0"
          } : {}, style) },
        viewer ? children : null
      );
    }
  }]);

  return Viewer;
}(React.PureComponent);

Viewer.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  full: PropTypes.bool,
  style: PropTypes.object
};
Viewer.defaultProps = {
  style: {}
};
Viewer.childContextTypes = {
  viewer: viewerType
};
export default Viewer;