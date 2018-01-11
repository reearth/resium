'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var cesium = require('cesium');
var PropTypes = _interopDefault(require('prop-types'));
var React = _interopDefault(require('react'));

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

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

var cameraType = PropTypes.instanceOf(cesium.Camera);
var cesiumWidgetType = PropTypes.instanceOf(cesium.CesiumWidget);
var entityCollectionType = PropTypes.instanceOf(cesium.EntityCollection);
var pointPrimitiveCollectionType = PropTypes.instanceOf(cesium.PointPrimitiveCollection);
var primitiveCollectionType = PropTypes.instanceOf(cesium.PrimitiveCollection);
var sceneType = PropTypes.instanceOf(cesium.Scene);
var viewerType = PropTypes.instanceOf(cesium.Viewer);



var types = Object.freeze({
	cameraType: cameraType,
	cesiumWidgetType: cesiumWidgetType,
	entityCollectionType: entityCollectionType,
	pointPrimitiveCollectionType: pointPrimitiveCollectionType,
	primitiveCollectionType: primitiveCollectionType,
	sceneType: sceneType,
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

    return (_temp = _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this, _this.cesiumElement = null, _temp) || _assertThisInitialized(_this);
  }

  var _proto = CesiumComponent.prototype;

  _proto.componentWillMount = function componentWillMount() {
    if (this.createCesiumElement && !this.constructor.initCesiumComponentWhenComponentDidMount) {
      this.cesiumElement = this.createCesiumElement(this.getPropsForCesium());

      if (this.cesiumElement) {
        attachEvents(this.cesiumElement, getEventProps(this.getCesiumEvents(), this.props));
      }
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    if (this.createCesiumElement && this.constructor.initCesiumComponentWhenComponentDidMount) {
      this.cesiumElement = this.createCesiumElement(this.getPropsForCesium());

      if (this.cesiumElement) {
        attachEvents(this.cesiumElement, getEventProps(this.getCesiumEvents(), this.props));
      }
    }

    if (this.mountCesiumElement) {
      this.mountCesiumElement(this.cesiumElement);
    }

    var onMount = this.props.onMount;

    if (onMount) {
      this.onMount(this.cesiumElement);
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var cesiumElement = this.cesiumElement;

    if (cesiumElement) {
      var events = this.getCesiumEvents();
      updateEvents(cesiumElement, getEventProps(events, prevProps), getEventProps(events, this.props));
    }

    var props = this.props;
    this.getCesiumProps().filter(function (p) {
      return prevProps[p] !== props[p];
    }).forEach(function (p) {
      cesiumElement[p] = props[p];
    });

    if (this.updateCesiumElement) {
      this.updateCesiumElement(cesiumElement, prevProps);
    }

    var onUpdate = this.props.onUpdate;

    if (onUpdate) {
      onUpdate(cesiumElement, prevProps);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var cesiumElement = this.cesiumElement;
    var onUnmount = this.props.onUnmount;

    if (onUnmount) {
      onUnmount(cesiumElement);
    }

    if (cesiumElement) {
      detachEvents(cesiumElement, getEventProps(this.getCesiumEvents(), this.props));
    }

    if (this.destroyCesiumElement) {
      this.destroyCesiumElement(cesiumElement);
    }

    this.cesiumElement = null;
  };

  _proto.getCesiumEvents = function getCesiumEvents() {
    return this.constructor.cesiumEvents || [];
  };

  _proto.getCesiumProps = function getCesiumProps() {
    return this.constructor.cesiumProps || [];
  };

  _proto.getCesiumReadOnlyProps = function getCesiumReadOnlyProps() {
    return this.constructor.cesiumReadOnlyProps || [];
  };

  _proto.getPropsForCesium = function getPropsForCesium() {
    var _this2 = this;

    return this.getCesiumProps().concat(this.getCesiumReadOnlyProps()).reduce(function (a, b) {
      var _rollupPluginBabelHel;

      return typeof _this2.props[b] === "undefined" ? a : _extends({}, a, (_rollupPluginBabelHel = {}, _rollupPluginBabelHel[b] = _this2.props[b], _rollupPluginBabelHel));
    }, {});
  };

  _proto.render = function render() {
    return null;
  };

  return CesiumComponent;
}(React.PureComponent);

CesiumComponent.propTypes = {
  onMount: PropTypes.func,
  onUnmount: PropTypes.func,
  onUpdate: PropTypes.func
};

var Entity$1 =
/*#__PURE__*/
function (_CesiumComponent) {
  _inheritsLoose(Entity$$1, _CesiumComponent);

  function Entity$$1() {
    return _CesiumComponent.apply(this, arguments) || this;
  }

  var _proto = Entity$$1.prototype;

  _proto.createCesiumElement = function createCesiumElement(options) {
    return new cesium.Entity(options);
  };

  _proto.mountCesiumElement = function mountCesiumElement(entity) {
    this.parent.add(entity);
  };

  _proto.destroyCesiumElement = function destroyCesiumElement(entity) {
    var p = this.parent;

    if (p) {
      p.remove(entity);
    }
  };

  _createClass(Entity$$1, [{
    key: "parent",
    get: function get() {
      var _context = this.context,
          entityCollection = _context.entityCollection,
          viewer = _context.viewer;

      if (entityCollection && !entityCollection.isDestroyed()) {
        return entityCollection;
      }

      if (viewer && !viewer.isDestroyed()) {
        return viewer.entities;
      }

      return null;
    }
  }]);
  return Entity$$1;
}(CesiumComponent);

Entity$1.propTypes = _extends({}, CesiumComponent.propTypes, {
  availability: PropTypes.any,
  billboard: PropTypes.any,
  box: PropTypes.any,
  corridor: PropTypes.any,
  cylinder: PropTypes.any,
  description: PropTypes.any,
  ellipse: PropTypes.any,
  ellipsoid: PropTypes.any,
  id: PropTypes.string,
  label: PropTypes.any,
  model: PropTypes.any,
  name: PropTypes.any,
  onDefinitionChanged: PropTypes.func,
  orientation: PropTypes.any,
  parent: PropTypes.any,
  path: PropTypes.any,
  plane: PropTypes.any,
  point: PropTypes.any,
  polygon: PropTypes.any,
  polyline: PropTypes.any,
  polylineVolume: PropTypes.any,
  position: PropTypes.any,
  properties: PropTypes.any,
  rectangle: PropTypes.any,
  show: PropTypes.any,
  viewFrom: PropTypes.any,
  wall: PropTypes.any
});
Entity$1.contextTypes = {
  entityCollection: entityCollectionType,
  viewer: viewerType
};
Entity$1.cesiumProps = ["availability", "show", "description", "position", "orientation", "viewFrom", "parent", "billboard", "box", "corridor", "cylinder", "ellipse", "ellipsoid", "label", "model", "name", "path", "plane", "point", "polygon", "polyline", "properties", "polylineVolume", "rectangle", "wall"];
Entity$1.cesiumReadOnlyProps = ["id"];
Entity$1.cesiumEvents = ["definitionChanged"];

var PointPrimitive =
/*#__PURE__*/
function (_CesiumComponent) {
  _inheritsLoose(PointPrimitive, _CesiumComponent);

  function PointPrimitive() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _CesiumComponent.call.apply(_CesiumComponent, [this].concat(args)) || this, _this.initialOptions = null, _temp) || _assertThisInitialized(_this);
  }

  var _proto = PointPrimitive.prototype;

  _proto.createCesiumElement = function createCesiumElement(options) {
    this.initialOptions = options;
    return null;
  };

  _proto.mountCesiumElement = function mountCesiumElement() {
    this.cesiumElement = this.parent.add(this.initialOptions);
  };

  _proto.destroyCesiumElement = function destroyCesiumElement(primitive) {
    var p = this.parent;

    if (p && !p.isDestroyed() && primitive) {
      p.remove(primitive);
    }

    this.initialOptions = null;
  };

  _createClass(PointPrimitive, [{
    key: "parent",
    get: function get() {
      var pointPrimitiveCollection = this.context.pointPrimitiveCollection;

      if (pointPrimitiveCollection && !pointPrimitiveCollection.isDestroyed()) {
        return pointPrimitiveCollection;
      }

      return null;
    }
  }]);
  return PointPrimitive;
}(CesiumComponent);

PointPrimitive.propTypes = _extends({}, CesiumComponent.propTypes, {
  color: PropTypes.any,
  disableDepthTestDistance: PropTypes.number,
  distanceDisplayCondition: PropTypes.any,
  id: PropTypes.any,
  outlineColor: PropTypes.any,
  outlineWidth: PropTypes.number,
  pixelSize: PropTypes.number,
  position: PropTypes.any,
  scaleByDistance: PropTypes.any,
  show: PropTypes.bool,
  translucencyByDistance: PropTypes.any
});
PointPrimitive.contextTypes = {
  pointPrimitiveCollection: pointPrimitiveCollectionType
};
PointPrimitive.cesiumProps = ["color", "disableDepthTestDistance", "distanceDisplayCondition", "id", "outlineColor", "outlineWidth", "pixelSize", "position", "scaleByDistance", "show", "translucencyByDistance"];
PointPrimitive.cesiumReadOnlyProps = [];
PointPrimitive.cesiumEvents = [];

var PointPrimitiveCollection$1 =
/*#__PURE__*/
function (_CesiumComponent) {
  _inheritsLoose(PointPrimitiveCollection$$1, _CesiumComponent);

  function PointPrimitiveCollection$$1() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _CesiumComponent.call.apply(_CesiumComponent, [this].concat(args)) || this, _this.state = {
      mounted: false
    }, _temp) || _assertThisInitialized(_this);
  }

  var _proto = PointPrimitiveCollection$$1.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      pointPrimitiveCollection: this.cesiumElement
    };
  };

  _proto.createCesiumElement = function createCesiumElement(options) {
    return new cesium.PointPrimitiveCollection(options);
  };

  _proto.mountCesiumElement = function mountCesiumElement(col) {
    this.parent.add(col);
    this.setState({
      mounted: true
    });
  };

  _proto.destroyCesiumElement = function destroyCesiumElement(col) {
    var p = this.parent;

    if (p && !p.isDestroyed()) {
      p.remove(col);
    }

    if (!col.isDestroyed()) {
      col.destroy();
    }
  };

  _proto.render = function render() {
    var children = this.props.children;
    var mounted = this.state.mounted;
    return mounted ? children : null;
  };

  _createClass(PointPrimitiveCollection$$1, [{
    key: "parent",
    get: function get() {
      var _context = this.context,
          premitiveCollection = _context.premitiveCollection,
          scene = _context.scene,
          viewer = _context.viewer;

      if (premitiveCollection && !premitiveCollection.isDestroyed()) {
        return premitiveCollection;
      }

      if (scene && !scene.isDestroyed()) {
        return scene.primitives;
      }

      if (viewer && !viewer.isDestroyed()) {
        return viewer.scene.primitives;
      }

      return null;
    }
  }]);
  return PointPrimitiveCollection$$1;
}(CesiumComponent);

PointPrimitiveCollection$1.propTypes = _extends({}, CesiumComponent.propTypes, {
  blendOption: PropTypes.any,
  children: PropTypes.any,
  debugShowBoundingVolume: PropTypes.bool,
  modelMatrix: PropTypes.any
});
PointPrimitiveCollection$1.contextTypes = {
  primitiveCollection: primitiveCollectionType,
  scene: sceneType,
  viewer: viewerType
};
PointPrimitiveCollection$1.childContextTypes = {
  pointPrimitiveCollection: pointPrimitiveCollectionType
};
PointPrimitiveCollection$1.cesiumProps = ["blendOption", "debugShowBoundingVolume", "modelMatrix"];
PointPrimitiveCollection$1.cesiumReadOnlyProps = [];
PointPrimitiveCollection$1.cesiumEvents = [];

var Primitive$1 =
/*#__PURE__*/
function (_CesiumComponent) {
  _inheritsLoose(Primitive$$1, _CesiumComponent);

  function Primitive$$1() {
    return _CesiumComponent.apply(this, arguments) || this;
  }

  var _proto = Primitive$$1.prototype;

  _proto.createCesiumElement = function createCesiumElement(options) {
    return new cesium.Primitive(options);
  };

  _proto.mountCesiumElement = function mountCesiumElement(premitive) {
    this.parent.add(premitive);
  };

  _proto.destroyCesiumElement = function destroyCesiumElement(premitive) {
    var p = this.parent;

    if (p) {
      p.remove(premitive);
    }
  };

  _createClass(Primitive$$1, [{
    key: "parent",
    get: function get() {
      var _context = this.context,
          premitiveCollection = _context.premitiveCollection,
          scene = _context.scene,
          viewer = _context.viewer;

      if (premitiveCollection && !premitiveCollection.isDestroyed()) {
        return premitiveCollection;
      }

      if (scene && !scene.isDestroyed()) {
        return scene.primitives;
      }

      if (viewer && !viewer.isDestroyed()) {
        return viewer.scene.primitives;
      }

      return null;
    }
  }]);
  return Primitive$$1;
}(CesiumComponent);

Primitive$1.propTypes = _extends({}, CesiumComponent.propTypes, {
  allowPicking: PropTypes.any,
  appearance: PropTypes.any,
  asynchronous: PropTypes.bool,
  compressVertices: PropTypes.bool,
  cull: PropTypes.bool,
  debugShowBoundingVolume: PropTypes.bool,
  depthFailAppearance: PropTypes.any,
  geometryInstances: PropTypes.any,
  interleave: PropTypes.bool,
  modelMatrix: PropTypes.any,
  releaseGeometryInstances: PropTypes.bool,
  shadows: PropTypes.any,
  show: PropTypes.bool
});
Primitive$1.contextTypes = {
  primitiveCollection: primitiveCollectionType,
  scene: sceneType,
  viewer: viewerType
};
Primitive$1.cesiumProps = ["allowPicking", "appearance", "cull", "debugShowBoundingVolume", "depthFailAppearance", "modelMatrix", "shadows", "show"];
Primitive$1.cesiumReadOnlyProps = ["asynchronous", "compressVertices", "geometryInstances", "interleave", "releaseGeometryInstances"];
Primitive$1.cesiumEvents = [];

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
      cesiumWidget: this.cesiumElement ? this.cesiumElement.cesiumWidget : null,
      scene: this.cesiumElement ? this.cesiumElement.scene : null,
      viewer: this.cesiumElement
    };
  };

  _proto.componentDidMount = function componentDidMount() {
    _CesiumComponent.prototype.componentDidMount.call(this);

    this.forceUpdate();
  };

  _proto.createCesiumElement = function createCesiumElement(options) {
    if (this.element) {
      return new cesium.Viewer(this.element, options);
    }

    return null;
  };

  _proto.destroyCesiumElement = function destroyCesiumElement(cesiumElement) {
    cesiumElement.destroy();
    this.element = null;
  };

  _proto.render = function render() {
    var _this2 = this;

    var _props = this.props,
        children = _props.children,
        containerProps = _props.containerProps,
        className = _props.className,
        full = _props.full,
        id = _props.id,
        style = _props.style;
    return React.createElement("div", _extends({
      className: className,
      id: id,
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
    }, containerProps), this.cesiumElement ? children : null);
  };

  return Viewer$$1;
}(CesiumComponent);

Viewer$1.propTypes = _extends({}, CesiumComponent.propTypes, {
  animation: PropTypes.any,
  automaticallyTrackDataSourceClocks: PropTypes.any,
  baseLayerPicker: PropTypes.any,
  children: PropTypes.any,
  className: PropTypes.string,
  clockViewModel: PropTypes.any,
  containerProps: PropTypes.object,
  contextOptions: PropTypes.any,
  creditContainer: PropTypes.any,
  creditViewport: PropTypes.any,
  dataSources: PropTypes.any,
  full: PropTypes.bool,
  fullscreenButton: PropTypes.any,
  fullscreenElement: PropTypes.any,
  geocoder: PropTypes.any,
  globe: PropTypes.any,
  homeButton: PropTypes.any,
  id: PropTypes.string,
  imageryProvider: PropTypes.any,
  imageryProviderViewModels: PropTypes.any,
  infoBox: PropTypes.any,
  mapMode2D: PropTypes.any,
  mapProjection: PropTypes.any,
  navigationHelpButton: PropTypes.any,
  navigationInstructionsInitiallyVisible: PropTypes.any,
  onSelectedEntityChanged: PropTypes.func,
  onTrackedEntityChanged: PropTypes.func,
  orderIndependentTranslucency: PropTypes.any,
  projectionPicker: PropTypes.any,
  scene3DOnly: PropTypes.any,
  sceneMode: PropTypes.any,
  sceneModePicker: PropTypes.any,
  selectedImageryProviderViewModel: PropTypes.any,
  selectedTerrainProviderViewModel: PropTypes.any,
  selectionIndicator: PropTypes.any,
  shadows: PropTypes.any,
  showRenderLoopErrors: PropTypes.any,
  skyAtmosphere: PropTypes.any,
  skyBox: PropTypes.any,
  style: PropTypes.object,
  targetFrameRate: PropTypes.any,
  terrainExaggeration: PropTypes.any,
  terrainProvider: PropTypes.any,
  terrainProviderViewModels: PropTypes.any,
  terrainShadows: PropTypes.any,
  timeline: PropTypes.any,
  useDefaultRenderLoop: PropTypes.any,
  vrButton: PropTypes.any
});
Viewer$1.defaultProps = {
  style: {}
};
Viewer$1.childContextTypes = {
  cesiumWidget: cesiumWidgetType,
  scene: sceneType,
  viewer: viewerType
};
Viewer$1.cesiumProps = ["animation", "baseLayerPicker", "fullscreenButton", "vrButton", "geocoder", "homeButton", "infoBox", "sceneModePicker", "selectionIndicator", "timeline", "navigationHelpButton", "navigationInstructionsInitiallyVisible", "scene3DOnly", "clockViewModel", "selectedImageryProviderViewModel", "imageryProviderViewModels", "selectedTerrainProviderViewModel", "terrainProviderViewModels", "imageryProvider", "terrainProvider", "skyBox", "skyAtmosphere", "fullscreenElement", "useDefaultRenderLoop", "targetFrameRate", "showRenderLoopErrors", "automaticallyTrackDataSourceClocks", "contextOptions", "sceneMode", "mapProjection", "globe", "orderIndependentTranslucency", "creditContainer", "creditViewport", "dataSources", "terrainExaggeration", "shadows", "terrainShadows", "mapMode2D", "projectionPicker"];
Viewer$1.cesiumEvents = ["selectedEntityChanged", "trackedEntityChanged"];
Viewer$1.initCesiumComponentWhenComponentDidMount = true;

exports.PropTypes = types;
exports.Entity = Entity$1;
exports.PointPrimitive = PointPrimitive;
exports.PointPrimitiveCollection = PointPrimitiveCollection$1;
exports.Primitive = Primitive$1;
exports.Viewer = Viewer$1;
