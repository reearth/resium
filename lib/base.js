"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _viewer = require("./propTypes/viewer");

var _viewer2 = _interopRequireDefault(_viewer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Base = function (_React$PureComponent) {
  (0, _inherits3.default)(Base, _React$PureComponent);

  function Base() {
    (0, _classCallCheck3.default)(this, Base);
    return (0, _possibleConstructorReturn3.default)(this, (Base.__proto__ || (0, _getPrototypeOf2.default)(Base)).apply(this, arguments));
  }

  (0, _createClass3.default)(Base, [{
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
}(_react2.default.PureComponent);

Base.propTypes = {};
Base.defaultProps = {};
Base.contextTypes = {
  viewer: _viewer2.default
};
Base.cesiumPropTypes = {};
Base.cesiumEvents = [];
exports.default = Base;