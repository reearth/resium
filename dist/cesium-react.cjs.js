'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var cesium = require('cesium');
var PropTypes = _interopDefault(require('prop-types'));
var React = _interopDefault(require('react'));
var ReactDOMServer = _interopDefault(require('react-dom/server.browser'));

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

var types = /*#__PURE__*/Object.freeze({
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

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
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

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
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
    var _objectSpread2;

    var pn = "on" + b[0].toUpperCase() + b.slice(1).replace(/Event$/, ""); // eslint-disable-next-line react/destructuring-assignment

    return typeof props[pn] === "function" ? _objectSpread({}, a, (_objectSpread2 = {}, _objectSpread2[b] = props[pn], _objectSpread2)) : a;
  }, {});
};

var CesiumComponent =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(CesiumComponent, _React$PureComponent);

  function CesiumComponent(props) {
    var _this;

    _this = _React$PureComponent.call(this, props) || this;
    _this.cesiumElement = null;
    _this._mounted = false;

    if (!_this.constructor.initCesiumComponentWhenComponentDidMount) {
      _this._create();
    }

    return _this;
  }

  var _proto = CesiumComponent.prototype;

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
      var _objectSpread2;

      return typeof _this2.props[b] === "undefined" ? a : _objectSpread({}, a, (_objectSpread2 = {}, _objectSpread2[b] = _this2.props[b], _objectSpread2));
    }, {});
  };

  _proto._create = function _create() {
    var _this3 = this;

    if (!this.createCesiumElement) return;
    this.cesiumElement = this.createCesiumElement(this.getPropsForCesium());

    if (this.constructor.setCesiumOptionsAfterCreate && this.cesiumElement) {
      // eslint-disable-next-line react/destructuring-assignment
      this.getCesiumProps().filter(function (p) {
        return typeof _this3.props[p] !== "undefined";
      }).forEach(function (p) {
        // eslint-disable-next-line react/destructuring-assignment
        _this3.cesiumElement[p] = _this3.props[p];
      });
    }

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
      onMount(this.cesiumElement);
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
    return this._mounted && typeof children !== "undefined" && !this.constructor.cesiumNoRender ? children : null;
  };

  return CesiumComponent;
}(React.PureComponent);

CesiumComponent.propTypes = {
  children: PropTypes.any,
  onMount: PropTypes.func,
  onUnmount: PropTypes.func,
  onUpdate: PropTypes.func
};

var Viewer =
/*#__PURE__*/
function (_CesiumComponent) {
  _inheritsLoose(Viewer, _CesiumComponent);

  function Viewer() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _CesiumComponent.call.apply(_CesiumComponent, [this].concat(args)) || this;
    _this.element = null;
    return _this;
  }

  var _proto = Viewer.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      cesiumWidget: this.cesiumElement ? this.cesiumElement.cesiumWidget : null,
      dataSourceCollection: this.cesiumElement ? this.cesiumElement.dataSourceDisplay.dataSources : null,
      entityCollection: this.cesiumElement ? this.cesiumElement.entities : null,
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
      if (!v) return null; // failed to initialize Viewer

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
    if (!cesiumElement) return;

    if (this.props.selectedEntity !== prev.selectedEntity) {
      cesiumElement.selectedEntity = this.props.selectedEntity;
    }

    if (this.props.trackedEntity !== prev.trackedEntity) {
      cesiumElement.trackedEntity = this.props.trackedEntity;
    }
  };

  _proto.destroyCesiumElement = function destroyCesiumElement(cesiumElement) {
    if (!cesiumElement) return;
    cesiumElement.destroy();
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        children = _this$props.children,
        containerProps = _this$props.containerProps,
        className = _this$props.className,
        full = _this$props.full,
        id = _this$props.id,
        style = _this$props.style;
    return React.createElement("div", _extends({
      className: className,
      id: id,
      ref: function ref(e) {
        _this2.element = e;
      },
      style: _objectSpread({}, full ? {
        position: "absolute",
        bottom: "0",
        left: "0",
        right: "0",
        top: "0"
      } : {}, style)
    }, containerProps), this.cesiumElement ? children : null);
  };

  return Viewer;
}(CesiumComponent);

Viewer.propTypes = _objectSpread({}, CesiumComponent.propTypes, {
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
Viewer.defaultProps = {
  style: {}
};
Viewer.childContextTypes = {
  cesiumWidget: cesiumWidgetType,
  dataSourceCollection: dataSourceCollectionType,
  entityCollection: entityCollectionType,
  scene: sceneType,
  viewer: viewerType
};
Viewer.cesiumProps = ["animation", "baseLayerPicker", "fullscreenButton", "vrButton", "geocoder", "homeButton", "infoBox", "sceneModePicker", "selectionIndicator", "timeline", "navigationHelpButton", "navigationInstructionsInitiallyVisible", "scene3DOnly", "clockViewModel", "selectedImageryProviderViewModel", "imageryProviderViewModels", "selectedTerrainProviderViewModel", "terrainProviderViewModels", "imageryProvider", "terrainProvider", "skyBox", "skyAtmosphere", "fullscreenElement", "useDefaultRenderLoop", "targetFrameRate", "showRenderLoopErrors", "automaticallyTrackDataSourceClocks", "contextOptions", "sceneMode", "mapProjection", "globe", "orderIndependentTranslucency", "creditContainer", "creditViewport", "dataSources", "terrainExaggeration", "shadows", "terrainShadows", "mapMode2D", "projectionPicker"];
Viewer.cesiumEvents = ["selectedEntityChanged", "trackedEntityChanged"];
Viewer.initCesiumComponentWhenComponentDidMount = true;

var CesiumWidget =
/*#__PURE__*/
function (_CesiumComponent) {
  _inheritsLoose(CesiumWidget, _CesiumComponent);

  function CesiumWidget() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _CesiumComponent.call.apply(_CesiumComponent, [this].concat(args)) || this;
    _this.element = null;
    return _this;
  }

  var _proto = CesiumWidget.prototype;

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

    var _this$props = this.props,
        children = _this$props.children,
        containerProps = _this$props.containerProps,
        className = _this$props.className,
        full = _this$props.full,
        id = _this$props.id,
        style = _this$props.style;
    return React.createElement("div", _extends({
      className: className,
      id: id,
      ref: function ref(e) {
        _this2.element = e;
      },
      style: _objectSpread({}, full ? {
        position: "absolute",
        bottom: "0",
        left: "0",
        right: "0",
        top: "0"
      } : {}, style)
    }, containerProps), this.cesiumElement ? children : null);
  };

  return CesiumWidget;
}(CesiumComponent);

CesiumWidget.propTypes = _objectSpread({}, CesiumComponent.propTypes, {
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
CesiumWidget.defaultProps = {
  style: {}
};
CesiumWidget.childContextTypes = {
  cesiumWidget: cesiumWidgetType,
  scene: sceneType
};
CesiumWidget.cesiumProps = ["scene3DOnly", "clock", "imageryProvider", "terrainProvider", "skyBox", "skyAtmosphere", "useDefaultRenderLoop", "targetFrameRate", "showRenderLoopErrors", "contextOptions", "sceneMode", "mapProjection", "globe", "orderIndependentTranslucency", "creditContainer", "creditViewport", "terrainExaggeration", "shadows", "terrainShadows", "mapMode2D"];
CesiumWidget.initCesiumComponentWhenComponentDidMount = true;

var Scene =
/*#__PURE__*/
function (_CesiumComponent) {
  _inheritsLoose(Scene, _CesiumComponent);

  function Scene() {
    return _CesiumComponent.apply(this, arguments) || this;
  }

  var _proto = Scene.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      scene: this.cesiumElement
    };
  };

  _proto.createCesiumElement = function createCesiumElement() {
    var cesiumWidget = this.context.cesiumWidget;
    var s = cesiumWidget.scene;

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
    var _this$props = this.props,
        mode = _this$props.mode,
        morph = _this$props.morph;
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

  return Scene;
}(CesiumComponent);

Scene.propTypes = _objectSpread({}, CesiumComponent.propTypes, {
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
Scene.contextTypes = {
  cesiumWidget: cesiumWidgetType
};
Scene.childContextTypes = {
  scene: sceneType
};
Scene.cesiumProps = ["backgroundColor", "canvas", "completeMorphOnUserInput", "debugCommandFilter", "debugShowCommands", "debugShowDepthFrustum", "debugShowFramesPerSecond", "debugShowFrustumPlanes", "debugShowFrustums", "debugShowGlobeDepth", "eyeSeparation", "farToNearRatio", "focalLength", "fog", "fxaa", "globe", "imagerySplitPosition", "invertClassification", "invertClassificationColor", "mapMode2D", "mapProjection", "minimumDisableDepthTestDistance", "moon", "nearToFarDistance2D", "pickTranslucentDepth", "rethrowRenderErrors", "shadowMap", "skyAtmosphere", "skyBox", "sun", "sunBloom", "terrainExaggeration", "terrainProvider", "useDepthPicking", "useWebVR"];
Scene.cesiumEvents = ["morphComplete", "morphStart", "postRender", "preRender", "renderError", "terrainProviderChanged"];
Scene.setCesiumOptionsAfterCreate = true;

var Camera =
/*#__PURE__*/
function (_CesiumComponent) {
  _inheritsLoose(Camera, _CesiumComponent);

  function Camera() {
    return _CesiumComponent.apply(this, arguments) || this;
  }

  var _proto = Camera.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      camera: this.cesiumElement
    };
  };

  _proto.createCesiumElement = function createCesiumElement() {
    var c = this.context.scene.camera;

    if (typeof this.props.viewBoundingSphere === "object") {
      c.viewBoundingSphere(this.props.viewBoundingSphere.boundingSphere, this.props.viewBoundingSphere.offset);
    } else if (typeof this.props.view === "object") {
      c.setView(this.props.view);
    }

    return c;
  };

  _proto.updateCesiumElement = function updateCesiumElement(camera, prev) {
    if (this.props.view !== prev.viewBoundingSphere && typeof this.props.viewBoundingSphere === "object") {
      camera.viewBoundingSphere(this.props.viewBoundingSphere.boundingSphere, this.props.viewBoundingSphere.offset);
    } else if (this.props.view !== prev.view && typeof this.props.view === "object") {
      camera.setView(this.props.view);
    }
  };

  return Camera;
}(CesiumComponent);

Camera.propTypes = _objectSpread({}, CesiumComponent.propTypes, {
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
  up: PropTypes.any,
  view: PropTypes.object,
  viewBoundingSphere: PropTypes.shape({
    boundingSphere: PropTypes.any,
    offset: PropTypes.any
  })
});
Camera.contextTypes = {
  scene: sceneType
};
Camera.childContextTypes = {
  camera: cameraType
};
Camera.cesiumProps = ["constrainedAxis", "defaultLookAmount", "defaultMoveAmount", "defaultRotateAmount", "defaultZoomAmount", "direction", "frustum", "maximumZoomFactor", "percentageChanged", "position", "right", "up"];
Camera.cesiumEvents = ["changed", "moveEnd", "moveStart"];
Camera.setCesiumOptionsAfterCreate = true;

var Entity =
/*#__PURE__*/
function (_CesiumComponent) {
  _inheritsLoose(Entity, _CesiumComponent);

  function Entity() {
    return _CesiumComponent.apply(this, arguments) || this;
  }

  var _proto = Entity.prototype;

  _proto.createCesiumElement = function createCesiumElement(options) {
    var entity = new cesium.Entity(options);

    if (this.props.children) {
      entity.description = ReactDOMServer.renderToStaticMarkup(this.props.children);
    }

    return entity;
  };

  _proto.mountCesiumElement = function mountCesiumElement(entity) {
    this.parent.add(entity);
  };

  _proto.updateCesiumElement = function updateCesiumElement(entity, prev) {
    if (prev.children !== this.props.children) {
      if (this.props.children) {
        entity.description = ReactDOMServer.renderToStaticMarkup(this.props.children);
      } else {
        entity.description = this.props.description;
      }
    }
  };

  _proto.destroyCesiumElement = function destroyCesiumElement(entity) {
    var p = this.parent;

    if (p) {
      p.remove(entity);
    }
  };

  _createClass(Entity, [{
    key: "parent",
    get: function get() {
      var entityCollection = this.context.entityCollection;

      if (entityCollection) {
        return entityCollection;
      }

      return null;
    }
  }]);

  return Entity;
}(CesiumComponent);

Entity.propTypes = _objectSpread({}, CesiumComponent.propTypes, {
  availability: PropTypes.any,
  billboard: PropTypes.any,
  box: PropTypes.any,
  children: PropTypes.any,
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
Entity.contextTypes = {
  entityCollection: entityCollectionType
};
Entity.cesiumProps = ["availability", "show", "description", "position", "orientation", "viewFrom", "parent", "billboard", "box", "corridor", "cylinder", "ellipse", "ellipsoid", "label", "model", "name", "path", "plane", "point", "polygon", "polyline", "properties", "polylineVolume", "rectangle", "wall"];
Entity.cesiumReadOnlyProps = ["id"];
Entity.cesiumEvents = ["definitionChanged"];
Entity.cesiumNoRender = true;

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
      var dataSourceCollection = this.context.dataSourceCollection;

      if (dataSourceCollection && !dataSourceCollection.isDestroyed()) {
        return dataSourceCollection;
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
  dataSourceCollection: dataSourceCollectionType
};
DataSource.childContextTypes = {
  entityCollection: entityCollectionType
};
DataSource.cesiumProps = ["clock", "clustering", "name", "show"];
DataSource.cesiumEvents = ["changedEvent", "errorEvent", "loadingEvent"];

var CustomDataSource =
/*#__PURE__*/
function (_DataSource) {
  _inheritsLoose(CustomDataSource, _DataSource);

  function CustomDataSource() {
    return _DataSource.apply(this, arguments) || this;
  }

  var _proto = CustomDataSource.prototype;

  _proto.createCesiumElement = function createCesiumElement(options) {
    return new cesium.CustomDataSource(options.name);
  };

  return CustomDataSource;
}(DataSource);

CustomDataSource.PropTypes = _objectSpread({}, DataSource.propTypes);
CustomDataSource.contextTypes = _objectSpread({}, DataSource.contextTypes);
CustomDataSource.cesiumProps = DataSource.cesiumProps.concat();
CustomDataSource.cesiumEvents = DataSource.cesiumEvents.concat();

var CzmlDataSource =
/*#__PURE__*/
function (_DataSource) {
  _inheritsLoose(CzmlDataSource, _DataSource);

  function CzmlDataSource() {
    return _DataSource.apply(this, arguments) || this;
  }

  var _proto = CzmlDataSource.prototype;

  _proto.createCesiumElement = function createCesiumElement(options) {
    return new cesium.CzmlDataSource(options.name);
  };

  _proto.mountCesiumElement = function mountCesiumElement() {
    this._load();
  };

  _proto.updateCesiumElement = function updateCesiumElement(ds, prev) {
    var _this$props = this.props,
        czml = _this$props.czml,
        url = _this$props.url;

    if (czml !== prev.czml || url !== prev.url) {
      this._load();
    }
  };

  _proto._load = function _load() {
    var _this = this;

    var _this$props2 = this.props,
        czml = _this$props2.czml,
        onError = _this$props2.onError,
        onLoad = _this$props2.onLoad,
        onProgress = _this$props2.onProgress,
        query = _this$props2.query,
        sourceUri = _this$props2.sourceUri,
        url = _this$props2.url;

    if (czml || url) {
      this.cesiumElement.load(czml || url, {
        sourceUri: sourceUri,
        query: query
      }).then(function () {
        try {
          if (onLoad) onLoad.apply(void 0, arguments);
        } catch (e) {
          console.error(e);
          throw e;
        }

        _this.parent.add(arguments.length <= 0 ? undefined : arguments[0]); // args[0] === this.cesiumElement

      }, onError, onProgress);
    }
  };

  return CzmlDataSource;
}(DataSource);

CzmlDataSource.propTypes = _objectSpread({}, DataSource.propTypes, {
  czml: PropTypes.oneOfType([PropTypes.object, PropTypes.arrayOf(PropTypes.object)]),
  onError: PropTypes.func,
  onLoad: PropTypes.func,
  onProgress: PropTypes.func,
  query: PropTypes.object,
  sourceUri: PropTypes.string,
  url: PropTypes.string
});
CzmlDataSource.contextTypes = _objectSpread({}, DataSource.contextTypes);
CzmlDataSource.cesiumProps = DataSource.cesiumProps.concat();
CzmlDataSource.cesiumEvents = DataSource.cesiumEvents.concat();

var GeoJsonDataSource =
/*#__PURE__*/
function (_DataSource) {
  _inheritsLoose(GeoJsonDataSource, _DataSource);

  function GeoJsonDataSource() {
    return _DataSource.apply(this, arguments) || this;
  }

  var _proto = GeoJsonDataSource.prototype;

  _proto.createCesiumElement = function createCesiumElement(options) {
    return new cesium.GeoJsonDataSource(options.name);
  };

  _proto.mountCesiumElement = function mountCesiumElement() {
    this._load();
  };

  _proto.updateCesiumElement = function updateCesiumElement(ds, prev) {
    var _this$props = this.props,
        data = _this$props.data,
        url = _this$props.url;

    if (data !== prev.data || url !== prev.url) {
      this._load();
    }
  };

  _proto._load = function _load() {
    var _this = this;

    var _this$props2 = this.props,
        clampToGround = _this$props2.clampToGround,
        data = _this$props2.data,
        describe = _this$props2.describe,
        fill = _this$props2.fill,
        markerColor = _this$props2.markerColor,
        markerSize = _this$props2.markerSize,
        markerSymbol = _this$props2.markerSymbol,
        onError = _this$props2.onError,
        onLoad = _this$props2.onLoad,
        onProgress = _this$props2.onProgress,
        sourceUri = _this$props2.sourceUri,
        stroke = _this$props2.stroke,
        strokeWidth = _this$props2.strokeWidth,
        url = _this$props2.url;

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
        try {
          if (onLoad) onLoad.apply(void 0, arguments);
        } catch (e) {
          console.error(e);
          throw e;
        }

        _this.parent.add(arguments.length <= 0 ? undefined : arguments[0]); // args[0] === this.cesiumElement

      }, onError, onProgress);
    }
  };

  return GeoJsonDataSource;
}(DataSource);

GeoJsonDataSource.propTypes = _objectSpread({}, DataSource.propTypes, {
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
GeoJsonDataSource.contextTypes = _objectSpread({}, DataSource.contextTypes);
GeoJsonDataSource.cesiumProps = DataSource.cesiumProps.concat();
GeoJsonDataSource.cesiumEvents = DataSource.cesiumEvents.concat();

var KmlDataSource =
/*#__PURE__*/
function (_DataSource) {
  _inheritsLoose(KmlDataSource, _DataSource);

  function KmlDataSource() {
    return _DataSource.apply(this, arguments) || this;
  }

  var _proto = KmlDataSource.prototype;

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
    var _this$props = this.props,
        data = _this$props.data,
        url = _this$props.url;

    if (data !== prev.data || url !== prev.url) {
      this._load();
    }
  };

  _proto._load = function _load() {
    var _this = this;

    var _this$props2 = this.props,
        clampToGround = _this$props2.clampToGround,
        data = _this$props2.data,
        query = _this$props2.query,
        onError = _this$props2.onError,
        onLoad = _this$props2.onLoad,
        onProgress = _this$props2.onProgress,
        sourceUri = _this$props2.sourceUri,
        url = _this$props2.url;

    if (data || url) {
      this.cesiumElement.load(data || url, {
        clampToGround: clampToGround,
        query: query,
        sourceUri: sourceUri
      }).then(function () {
        try {
          if (onLoad) onLoad.apply(void 0, arguments);
        } catch (e) {
          console.error(e);
          throw e;
        }

        _this.parent.add(arguments.length <= 0 ? undefined : arguments[0]); // args[0] === this.cesiumElement

      }, onError, onProgress);
    }
  };

  return KmlDataSource;
}(DataSource);

KmlDataSource.propTypes = _objectSpread({}, DataSource.propTypes, {
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
KmlDataSource.contextTypes = _objectSpread({}, DataSource.contextTypes, {
  scene: sceneType
});
KmlDataSource.cesiumProps = DataSource.cesiumProps.concat();
KmlDataSource.cesiumReadonlyProps = ["camera", "canvas", "proxy"];
KmlDataSource.cesiumEvents = DataSource.cesiumEvents.concat(["refreshEvent", "unsupportedNodeEvent"]);

var Primitive =
/*#__PURE__*/
function (_CesiumComponent) {
  _inheritsLoose(Primitive, _CesiumComponent);

  function Primitive() {
    return _CesiumComponent.apply(this, arguments) || this;
  }

  var _proto = Primitive.prototype;

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

  _createClass(Primitive, [{
    key: "parent",
    get: function get() {
      var _this$context = this.context,
          premitiveCollection = _this$context.premitiveCollection,
          scene = _this$context.scene;

      if (premitiveCollection && !premitiveCollection.isDestroyed()) {
        return premitiveCollection;
      }

      if (scene && !scene.isDestroyed()) {
        return scene.primitives; // TODO: scene#groundPrimitives
      }

      return null;
    }
  }]);

  return Primitive;
}(CesiumComponent);

Primitive.propTypes = _objectSpread({}, CesiumComponent.propTypes, {
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
Primitive.contextTypes = {
  primitiveCollection: primitiveCollectionType,
  scene: sceneType
};
Primitive.cesiumProps = ["allowPicking", "appearance", "cull", "debugShowBoundingVolume", "depthFailAppearance", "modelMatrix", "shadows", "show"];
Primitive.cesiumReadOnlyProps = ["asynchronous", "compressVertices", "geometryInstances", "interleave", "releaseGeometryInstances"];

var PointPrimitive =
/*#__PURE__*/
function (_CesiumComponent) {
  _inheritsLoose(PointPrimitive, _CesiumComponent);

  function PointPrimitive() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _CesiumComponent.call.apply(_CesiumComponent, [this].concat(args)) || this;
    _this.initialOptions = null;
    return _this;
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

PointPrimitive.propTypes = _objectSpread({}, CesiumComponent.propTypes, {
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

var PointPrimitiveCollection =
/*#__PURE__*/
function (_CesiumComponent) {
  _inheritsLoose(PointPrimitiveCollection, _CesiumComponent);

  function PointPrimitiveCollection() {
    return _CesiumComponent.apply(this, arguments) || this;
  }

  var _proto = PointPrimitiveCollection.prototype;

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

  _createClass(PointPrimitiveCollection, [{
    key: "parent",
    get: function get() {
      var _this$context = this.context,
          premitiveCollection = _this$context.premitiveCollection,
          scene = _this$context.scene;

      if (premitiveCollection && !premitiveCollection.isDestroyed()) {
        return premitiveCollection;
      }

      if (scene && !scene.isDestroyed()) {
        return scene.primitives;
      }

      return null;
    }
  }]);

  return PointPrimitiveCollection;
}(CesiumComponent);

PointPrimitiveCollection.propTypes = _objectSpread({}, CesiumComponent.propTypes, {
  blendOption: PropTypes.any,
  debugShowBoundingVolume: PropTypes.bool,
  modelMatrix: PropTypes.any
});
PointPrimitiveCollection.contextTypes = {
  primitiveCollection: primitiveCollectionType,
  scene: sceneType
};
PointPrimitiveCollection.childContextTypes = {
  pointPrimitiveCollection: pointPrimitiveCollectionType
};
PointPrimitiveCollection.cesiumProps = ["blendOption", "debugShowBoundingVolume", "modelMatrix"];

var ScreenSpaceEvent =
/*#__PURE__*/
function (_React$PureComponent) {
  _inheritsLoose(ScreenSpaceEvent, _React$PureComponent);

  function ScreenSpaceEvent() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = ScreenSpaceEvent.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this$props = this.props,
        action = _this$props.action,
        modifier = _this$props.modifier,
        type = _this$props.type;
    var screenSpaceEventHandler = this.context.screenSpaceEventHandler;

    if (action) {
      screenSpaceEventHandler.setInputAction(action, type, modifier);
    } else {
      // just remove default events
      screenSpaceEventHandler.removeInputAction(type, modifier);
    }
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var screenSpaceEventHandler = this.context.screenSpaceEventHandler;
    screenSpaceEventHandler.removeInputAction(prevProps.type, prevProps.modifier);
    this.componentDidMount();
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    var _this$props2 = this.props,
        action = _this$props2.action,
        modifier = _this$props2.modifier,
        type = _this$props2.type;
    var screenSpaceEventHandler = this.context.screenSpaceEventHandler;

    if (screenSpaceEventHandler && !screenSpaceEventHandler.isDestroyed() && action) {
      screenSpaceEventHandler.removeInputAction(type, modifier);
    }
  };

  _proto.render = function render() {
    return null;
  };

  return ScreenSpaceEvent;
}(React.PureComponent);

ScreenSpaceEvent.propTypes = {
  action: PropTypes.func,
  modifier: PropTypes.number,
  type: PropTypes.number.isRequired
};
ScreenSpaceEvent.contextTypes = {
  screenSpaceEventHandler: screenSpaceEventHandlerType
};

var ScreenSpaceEventHandler =
/*#__PURE__*/
function (_CesiumComponent) {
  _inheritsLoose(ScreenSpaceEventHandler, _CesiumComponent);

  function ScreenSpaceEventHandler() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _CesiumComponent.call.apply(_CesiumComponent, [this].concat(args)) || this;
    _this._useDefault = false;
    return _this;
  }

  var _proto = ScreenSpaceEventHandler.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      screenSpaceEventHandler: this.cesiumElement
    };
  };

  _proto.createCesiumElement = function createCesiumElement() {
    if (this.props.useDefault) {
      this._useDefault = true;
      return this.context.cesiumWidget.screenSpaceEventHandler;
    }

    return new cesium.ScreenSpaceEventHandler(this.parent.canvas);
  };

  _proto.destroyCesiumElement = function destroyCesiumElement(cesiumElement) {
    if (!this._useDefault) {
      cesiumElement.destroy();
    }
  };

  _createClass(ScreenSpaceEventHandler, [{
    key: "parent",
    get: function get() {
      var scene = this.context.scene;

      if (scene && !scene.isDestroyed()) {
        return scene;
      }

      return null;
    }
  }]);

  return ScreenSpaceEventHandler;
}(CesiumComponent);

ScreenSpaceEventHandler.propTypes = _objectSpread({}, CesiumComponent.propTypes, {
  useDefault: PropTypes.bool
});
ScreenSpaceEventHandler.contextTypes = {
  cesiumWidget: cesiumWidgetType,
  scene: sceneType
};
ScreenSpaceEventHandler.childContextTypes = {
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
      var _this$context = this.context,
          imageryLayerCollection = _this$context.imageryLayerCollection,
          scene = _this$context.scene;

      if (imageryLayerCollection && !imageryLayerCollection.isDestroyed()) {
        return imageryLayerCollection;
      }

      if (scene && !scene.isDestroyed()) {
        return scene.imageryLayers;
      }

      return null;
    }
  }]);

  return imageryLayer;
}(CesiumComponent);

imageryLayer.propTypes = _objectSpread({}, CesiumComponent.propTypes, {
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
  scene: sceneType
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
    var cancelCameraFlight = this.props.cancelCameraFlight;

    if (cancelCameraFlight) {
      this.camera.cancelFlight();
    }
  };

  _proto.render = function render() {
    return null;
  };

  _createClass(CameraOperation, [{
    key: "camera",
    get: function get() {
      var _this$context = this.context,
          camera = _this$context.camera,
          scene = _this$context.scene;
      return camera || scene.camera;
    }
  }]);

  return CameraOperation;
}(React.PureComponent);

CameraOperation.propTypes = {
  cancelCameraFlight: PropTypes.bool
};
CameraOperation.contextTypes = {
  camera: cameraType,
  scene: sceneType
};

var CameraFlyHome =
/*#__PURE__*/
function (_CameraOperation) {
  _inheritsLoose(CameraFlyHome, _CameraOperation);

  function CameraFlyHome() {
    return _CameraOperation.apply(this, arguments) || this;
  }

  var _proto = CameraFlyHome.prototype;

  _proto.cameraOperationStart = function cameraOperationStart(camera) {
    var duration = this.props.duration;
    camera.flyHome(duration);
  };

  return CameraFlyHome;
}(CameraOperation);

CameraFlyHome.propTypes = _objectSpread({}, CameraOperation.propTypes, {
  duration: PropTypes.number
});

var CameraFlyTo =
/*#__PURE__*/
function (_CameraOperation) {
  _inheritsLoose(CameraFlyTo, _CameraOperation);

  function CameraFlyTo() {
    return _CameraOperation.apply(this, arguments) || this;
  }

  var _proto = CameraFlyTo.prototype;

  _proto.cameraOperationStart = function cameraOperationStart(camera) {
    var _this$props = this.props,
        destination = _this$props.destination,
        orientation = _this$props.orientation,
        duration = _this$props.duration,
        onComplete = _this$props.onComplete,
        onCancel = _this$props.onCancel,
        endTransform = _this$props.endTransform,
        maximumHeight = _this$props.maximumHeight,
        pitchAdjustHeight = _this$props.pitchAdjustHeight,
        flyOverLongitude = _this$props.flyOverLongitude,
        flyOverLongitudeWeight = _this$props.flyOverLongitudeWeight,
        easingFunction = _this$props.easingFunction;
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

CameraFlyTo.propTypes = _objectSpread({}, CameraOperation.propTypes, {
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

var CameraFlyToBoundingSphere =
/*#__PURE__*/
function (_CameraOperation) {
  _inheritsLoose(CameraFlyToBoundingSphere, _CameraOperation);

  function CameraFlyToBoundingSphere() {
    return _CameraOperation.apply(this, arguments) || this;
  }

  var _proto = CameraFlyToBoundingSphere.prototype;

  _proto.cameraOperationStart = function cameraOperationStart(camera) {
    var _this$props = this.props,
        boundingSphere = _this$props.boundingSphere,
        offset = _this$props.offset,
        duration = _this$props.duration,
        onComplete = _this$props.onComplete,
        onCancel = _this$props.onCancel,
        endTransform = _this$props.endTransform,
        maximumHeight = _this$props.maximumHeight,
        pitchAdjustHeight = _this$props.pitchAdjustHeight,
        flyOverLongitude = _this$props.flyOverLongitude,
        flyOverLongitudeWeight = _this$props.flyOverLongitudeWeight,
        easingFunction = _this$props.easingFunction;
    camera.flyToBoundingSphere(boundingSphere, {
      offset: offset,
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

  return CameraFlyToBoundingSphere;
}(CameraOperation);

CameraFlyToBoundingSphere.propTypes = _objectSpread({}, CameraOperation.propTypes, {
  boundingSphere: PropTypes.any.isRequired,
  duration: PropTypes.number,
  easingFunction: PropTypes.any,
  endTransform: PropTypes.any,
  flyOverLongitude: PropTypes.number,
  flyOverLongitudeWeight: PropTypes.number,
  maximumHeight: PropTypes.number,
  offset: PropTypes.any,
  onCancel: PropTypes.func,
  onComplete: PropTypes.func,
  pitchAdjustHeight: PropTypes.number
});

exports.PropTypes = types;
exports.Viewer = Viewer;
exports.CesiumWidget = CesiumWidget;
exports.Scene = Scene;
exports.Camera = Camera;
exports.Entity = Entity;
exports.DataSource = DataSource;
exports.CustomDataSource = CustomDataSource;
exports.CzmlDataSource = CzmlDataSource;
exports.GeoJsonDataSource = GeoJsonDataSource;
exports.KmlDataSource = KmlDataSource;
exports.Primitive = Primitive;
exports.PointPrimitive = PointPrimitive;
exports.PointPrimitiveCollection = PointPrimitiveCollection;
exports.ScreenSpaceEvent = ScreenSpaceEvent;
exports.ScreenSpaceEventHandler = ScreenSpaceEventHandler;
exports.ScreenSpaceCameraController = ScreenSpaceEventHandler;
exports.ImageryLayer = imageryLayer;
exports.CameraOperation = CameraOperation;
exports.CameraFlyHome = CameraFlyHome;
exports.CameraFlyTo = CameraFlyTo;
exports.CameraFlyToBoundingSphere = CameraFlyToBoundingSphere;
