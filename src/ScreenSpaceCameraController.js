import PropTypes from "prop-types";

import CesiumComponent from "./CesiumComponent";
import { sceneType } from "./types";

export default class ScreenSpaceCameraController extends CesiumComponent {
  static propTypes = {
    ...CesiumComponent.propTypes,
    bounceAnimationTime: PropTypes.number,
    enableCollisionDetection: PropTypes.bool,
    enableInputs: PropTypes.bool,
    enableLook: PropTypes.bool,
    enableRotate: PropTypes.bool,
    enableTilt: PropTypes.bool,
    enableTranslate: PropTypes.bool,
    enableZoom: PropTypes.bool,
    inertiaSpin: PropTypes.number,
    inertiaTranslate: PropTypes.number,
    inertiaZoom: PropTypes.number,
    lookEventTypes: PropTypes.any,
    maximumMovementRatio: PropTypes.number,
    maximumZoomDistance: PropTypes.number,
    minimumCollisionTerrainHeight: PropTypes.number,
    minimumPickingTerrainHeight: PropTypes.number,
    minimumTrackBallHeight: PropTypes.number,
    minimumZoomDistance: PropTypes.number,
    rotateEventTypes: PropTypes.any,
    tiltEventTypes: PropTypes.any,
    translateEventTypes: PropTypes.any,
    zoomEventTypes: PropTypes.any,
  };

  static contextTypes = {
    scene: sceneType,
  };

  static cesiumProps = [
    "bounceAnimationTime",
    "enableCollisionDetection",
    "enableInputs",
    "enableLook",
    "enableRotate",
    "enableTilt",
    "enableTranslate",
    "enableZoom",
    "inertiaSpin",
    "inertiaTranslate",
    "inertiaZoom",
    "lookEventTypes",
    "maximumMovementRatio",
    "maximumZoomDistance",
    "minimumCollisionTerrainHeight",
    "minimumPickingTerrainHeight",
    "minimumTrackBallHeight",
    "minimumZoomDistance",
    "rotateEventTypes",
    "tiltEventTypes",
    "translateEventTypes",
    "zoomEventTypes",
  ];

  static setCesiumOptionsAfterCreate = true;

  static initCesiumComponentWhenComponentDidMount = true;

  createCesiumElement() {
    return this.context.scene.screenSpaceCameraController;
  }
}
