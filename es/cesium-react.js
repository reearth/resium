import { Entity, Viewer } from 'cesium';
import PropTypes from 'prop-types';
import React from 'react';

function _extends() {
  _extends = Object.assign || function (target) {
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

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var _sPO = Object.setPrototypeOf || function _sPO(o, p) {
  o.__proto__ = p;
  return o;
};

var _construct = typeof Reflect === "object" && Reflect.construct || function _construct(Parent, args, Class) {
  var Constructor,
      a = [null];
  a.push.apply(a, args);
  Constructor = Parent.bind.apply(Parent, a);
  return _sPO(new Constructor(), Class.prototype);
};

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var viewerType = PropTypes.instanceOf(Viewer);



var index = Object.freeze({
	viewer: viewerType
});

var _class;
var _temp2;

var Viewer$1 = (_temp2 = _class =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(Viewer$$1, _React$PureComponent);

  function Viewer$$1() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this, _this.element = null, _this.viewer = null, _temp) || _assertThisInitialized(_this);
  }

  var _proto = Viewer$$1.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      viewer: this.viewer
    };
  };

  _proto.componentDidMount = function componentDidMount() {
    this.viewer = new Viewer(this.element);
    this.forceUpdate();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.viewer.destroy();
    this.viewer = null;
    this.element = null;
  };

  _proto.render = function render() {
    var _this2 = this;

    var viewer = this.viewer;
    var _props = this.props,
        children = _props.children,
        className = _props.className,
        full = _props.full,
        style = _props.style;
    return React.createElement("div", {
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
      } : {}, style)
    }, viewer ? children : null);
  };

  return Viewer$$1;
}(React.PureComponent), _class.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  full: PropTypes.bool,
  style: PropTypes.object
}, _class.defaultProps = {
  style: {}
}, _class.childContextTypes = {
  viewer: viewerType
}, _temp2);

var _class$1;
var _temp2$1;

var Entity$1 = (_temp2$1 = _class$1 =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(Entity$$1, _React$PureComponent);

  function Entity$$1() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this, _this.entity = null, _temp) || _assertThisInitialized(_this);
  }

  var _proto = Entity$$1.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _props = this.props,
        id = _props.id,
        name = _props.name,
        position = _props.position,
        description = _props.description;
    var viewer = this.context.viewer;
    this.entity = new Entity({
      id: id,
      name: name,
      position: position,
      description: description,
      point: {
        pixelSize: 10
      }
    });
    viewer.entities.add(this.entity);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var e = this.entity;
    var p = this.props;

    if (process.env.NODE_ENV !== "production" && p.id !== prevProps.id) {
      console.warn("Cesium entity id prop is not changable.");
    }

    e.name = p.name;
    e.position = p.position;
    e.description = p.description;
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var viewer = this.context.viewer;

    if (viewer && !viewer.isDestroyed()) {
      viewer.entities.remove(this.entity);
    }

    this.entity = null;
  };

  _proto.render = function render() {
    return null;
  };

  return Entity$$1;
}(React.PureComponent), _class$1.propTypes = {
  description: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.object
}, _class$1.defaultProps = {}, _class$1.contextTypes = {
  viewer: viewerType
}, _temp2$1);

export { index as PropTypes, Viewer$1 as Viewer, Entity$1 as Entity };
