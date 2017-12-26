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

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _cesium = require("cesium");

var _viewer = require("./propTypes/viewer");

var _viewer2 = _interopRequireDefault(_viewer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Entity = function (_React$PureComponent) {
  (0, _inherits3.default)(Entity, _React$PureComponent);

  function Entity() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Entity);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Entity.__proto__ || (0, _getPrototypeOf2.default)(Entity)).call.apply(_ref, [this].concat(args))), _this), _this.entity = null, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Entity, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _props = this.props,
          id = _props.id,
          name = _props.name,
          position = _props.position,
          description = _props.description;
      var viewer = this.context.viewer;

      this.entity = new _cesium.Entity({
        id: id,
        name: name,
        position: position,
        description: description,
        point: {
          pixelSize: 10
        }
      });
      viewer.entities.add(this.entity);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var e = this.entity;
      var p = this.props;
      if (process.env.NODE_ENV !== "production" && p.id !== prevProps.id) {
        console.warn("Cesium entity id prop is not changable.");
      }
      e.name = p.name;
      e.position = p.position;
      e.description = p.description;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var viewer = this.context.viewer;

      if (viewer && !viewer.isDestroyed()) {
        viewer.entities.remove(this.entity);
      }
      this.entity = null;
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);
  return Entity;
}(_react2.default.PureComponent);

Entity.propTypes = {
  description: _propTypes2.default.string,
  id: _propTypes2.default.string,
  name: _propTypes2.default.string,
  position: _propTypes2.default.object
};
Entity.defaultProps = {};
Entity.contextTypes = {
  viewer: _viewer2.default
};
exports.default = Entity;