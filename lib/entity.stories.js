"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _cesium = require("cesium");

var _react3 = require("@storybook/react");

var _viewer = require("./viewer");

var _viewer2 = _interopRequireDefault(_viewer);

var _entity = require("./entity");

var _entity2 = _interopRequireDefault(_entity);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {

  (0, _react3.storiesOf)("Entity").add("default", function () {
    return _react2.default.createElement(
      _viewer2.default,
      { full: true },
      _react2.default.createElement(_entity2.default, {
        name: "test",
        description: "test",
        position: _cesium.Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100) })
    );
  });
};