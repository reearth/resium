import PropTypes from "prop-types";
import { SceneMode } from "cesium";

import CesiumComponent from "./CesiumComponent";
import { cesiumWidgetType, sceneType, viewerType } from "./types";

export default class Scene extends CesiumComponent {

  static propTypes = {
    ...CesiumComponent.propTypes,
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
  }

  static contextTypes = {
    cesiumWidget: cesiumWidgetType,
    viewer: viewerType
  }

  static childContextTypes = {
    scene: sceneType
  }

  static cesiumProps = [
    "backgroundColor",
    "canvas",
    "completeMorphOnUserInput",
    "debugCommandFilter",
    "debugShowCommands",
    "debugShowDepthFrustum",
    "debugShowFramesPerSecond",
    "debugShowFrustumPlanes",
    "debugShowFrustums",
    "debugShowGlobeDepth",
    "eyeSeparation",
    "farToNearRatio",
    "focalLength",
    "fog",
    "fxaa",
    "globe",
    "imagerySplitPosition",
    "invertClassification",
    "invertClassificationColor",
    "mapMode2D",
    "mapProjection",
    "minimumDisableDepthTestDistance",
    "moon",
    "nearToFarDistance2D",
    "pickTranslucentDepth",
    "rethrowRenderErrors",
    "shadowMap",
    "skyAtmosphere",
    "skyBox",
    "sun",
    "sunBloom",
    "terrainExaggeration",
    "terrainProvider",
    "useDepthPicking",
    "useWebVR"
  ]

  static cesiumEvents = [
    "morphComplete",
    "morphStart",
    "postRender",
    "preRender",
    "renderError",
    "terrainProviderChanged"
  ]

  getChildContext() {
    return {
      scene: this.cesiumElement
    };
  }

  createCesiumElement(options) {
    const { cesiumWidget, viewer } = this.context;
    const s = cesiumWidget ? cesiumWidget.scene : viewer.scene;
    Object.keys(options).filter(k => typeof options[k] !== "undefined").forEach(k => {
      s[k] = options[k];
    });
    if (typeof this.props.mode !== "undefined") {
      this._changeMode(s);
    }
    return s;
  }

  updateCesiumElement(scene, prev) {
    if (prev.mode !== this.props.mode) {
      this._changeMode(scene);
    }
  }

  _changeMode(scene) {
    const { mode, morph } = this.props;
    if (typeof mode !== "number") return;
    if (typeof morph === "number") {
      switch (mode) {
        case SceneMode.SCENE2D:
          scene.morphTo2D(morph);
          break;

        case SceneMode.COLUMBUS_VIEW:
          scene.morphToColumbusView(morph);
          break;

        case SceneMode.SCENE3D:
          scene.morphTo3D(morph);
          break;

        default:
          scene.mode = mode;
      }
    } else {
      scene.mode = mode;
    }
  }

}
