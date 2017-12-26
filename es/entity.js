import _Object$getPrototypeOf from "babel-runtime/core-js/object/get-prototype-of";
import _classCallCheck from "babel-runtime/helpers/classCallCheck";
import _createClass from "babel-runtime/helpers/createClass";
import _possibleConstructorReturn from "babel-runtime/helpers/possibleConstructorReturn";
import _inherits from "babel-runtime/helpers/inherits";
import React from "react";
import PropTypes from "prop-types";
import { Entity as CesiumEntity } from "cesium";

import viewerType from "./propTypes/viewer";

var Entity = function (_React$PureComponent) {
  _inherits(Entity, _React$PureComponent);

  function Entity() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Entity);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Entity.__proto__ || _Object$getPrototypeOf(Entity)).call.apply(_ref, [this].concat(args))), _this), _this.entity = null, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Entity, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _props = this.props,
          id = _props.id,
          name = _props.name,
          position = _props.position,
          description = _props.description;
      var viewer = this.context.viewer;

      this.entity = new CesiumEntity({
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
}(React.PureComponent);

Entity.propTypes = {
  description: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.object
};
Entity.defaultProps = {};
Entity.contextTypes = {
  viewer: viewerType
};
export default Entity;