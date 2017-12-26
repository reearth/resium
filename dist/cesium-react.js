(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('cesium'), require('prop-types'), require('react')) :
	typeof define === 'function' && define.amd ? define(['exports', 'cesium', 'prop-types', 'react'], factory) :
	(factory((global.CesiumReact = {}),global.Cesium,global.PropTypes,global.React));
}(this, (function (exports,cesium,PropTypes,React) { 'use strict';

PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;
React = React && React.hasOwnProperty('default') ? React['default'] : React;

var viewerType = PropTypes.instanceOf(cesium.Viewer);



var index = Object.freeze({
	viewer: viewerType
});

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Viewer$1 = function (_React$PureComponent) {
  inherits(Viewer$$1, _React$PureComponent);

  function Viewer$$1() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Viewer$$1);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Viewer$$1.__proto__ || Object.getPrototypeOf(Viewer$$1)).call.apply(_ref, [this].concat(args))), _this), _this.element = null, _this.viewer = null, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Viewer$$1, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        viewer: this.viewer
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.viewer = new cesium.Viewer(this.element);
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
  return Viewer$$1;
}(React.PureComponent);

Viewer$1.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  full: PropTypes.bool,
  style: PropTypes.object
};
Viewer$1.defaultProps = {
  style: {}
};
Viewer$1.childContextTypes = {
  viewer: viewerType
};

var Entity$1 = function (_React$PureComponent) {
  inherits(Entity$$1, _React$PureComponent);

  function Entity$$1() {
    var _ref;

    var _temp, _this, _ret;

    classCallCheck(this, Entity$$1);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn(this, (_ref = Entity$$1.__proto__ || Object.getPrototypeOf(Entity$$1)).call.apply(_ref, [this].concat(args))), _this), _this.entity = null, _temp), possibleConstructorReturn(_this, _ret);
  }

  createClass(Entity$$1, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _props = this.props,
          id = _props.id,
          name = _props.name,
          position = _props.position,
          description = _props.description;
      var viewer = this.context.viewer;

      this.entity = new cesium.Entity({
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
      if ("development" !== "production" && p.id !== prevProps.id) {
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
  return Entity$$1;
}(React.PureComponent);

Entity$1.propTypes = {
  description: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.object
};
Entity$1.defaultProps = {};
Entity$1.contextTypes = {
  viewer: viewerType
};

exports.PropTypes = index;
exports.Viewer = Viewer$1;
exports.Entity = Entity$1;

Object.defineProperty(exports, '__esModule', { value: true });

})));
