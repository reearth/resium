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

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

var cameraType = PropTypes.instanceOf(cesium.Camera);
var cesiumWidgetType = PropTypes.instanceOf(cesium.CesiumWidget);
var dataSourceCollectionType = PropTypes.instanceOf(cesium.DataSourceCollection);
var entityCollectionType = PropTypes.instanceOf(cesium.EntityCollection);
var imageryLayerCollectionType = PropTypes.instanceOf(cesium.ImageryLayerCollection);
var pointPrimitiveCollectionType = PropTypes.instanceOf(cesium.PointPrimitiveCollection);
var primitiveCollectionType = PropTypes.instanceOf(cesium.PrimitiveCollection);
var sceneType = PropTypes.instanceOf(cesium.Scene);
var screenSpaceEventHandlerType = PropTypes.instanceOf(cesium.ScreenSpaceEventHandler);
var viewerType = PropTypes.instanceOf(cesium.Viewer);



var types = Object.freeze({
	cameraType: cameraType,
	cesiumWidgetType: cesiumWidgetType,
	dataSourceCollectionType: dataSourceCollectionType,
	entityCollectionType: entityCollectionType,
	imageryLayerCollectionType: imageryLayerCollectionType,
	pointPrimitiveCollectionType: pointPrimitiveCollectionType,
	primitiveCollectionType: primitiveCollectionType,
	sceneType: sceneType,
	screenSpaceEventHandlerType: screenSpaceEventHandlerType,
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
}; // eslint-disable-next-line react/destructuring-assignment

var getEventProps = function getEventProps(eventNames, props) {
  return eventNames.reduce(function (a, b) {
    var _rollupPluginBabelHel;

    var pn = "on" + b[0].toUpperCase() + b.slice(1).replace(/Event$/, ""); // eslint-disable-next-line react/destructuring-assignment

    return typeof props[pn] === "function" ? _extends({}, a, (_rollupPluginBabelHel = {}, _rollupPluginBabelHel[b] = props[pn], _rollupPluginBabelHel)) : a;
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

    return (_temp = _this = _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args)) || this, _this.cesiumElement = null, _this._mounted = false, _temp) || _assertThisInitialized(_this);
  }

  var _proto = CesiumComponent.prototype;

  _proto.componentWillMount = function componentWillMount() {
    if (!this.constructor.initCesiumComponentWhenComponentDidMount) {
      this._create();
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    if (this.constructor.initCesiumComponentWhenComponentDidMount) {
      this._create();
    }

    this._mount();
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var cesiumElement = this.cesiumElement;

    if (cesiumElement) {
      var events = this.getCesiumEvents();
      updateEvents(cesiumElement, getEventProps(events, prevProps), getEventProps(events, this.props));
    }

    var props = this.props;

    if (this.getCesiumReadOnlyProps().some(function (p) {
      return prevProps[p] !== props[p];
    })) {
      this._remount();

      return;
    }

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
    this._unmount();
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

  _proto._create = function _create() {
    if (!this.createCesiumElement) return;
    this.cesiumElement = this.createCesiumElement(this.getPropsForCesium());

    if (this.cesiumElement) {
      attachEvents(this.cesiumElement, getEventProps(this.getCesiumEvents(), this.props));
    }
  };

  _proto._mount = function _mount() {
    if (this.mountCesiumElement) {
      this.mountCesiumElement(this.cesiumElement);
    }

    var onMount = this.props.onMount;

    if (onMount) {
      this.onMount(this.cesiumElement);
    }

    this._mounted = true;
    this.forceUpdate();
  };

  _proto._unmount = function _unmount() {
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

  _proto._remount = function _remount() {
    this._unmount();

    this._create();

    this._mount();
  };

  _proto.render = function render() {
    var children = this.props.children;
    return this._mounted && typeof children !== "undefined" ? children : null;
  };

  return CesiumComponent;
}(React.PureComponent);

CesiumComponent.propTypes = {
  children: PropTypes.any,
  onMount: PropTypes.func,
  onUnmount: PropTypes.func,
  onUpdate: PropTypes.func
};

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
      var v = new cesium.Viewer(this.element, options);
      var extend = this.props.extend;

      if (extend) {
        if (Array.isArray(extend)) {
          extend.forEach(function (e) {
            v.extend(e);
          });
        } else {
          v.extend(extend);
        }
      }

      return v;
    }

    return null;
  };

  _proto.updateCesiumElement = function updateCesiumElement(cesiumElement, prev) {
    if (this.props.selectedEntity !== prev.selectedEntity) {
      cesiumElement.selectedEntity = this.props.selectedEntity;
    }

    if (this.props.trackedEntity !== prev.trackedEntity) {
      cesiumElement.trackedEntity = this.props.trackedEntity;
    }
  };

  _proto.destroyCesiumElement = function destroyCesiumElement(cesiumElement) {
    cesiumElement.destroy();
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
  extend: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.any), PropTypes.any]),
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
  selectedEntity: PropTypes.any,
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
  trackedEntity: PropTypes.any,
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

var CesiumWidget$1 =
/*#__PURE__*/
function (_CesiumComponent) {
  _inheritsLoose(CesiumWidget$$1, _CesiumComponent);

  function CesiumWidget$$1() {
    var _temp, _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (_temp = _this = _CesiumComponent.call.apply(_CesiumComponent, [this].concat(args)) || this, _this.element = null, _temp) || _assertThisInitialized(_this);
  }

  var _proto = CesiumWidget$$1.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      cesiumWidget: this.cesiumElement,
      scene: this.cesiumElement ? this.cesiumElement.scene : null
    };
  };

  _proto.componentDidMount = function componentDidMount() {
    _CesiumComponent.prototype.componentDidMount.call(this);

    this.forceUpdate();
  };

  _proto.createCesiumElement = function createCesiumElement(options) {
    if (this.element) {
      return new cesium.CesiumWidget(this.element, options);
    }

    return null;
  };

  _proto.destroyCesiumElement = function destroyCesiumElement(cesiumElement) {
    cesiumElement.destroy();
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

  return CesiumWidget$$1;
}(CesiumComponent);

CesiumWidget$1.propTypes = _extends({}, CesiumComponent.propTypes, {
  children: PropTypes.any,
  className: PropTypes.string,
  clock: PropTypes.any,
  containerProps: PropTypes.object,
  contextOptions: PropTypes.any,
  creditContainer: PropTypes.any,
  creditViewport: PropTypes.any,
  full: PropTypes.bool,
  globe: PropTypes.any,
  id: PropTypes.string,
  imageryProvider: PropTypes.any,
  mapMode2D: PropTypes.any,
  mapProjection: PropTypes.any,
  orderIndependentTranslucency: PropTypes.any,
  scene3DOnly: PropTypes.any,
  sceneMode: PropTypes.any,
  shadows: PropTypes.any,
  showRenderLoopErrors: PropTypes.any,
  skyAtmosphere: PropTypes.any,
  skyBox: PropTypes.any,
  style: PropTypes.object,
  targetFrameRate: PropTypes.any,
  terrainExaggeration: PropTypes.any,
  terrainProvider: PropTypes.any,
  terrainShadows: PropTypes.any,
  useDefaultRenderLoop: PropTypes.any
});
CesiumWidget$1.defaultProps = {
  style: {}
};
CesiumWidget$1.childContextTypes = {
  cesiumWidget: cesiumWidgetType,
  scene: sceneType
};
CesiumWidget$1.cesiumProps = ["scene3DOnly", "clock", "imageryProvider", "terrainProvider", "skyBox", "skyAtmosphere", "useDefaultRenderLoop", "targetFrameRate", "showRenderLoopErrors", "contextOptions", "sceneMode", "mapProjection", "globe", "orderIndependentTranslucency", "creditContainer", "creditViewport", "terrainExaggeration", "shadows", "terrainShadows", "mapMode2D"];
CesiumWidget$1.initCesiumComponentWhenComponentDidMount = true;

var Scene$1 =
/*#__PURE__*/
function (_CesiumComponent) {
  _inheritsLoose(Scene$$1, _CesiumComponent);

  function Scene$$1() {
    return _CesiumComponent.apply(this, arguments) || this;
  }

  var _proto = Scene$$1.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      scene: this.cesiumElement
    };
  };

  _proto.createCesiumElement = function createCesiumElement(options) {
    var _context = this.context,
        cesiumWidget = _context.cesiumWidget,
        viewer = _context.viewer;
    var s = cesiumWidget ? cesiumWidget.scene : viewer.scene;
    Object.keys(options).filter(function (k) {
      return typeof options[k] !== "undefined";
    }).forEach(function (k) {
      s[k] = options[k];
    });

    if (typeof this.props.mode !== "undefined") {
      this._changeMode(s);
    }

    return s;
  };

  _proto.updateCesiumElement = function updateCesiumElement(scene, prev) {
    if (prev.mode !== this.props.mode) {
      this._changeMode(scene);
    }
  };

  _proto._changeMode = function _changeMode(scene) {
    var _props = this.props,
        mode = _props.mode,
        morph = _props.morph;
    if (typeof mode !== "number") return;

    if (typeof morph === "number") {
      switch (mode) {
        case cesium.SceneMode.SCENE2D:
          scene.morphTo2D(morph);
          break;

        case cesium.SceneMode.COLUMBUS_VIEW:
          scene.morphToColumbusView(morph);
          break;

        case cesium.SceneMode.SCENE3D:
          scene.morphTo3D(morph);
          break;

        default:
          scene.mode = mode;
      }
    } else {
      scene.mode = mode;
    }
  };

  return Scene$$1;
}(CesiumComponent);

Scene$1.propTypes = _extends({}, CesiumComponent.propTypes, {
  backgroundColor: PropTypes.any,
  canvas: PropTypes.any,
  completeMorphOnUserInput: PropTypes.any,
  debugCommandFilter: PropTypes.any,
  debugShowCommands: PropTypes.any,
  debugShowDepthFrustum: PropTypes.any,
  debugShowFramesPerSecond: PropTypes.any,
  debugShowFrustumPlanes: PropTypes.any,
  debugShowFrustums: PropTypes.any,
  debugShowGlobeDepth: PropTypes.any,
  eyeSeparation: PropTypes.any,
  farToNearRatio: PropTypes.any,
  focalLength: PropTypes.any,
  fog: PropTypes.any,
  fxaa: PropTypes.any,
  globe: PropTypes.any,
  imagerySplitPosition: PropTypes.any,
  invertClassification: PropTypes.any,
  invertClassificationColor: PropTypes.any,
  mapMode2D: PropTypes.any,
  mapProjection: PropTypes.any,
  minimumDisableDepthTestDistance: PropTypes.any,
  mode: PropTypes.any,
  moon: PropTypes.any,
  morph: PropTypes.number,
  nearToFarDistance2D: PropTypes.any,
  onMorphComplete: PropTypes.func,
  onMorphStart: PropTypes.func,
  onPostRender: PropTypes.func,
  onPreRender: PropTypes.func,
  onRenderError: PropTypes.func,
  onTerrainProviderChanged: PropTypes.func,
  pickTranslucentDepth: PropTypes.any,
  rethrowRenderErrors: PropTypes.any,
  shadowMap: PropTypes.any,
  skyAtmosphere: PropTypes.any,
  skyBox: PropTypes.any,
  sun: PropTypes.any,
  sunBloom: PropTypes.any,
  terrainExaggeration: PropTypes.any,
  terrainProvider: PropTypes.any,
  useDepthPicking: PropTypes.any,
  useWebVR: PropTypes.any
});
Scene$1.contextTypes = {
  cesiumWidget: cesiumWidgetType,
  viewer: viewerType
};
Scene$1.childContextTypes = {
  scene: sceneType
};
Scene$1.cesiumProps = ["backgroundColor", "canvas", "completeMorphOnUserInput", "debugCommandFilter", "debugShowCommands", "debugShowDepthFrustum", "debugShowFramesPerSecond", "debugShowFrustumPlanes", "debugShowFrustums", "debugShowGlobeDepth", "eyeSeparation", "farToNearRatio", "focalLength", "fog", "fxaa", "globe", "imagerySplitPosition", "invertClassification", "invertClassificationColor", "mapMode2D", "mapProjection", "minimumDisableDepthTestDistance", "moon", "nearToFarDistance2D", "pickTranslucentDepth", "rethrowRenderErrors", "shadowMap", "skyAtmosphere", "skyBox", "sun", "sunBloom", "terrainExaggeration", "terrainProvider", "useDepthPicking", "useWebVR"];
Scene$1.cesiumEvents = ["morphComplete", "morphStart", "postRender", "preRender", "renderError", "terrainProviderChanged"];

var Camera$1 =
/*#__PURE__*/
function (_CesiumComponent) {
  _inheritsLoose(Camera$$1, _CesiumComponent);

  function Camera$$1() {
    return _CesiumComponent.apply(this, arguments) || this;
  }

  var _proto = Camera$$1.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      camera: this.cesiumElement
    };
  };

  _proto.createCesiumElement = function createCesiumElement(options) {
    var c = this.context.scene.camera;
    Object.keys(options).filter(function (k) {
      return typeof options[k] !== "undefined";
    }).forEach(function (k) {
      c[k] = options[k];
    });
    return c;
  };

  return Camera$$1;
}(CesiumComponent);

Camera$1.propTypes = _extends({}, CesiumComponent.propTypes, {
  constrainedAxis: PropTypes.func,
  defaultLookAmount: PropTypes.any,
  defaultMoveAmount: PropTypes.any,
  defaultRotateAmount: PropTypes.any,
  defaultZoomAmount: PropTypes.any,
  direction: PropTypes.any,
  frustum: PropTypes.any,
  maximumZoomFactor: PropTypes.any,
  onChanged: PropTypes.func,
  onMoveEnd: PropTypes.func,
  onMoveStart: PropTypes.func,
  percentageChanged: PropTypes.any,
  position: PropTypes.any,
  right: PropTypes.any,
  up: PropTypes.any
});
Camera$1.contextTypes = {
  scene: sceneType
};
Camera$1.childContextTypes = {
  camera: cameraType
};
Camera$1.cesiumProps = ["constrainedAxis", "defaultLookAmount", "defaultMoveAmount", "defaultRotateAmount", "defaultZoomAmount", "direction", "frustum", "maximumZoomFactor", "percentageChanged", "position", "right", "up"];
Camera$1.cesiumEvents = ["changed", "moveEnd", "moveStart"];

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

      if (entityCollection) {
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

var DataSource =
/*#__PURE__*/
function (_CesiumComponent) {
  _inheritsLoose(DataSource, _CesiumComponent);

  function DataSource() {
    return _CesiumComponent.apply(this, arguments) || this;
  }

  var _proto = DataSource.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      entityCollection: this.cesiumElement ? this.cesiumElement.entities : null
    };
  };

  _proto.componentWillMount = function componentWillMount() {
    _CesiumComponent.prototype.componentWillMount.call(this);

    if (this.cesiumElement) {
      if (this.props.clock) {
        this.cesiumElement.clock = this.props.clock;
      }

      if (this.props.clustering) {
        this.cesiumElement.clustering = this.props.clustering;
      }

      if (this.props.name) {
        this.cesiumElement.name = this.props.name;
      }

      if (this.props.show === true || this.props.show === false) {
        this.cesiumElement.show = this.props.show;
      }
    }
  };

  _proto.createCesiumElement = function createCesiumElement() {
    throw new Error("DataSource#createCesiumElement is not implemented");
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

  _createClass(DataSource, [{
    key: "parent",
    get: function get() {
      var _context = this.context,
          dataSourceCollection = _context.dataSourceCollection,
          viewer = _context.viewer;

      if (dataSourceCollection && !dataSourceCollection.isDestroyed()) {
        return dataSourceCollection;
      }

      if (viewer && !viewer.isDestroyed()) {
        return viewer.dataSourceDisplay.dataSources;
      }

      return null;
    }
  }]);
  return DataSource;
}(CesiumComponent);

DataSource.propTypes = {
  clock: PropTypes.any,
  clustering: PropTypes.any,
  name: PropTypes.string,
  onChanged: PropTypes.func,
  onError: PropTypes.func,
  onLoading: PropTypes.func,
  show: PropTypes.bool
};
DataSource.contextTypes = {
  dataSourceCollection: dataSourceCollectionType,
  viewer: viewerType
};
DataSource.childContextTypes = {
  entityCollection: entityCollectionType
};
DataSource.cesiumProps = ["clock", "clustering", "name", "show"];
DataSource.cesiumEvents = ["changedEvent", "errorEvent", "loadingEvent"];

var CustomDataSource$1 =
/*#__PURE__*/
function (_DataSource) {
  _inheritsLoose(CustomDataSource$$1, _DataSource);

  function CustomDataSource$$1() {
    return _DataSource.apply(this, arguments) || this;
  }

  var _proto = CustomDataSource$$1.prototype;

  _proto.createCesiumElement = function createCesiumElement(options) {
    return new cesium.CustomDataSource(options.name);
  };

  return CustomDataSource$$1;
}(DataSource);

CustomDataSource$1.PropTypes = _extends({}, DataSource.propTypes);
CustomDataSource$1.contextTypes = _extends({}, DataSource.contextTypes);
CustomDataSource$1.cesiumProps = DataSource.cesiumProps.concat();
CustomDataSource$1.cesiumEvents = DataSource.cesiumEvents.concat();

var CzmlDataSource$1 =
/*#__PURE__*/
function (_DataSource) {
  _inheritsLoose(CzmlDataSource$$1, _DataSource);

  function CzmlDataSource$$1() {
    return _DataSource.apply(this, arguments) || this;
  }

  var _proto = CzmlDataSource$$1.prototype;

  _proto.createCesiumElement = function createCesiumElement(options) {
    return new cesium.CzmlDataSource(options.name);
  };

  _proto.mountCesiumElement = function mountCesiumElement() {
    this._load();
  };

  _proto.updateCesiumElement = function updateCesiumElement(ds, prev) {
    var _props = this.props,
        czml = _props.czml,
        url = _props.url;

    if (czml !== prev.czml || url !== prev.url) {
      this._load();
    }
  };

  _proto._load = function _load() {
    var _this = this;

    var _props2 = this.props,
        czml = _props2.czml,
        onError = _props2.onError,
        onLoad = _props2.onLoad,
        onProgress = _props2.onProgress,
        query = _props2.query,
        sourceUri = _props2.sourceUri,
        url = _props2.url;

    if (czml || url) {
      this.cesiumElement.load(czml || url, {
        sourceUri: sourceUri,
        query: query
      }).then(function () {
        _this.parent.add(arguments.length <= 0 ? undefined : arguments[0]); // args[0] === this.cesiumElement


        if (onLoad) return onLoad.apply(void 0, arguments);
        return undefined;
      }, onError, onProgress);
    }
  };

  return CzmlDataSource$$1;
}(DataSource);

CzmlDataSource$1.propTypes = _extends({}, DataSource.propTypes, {
  czml: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.object)]),
  onError: PropTypes.func,
  onLoad: PropTypes.func,
  onProgress: PropTypes.func,
  query: PropTypes.object,
  sourceUri: PropTypes.string,
  url: PropTypes.string
});
CzmlDataSource$1.contextTypes = _extends({}, DataSource.contextTypes);
CzmlDataSource$1.cesiumProps = DataSource.cesiumProps.concat();
CzmlDataSource$1.cesiumEvents = DataSource.cesiumEvents.concat();

var GeoJsonDataSource$1 =
/*#__PURE__*/
function (_DataSource) {
  _inheritsLoose(GeoJsonDataSource$$1, _DataSource);

  function GeoJsonDataSource$$1() {
    return _DataSource.apply(this, arguments) || this;
  }

  var _proto = GeoJsonDataSource$$1.prototype;

  _proto.createCesiumElement = function createCesiumElement(options) {
    return new cesium.GeoJsonDataSource(options.name);
  };

  _proto.mountCesiumElement = function mountCesiumElement() {
    this._load();
  };

  _proto.updateCesiumElement = function updateCesiumElement(ds, prev) {
    var _props = this.props,
        data = _props.data,
        url = _props.url;

    if (data !== prev.data || url !== prev.url) {
      this._load();
    }
  };

  _proto._load = function _load() {
    var _this = this;

    var _props2 = this.props,
        clampToGround = _props2.clampToGround,
        data = _props2.data,
        describe = _props2.describe,
        fill = _props2.fill,
        markerColor = _props2.markerColor,
        markerSize = _props2.markerSize,
        markerSymbol = _props2.markerSymbol,
        onError = _props2.onError,
        onLoad = _props2.onLoad,
        onProgress = _props2.onProgress,
        sourceUri = _props2.sourceUri,
        stroke = _props2.stroke,
        strokeWidth = _props2.strokeWidth,
        url = _props2.url;

    if (data || url) {
      this.cesiumElement.load(data || url, {
        clampToGround: clampToGround,
        describe: describe,
        fill: fill,
        markerColor: markerColor,
        markerSize: markerSize,
        markerSymbol: markerSymbol,
        stroke: stroke,
        strokeWidth: strokeWidth,
        sourceUri: sourceUri
      }).then(function () {
        _this.parent.add(arguments.length <= 0 ? undefined : arguments[0]); // args[0] === this.cesiumElement


        if (onLoad) return onLoad.apply(void 0, arguments);
        return undefined;
      }, onError, onProgress);
    }
  };

  return GeoJsonDataSource$$1;
}(DataSource);

GeoJsonDataSource$1.propTypes = _extends({}, DataSource.propTypes, {
  clampToGround: PropTypes.bool,
  data: PropTypes.object,
  describe: PropTypes.any,
  fill: PropTypes.any,
  markerColor: PropTypes.any,
  markerSize: PropTypes.number,
  markerSymbol: PropTypes.string,
  onError: PropTypes.func,
  onLoad: PropTypes.func,
  onProgress: PropTypes.func,
  sourceUri: PropTypes.string,
  stroke: PropTypes.any,
  strokeWidth: PropTypes.number,
  url: PropTypes.string
});
GeoJsonDataSource$1.contextTypes = _extends({}, DataSource.contextTypes);
GeoJsonDataSource$1.cesiumProps = DataSource.cesiumProps.concat();
GeoJsonDataSource$1.cesiumEvents = DataSource.cesiumEvents.concat();

var KmlDataSource$1 =
/*#__PURE__*/
function (_DataSource) {
  _inheritsLoose(KmlDataSource$$1, _DataSource);

  function KmlDataSource$$1() {
    return _DataSource.apply(this, arguments) || this;
  }

  var _proto = KmlDataSource$$1.prototype;

  _proto.createCesiumElement = function createCesiumElement(options) {
    var scene = this.context.scene;
    return new cesium.KmlDataSource({
      camera: options.camera || (scene ? scene.camera : undefined),
      canvas: options.canvas || (scene ? scene.canvas : undefined),
      proxy: options.proxy
    });
  };

  _proto.mountCesiumElement = function mountCesiumElement() {
    this._load();
  };

  _proto.updateCesiumElement = function updateCesiumElement(ds, prev) {
    var _props = this.props,
        data = _props.data,
        url = _props.url;

    if (data !== prev.data || url !== prev.url) {
      this._load();
    }
  };

  _proto._load = function _load() {
    var _this = this;

    var _props2 = this.props,
        clampToGround = _props2.clampToGround,
        data = _props2.data,
        query = _props2.query,
        onError = _props2.onError,
        onLoad = _props2.onLoad,
        onProgress = _props2.onProgress,
        sourceUri = _props2.sourceUri,
        url = _props2.url;

    if (data || url) {
      this.cesiumElement.load(data || url, {
        clampToGround: clampToGround,
        query: query,
        sourceUri: sourceUri
      }).then(function () {
        _this.parent.add(arguments.length <= 0 ? undefined : arguments[0]); // args[0] === this.cesiumElement


        if (onLoad) return onLoad.apply(void 0, arguments);
        return undefined;
      }, onError, onProgress);
    }
  };

  return KmlDataSource$$1;
}(DataSource);

KmlDataSource$1.propTypes = _extends({}, DataSource.propTypes, {
  clampToGround: PropTypes.bool,
  data: PropTypes.any,
  onError: PropTypes.func,
  onLoad: PropTypes.func,
  onProgress: PropTypes.func,
  onRefresh: PropTypes.func,
  onUnsupportedNode: PropTypes.func,
  query: PropTypes.object,
  sourceUri: PropTypes.string,
  url: PropTypes.string
});
KmlDataSource$1.contextTypes = _extends({}, DataSource.contextTypes, {
  scene: sceneType
});
KmlDataSource$1.cesiumProps = DataSource.cesiumProps.concat();
KmlDataSource$1.cesiumReadonlyProps = ["camera", "canvas", "proxy"];
KmlDataSource$1.cesiumEvents = DataSource.cesiumEvents.concat(["refreshEvent", "unsupportedNodeEvent"]);

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

var PointPrimitiveCollection$1 =
/*#__PURE__*/
function (_CesiumComponent) {
  _inheritsLoose(PointPrimitiveCollection$$1, _CesiumComponent);

  function PointPrimitiveCollection$$1() {
    return _CesiumComponent.apply(this, arguments) || this;
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

var ScreenSpaceEvent =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(ScreenSpaceEvent, _React$PureComponent);

  function ScreenSpaceEvent() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = ScreenSpaceEvent.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _props = this.props,
        action = _props.action,
        modifier = _props.modifier,
        type = _props.type;
    var screenSpaceEventHandler = this.context.screenSpaceEventHandler;
    screenSpaceEventHandler.setInputAction(action, type, modifier);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var screenSpaceEventHandler = this.context.screenSpaceEventHandler;
    screenSpaceEventHandler.removeInputAction(prevProps.type, prevProps.modifier);
    this.componentDidMount();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var _props2 = this.props,
        modifier = _props2.modifier,
        type = _props2.type;
    var screenSpaceEventHandler = this.context.screenSpaceEventHandler;

    if (screenSpaceEventHandler && !screenSpaceEventHandler.isDestroyed()) {
      screenSpaceEventHandler.removeInputAction(type, modifier);
    }
  };

  _proto.render = function render() {
    return null;
  };

  return ScreenSpaceEvent;
}(React.PureComponent);

ScreenSpaceEvent.propTypes = {
  action: PropTypes.func.isRequired,
  modifier: PropTypes.number,
  type: PropTypes.number.isRequired
};
ScreenSpaceEvent.contextTypes = {
  screenSpaceEventHandler: screenSpaceEventHandlerType
};

var ScreenSpaceEventHandler$1 =
/*#__PURE__*/
function (_CesiumComponent) {
  _inheritsLoose(ScreenSpaceEventHandler$$1, _CesiumComponent);

  function ScreenSpaceEventHandler$$1() {
    return _CesiumComponent.apply(this, arguments) || this;
  }

  var _proto = ScreenSpaceEventHandler$$1.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      screenSpaceEventHandler: this.cesiumElement
    };
  };

  _proto.createCesiumElement = function createCesiumElement() {
    return new cesium.ScreenSpaceEventHandler(this.parent.canvas);
  };

  _proto.destroyCesiumElement = function destroyCesiumElement(cesiumElement) {
    cesiumElement.destroy();
  };

  _createClass(ScreenSpaceEventHandler$$1, [{
    key: "parent",
    get: function get() {
      var _context = this.context,
          scene = _context.scene,
          viewer = _context.viewer;

      if (scene && !scene.isDestroyed()) {
        return scene;
      }

      if (viewer && !viewer.isDestroyed()) {
        return viewer.scene;
      }

      return null;
    }
  }]);
  return ScreenSpaceEventHandler$$1;
}(CesiumComponent);

ScreenSpaceEventHandler$1.propTypes = _extends({}, CesiumComponent.propTypes);
ScreenSpaceEventHandler$1.contextTypes = {
  scene: sceneType,
  viewer: viewerType
};
ScreenSpaceEventHandler$1.childContextTypes = {
  screenSpaceEventHandler: screenSpaceEventHandlerType
};

var imageryLayer =
/*#__PURE__*/
function (_CesiumComponent) {
  _inheritsLoose(imageryLayer, _CesiumComponent);

  function imageryLayer() {
    return _CesiumComponent.apply(this, arguments) || this;
  }

  var _proto = imageryLayer.prototype;

  _proto.createCesiumElement = function createCesiumElement(options) {
    var imageryProvider = options.imageryProvider,
        opts = _objectWithoutProperties(options, ["imageryProvider"]);
    return new cesium.ImageryLayer(imageryProvider, opts);
  };

  _proto.mountCesiumElement = function mountCesiumElement(layer) {
    this.parent.add(layer);
  };

  _proto.destroyCesiumElement = function destroyCesiumElement(layer) {
    var p = this.parent;

    if (p) {
      p.remove(layer);
    }
  };

  _createClass(imageryLayer, [{
    key: "parent",
    get: function get() {
      var _context = this.context,
          imageryLayerCollection = _context.imageryLayerCollection,
          scene = _context.scene,
          viewer = _context.viewer;

      if (imageryLayerCollection && !imageryLayerCollection.isDestroyed()) {
        return imageryLayerCollection;
      }

      if (scene && !scene.isDestroyed()) {
        return scene.imageryLayers;
      }

      if (viewer && !viewer.isDestroyed()) {
        return viewer.imageryLayers;
      }

      return null;
    }
  }]);
  return imageryLayer;
}(CesiumComponent);

imageryLayer.propTypes = _extends({}, CesiumComponent.propTypes, {
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
imageryLayer.contextTypes = {
  imageryLayerCollection: imageryLayerCollectionType,
  scene: sceneType,
  viewer: viewerType
};
imageryLayer.cesiumProps = ["alpha", "brightness", "contrast", "hue", "saturation", "gamma", "splitDirection", "minificationFilter", "magnificationFilter", "show"];
imageryLayer.cesiumReadOnlyProps = ["imageryProvider", "rectangle", "maximumAnisotropy", "minimumTerrainLevel", "maximumTerrainLevel"];
imageryLayer.cesiumEvents = ["definitionChanged"];

var CameraOperation =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(CameraOperation, _React$PureComponent);

  function CameraOperation() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = CameraOperation.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.cameraOperationStart(this.camera);
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    this.camera.cancelFlight();
    this.cameraOperationStart(this.camera);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var continueCameraFlight = this.props.continueCameraFlight;

    if (!continueCameraFlight) {
      this.camera.cancelFlight();
    }
  };

  _proto.render = function render() {
    return null;
  };

  _createClass(CameraOperation, [{
    key: "camera",
    get: function get() {
      var _context = this.context,
          camera = _context.camera,
          scene = _context.scene;
      return camera || scene.camera;
    }
  }]);
  return CameraOperation;
}(React.PureComponent);

CameraOperation.propTypes = {
  continueCameraFlight: PropTypes.bool
};
CameraOperation.contextTypes = {
  camera: cameraType,
  scene: sceneType
};

var CameraFlyTo =
/*#__PURE__*/
function (_CameraOperation) {
  _inheritsLoose(CameraFlyTo, _CameraOperation);

  function CameraFlyTo() {
    return _CameraOperation.apply(this, arguments) || this;
  }

  var _proto = CameraFlyTo.prototype;

  _proto.cameraOperationStart = function cameraOperationStart(camera) {
    var _props = this.props,
        destination = _props.destination,
        orientation = _props.orientation,
        duration = _props.duration,
        onComplete = _props.onComplete,
        onCancel = _props.onCancel,
        endTransform = _props.endTransform,
        maximumHeight = _props.maximumHeight,
        pitchAdjustHeight = _props.pitchAdjustHeight,
        flyOverLongitude = _props.flyOverLongitude,
        flyOverLongitudeWeight = _props.flyOverLongitudeWeight,
        easingFunction = _props.easingFunction;
    camera.flyTo({
      destination: destination,
      orientation: orientation,
      duration: duration,
      complete: onComplete,
      cancel: onCancel,
      endTransform: endTransform,
      maximumHeight: maximumHeight,
      pitchAdjustHeight: pitchAdjustHeight,
      flyOverLongitude: flyOverLongitude,
      flyOverLongitudeWeight: flyOverLongitudeWeight,
      easingFunction: easingFunction
    });
  };

  return CameraFlyTo;
}(CameraOperation);

CameraFlyTo.propTypes = _extends({}, CameraOperation.propTypes, {
  destination: PropTypes.any.isRequired,
  duration: PropTypes.number,
  easingFunction: PropTypes.any,
  endTransform: PropTypes.any,
  flyOverLongitude: PropTypes.number,
  flyOverLongitudeWeight: PropTypes.number,
  maximumHeight: PropTypes.number,
  onCancel: PropTypes.func,
  onComplete: PropTypes.func,
  orientation: PropTypes.object,
  pitchAdjustHeight: PropTypes.number
});

exports.PropTypes = types;
exports.Viewer = Viewer$1;
exports.CesiumWidget = CesiumWidget$1;
exports.Scene = Scene$1;
exports.Camera = Camera$1;
exports.Entity = Entity$1;
exports.DataSource = DataSource;
exports.CustomDataSource = CustomDataSource$1;
exports.CzmlDataSource = CzmlDataSource$1;
exports.GeoJsonDataSource = GeoJsonDataSource$1;
exports.KmlDataSource = KmlDataSource$1;
exports.Primitive = Primitive$1;
exports.PointPrimitive = PointPrimitive;
exports.PointPrimitiveCollection = PointPrimitiveCollection$1;
exports.ScreenSpaceEvent = ScreenSpaceEvent;
exports.ScreenSpaceEventHandler = ScreenSpaceEventHandler$1;
exports.ImageryLayer = imageryLayer;
exports.CameraOperation = CameraOperation;
exports.CameraFlyTo = CameraFlyTo;
