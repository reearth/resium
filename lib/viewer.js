"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _cesium = require("cesium");

var _viewer = require("./propTypes/viewer");

var _viewer2 = _interopRequireDefault(_viewer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Viewer = function (_React$PureComponent) {
  (0, _inherits3.default)(Viewer, _React$PureComponent);

  function Viewer() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Viewer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Viewer.__proto__ || (0, _getPrototypeOf2.default)(Viewer)).call.apply(_ref, [this].concat(args))), _this), _this.element = null, _this.viewer = null, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Viewer, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        viewer: this.viewer
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.viewer = new _cesium.Viewer(this.element);
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

      return _react2.default.createElement(
        "div",
        {
          className: className,
          ref: function ref(e) {
            _this2.element = e;
          },
          style: (0, _extends3.default)({}, full ? {
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
}(_react2.default.PureComponent);

Viewer.propTypes = {
  children: _propTypes2.default.any,
  className: _propTypes2.default.string,
  full: _propTypes2.default.bool,
  style: _propTypes2.default.object
};
Viewer.defaultProps = {
  style: {}
};
Viewer.childContextTypes = {
  viewer: _viewer2.default
};
exports.default = Viewer;