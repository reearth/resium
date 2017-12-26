"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _react3 = require("@storybook/react");

var _viewer = require("./viewer");

var _viewer2 = _interopRequireDefault(_viewer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {

  (0, _react3.storiesOf)("Viewer").add("default", function () {
    return _react2.default.createElement(_viewer2.default, { full: true });
  });
};