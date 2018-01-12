import PropTypes from "prop-types";

import CesiumComponent from "./CesiumComponent";
import { sceneType, viewerType } from "./types";

export default class Scene extends CesiumComponent {

  static propTypes = {
    ...CesiumComponent.propTypes,
    backgroundColor: PropTypes.any,
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
    fxaa: PropTypes.any,
    imagerySplitPosition: PropTypes.any,
    invertClassification: PropTypes.any,
    invertClassificationColor: PropTypes.any,
    mapMode2D: PropTypes.any,
    minimumDisableDepthTestDistance: PropTypes.any,
    mode: PropTypes.any,
    nearToFarDistance2D: PropTypes.any,
    onMorphComplete: PropTypes.func,
    onMorphStart: PropTypes.func,
    onPostRender: PropTypes.func,
    onPreRender: PropTypes.func,
    onRenderError: PropTypes.func,
    onTerrainProviderChanged: PropTypes.func,
    pickTranslucentDepth: PropTypes.any,
    rethrowRenderErrors: PropTypes.any,
    sunBloom: PropTypes.any,
    terrainExaggeration: PropTypes.any,
    useDepthPicking: PropTypes.any,
    useWebVR: PropTypes.any
  }

  static contextTypes = {
    viewer: viewerType
  }

  static childContextTypes = {
    scene: sceneType,
    viewer: viewerType
  }

  static cesiumProps = [
    "backgroundColor",
    // canvas
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
    // fog
    "fxaa",
    // globe
    "imagerySplitPosition",
    "invertClassification",
    "invertClassificationColor",
    "mapMode2D",
    // mapProjection
    "minimumDisableDepthTestDistance",
    "mode",
    // moon
    "nearToFarDistance2D",
    "pickTranslucentDepth",
    "rethrowRenderErrors",
    // shadowMap
    // skyAtmosphere
    // skyBox
    // sun
    "sunBloom",
    "terrainExaggeration",
    // terrainProvider
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
      scene: this.context.viewer.scene,
      viewer: this.context.viewer
    };
  }

}
