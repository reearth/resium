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



var types = Object.freeze({
	viewerType: viewerType
});

var attachEvents = function attachEvents(target, events) {
  Object.entries(events).forEach(function (_ref) {
    var k = _ref[0],
        v = _ref[1];
    if (typeof v !== "function") return;
    target[k].addEventListener(v);
  });
};
var detachEvents = function detachEvents(target, events) {
  Object.entries(events).forEach(function (_ref2) {
    var k = _ref2[0],
        v = _ref2[1];
    if (typeof v !== "function") return;
    target[k].removeEventListener(v);
  });
};
var updateEvents = function updateEvents(target, prevEvents, newEvents) {
  var pek = Object.keys(prevEvents);
  var nek = Object.keys(newEvents); // removed events

  var re = pek.map(function (k) {
    return [k, prevEvents[k]];
  }).reduce(function (e, _ref3) {
    var k = _ref3[0],
        v = _ref3[1];

    if (nek.indexOf(k) === -1 || v !== newEvents[k] || typeof v !== "function") {
      e[k] = v;
    }

    return e;
  }, {}); // new events

  var ne = nek.map(function (k) {
    return [k, newEvents[k]];
  }).reduce(function (e, _ref4) {
    var k = _ref4[0],
        v = _ref4[1];

    if ((pek.indexOf(k) === -1 || v !== prevEvents[k]) && typeof v === "function") {
      e[k] = v;
    }

    return e;
  }, {});
  detachEvents(target, re);
  attachEvents(target, ne);
};
var regex = /^on([A-Z])/; // eslint-disable-next-line react/destructuring-assignment

var getEventProps = function getEventProps(eventNames, props) {
  return Object.keys(props).reduce(function (a, b) {
    // eslint-disable-next-line react/destructuring-assignment
    if (!regex.test(b) || typeof props[b] !== "function") {
      return a;
    }

    var en = b.replace(regex, function (m, p) {
      return p.toLowerCase();
    });

    if (eventNames.indexOf(en) >= 0) {
      a[en] = props[b];
    }

    return a;
  }, {});
};

var CesiumComponent =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(CesiumComponent, _React$PureComponent);

  function CesiumComponent() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this, _this.target = null, _temp) || _assertThisInitialized(_this);
  }

  var _proto = CesiumComponent.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.onMount) {
      var props = this.props;
      var options = this.getProps().reduce(function (a, b) {
        var _rollupPluginBabelHel;

        return typeof props[b] === "undefined" ? a : _extends({}, a, (_rollupPluginBabelHel = {}, _rollupPluginBabelHel[b] = props[b], _rollupPluginBabelHel));
      }, {});
      var target = this.onMount(options, this.props, this.context);

      if (target) {
        this.target = target;
        attachEvents(target, getEventProps(this.getEvents(), this.props));
      }
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var target = this.target;

    if (target) {
      var events = this.getEvents();
      updateEvents(target, getEventProps(events, prevProps), getEventProps(events, this.props));
    }

    var props = this.props;
    this.getProps().forEach(function (p) {
      if (prevProps[p] !== props[p]) {
        target[p] = props[p];
      }
    });

    if (this.onUpdate) {
      this.onUpdate(target, props, prevProps, this.context);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var target = this.target;

    if (target) {
      detachEvents(target, getEventProps(this.getEvents(), this.props));
    }

    if (this.onUnmount) {
      this.onUnmount(target, this.props, this.context);
    }

    this.target = null;
  };

  _proto.getEvents = function getEvents() {
    return this.constructor.cesiumEvents || [];
  };

  _proto.getProps = function getProps() {
    return this.constructor.cesiumProps || [];
  };

  _proto.getTarget = function getTarget() {
    return this.target;
  };

  _proto.render = function render() {
    return null;
  };

  return CesiumComponent;
}(React.PureComponent);

var Viewer$1 =
/*#__PURE__*/
function (_CesiumComponent) {
  _inheritsLoose(Viewer$$1, _CesiumComponent);

  function Viewer$$1() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _CesiumComponent.call.apply(_CesiumComponent, [this].concat(args)) || this, _this.element = null, _temp) || _assertThisInitialized(_this);
  }

  var _proto = Viewer$$1.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      viewer: this.getTarget()
    };
  };

  _proto.componentDidMount = function componentDidMount() {
    _CesiumComponent.prototype.componentDidMount.call(this);

    this.forceUpdate();
  };

  _proto.onMount = function onMount() {
    return new Viewer(this.element, {});
  };

  _proto.onUnmount = function onUnmount() {
    this.getTarget().destroy();
    this.element = null;
  };

  _proto.render = function render() {
    var _this2 = this;

    var viewer = this.getTarget();
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
}(CesiumComponent);

Viewer$1.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  full: PropTypes.bool,
  onSelectedEntityChanged: PropTypes.func,
  style: PropTypes.object
};
Viewer$1.defaultProps = {
  style: {}
};
Viewer$1.childContextTypes = {
  viewer: viewerType
};
Viewer$1.cesiumProps = [];
Viewer$1.cesiumEvents = ["selectedEntityChanged"];

var Entity$1 =
/*#__PURE__*/
function (_CesiumComponent) {
  _inheritsLoose(Entity$$1, _CesiumComponent);

  function Entity$$1() {
    return _CesiumComponent.apply(this, arguments) || this;
  }

  var _proto = Entity$$1.prototype;

  _proto.onMount = function onMount(options, _, _ref) {
    var viewer = _ref.viewer;
    var entity = new Entity(_extends({}, options, {
      point: {
        pixelSize: 10
      }
    }));
    viewer.entities.add(entity);
    return entity;
  };

  _proto.onUnmount = function onUnmount(entity, _, _ref2) {
    var viewer = _ref2.viewer;

    if (viewer && !viewer.isDestroyed()) {
      viewer.entities.remove(entity);
    }
  };

  return Entity$$1;
}(CesiumComponent);

Entity$1.propTypes = {
  description: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.object
};
Entity$1.contextTypes = {
  viewer: viewerType
};
Entity$1.cesiumProps = ["id", "name", "position", "description"];
Entity$1.cesiumEvents = [];

export { types as PropTypes, Viewer$1 as Viewer, Entity$1 as Entity };
