import PropTypes from "prop-types";

import CesiumComponent from "./CesiumComponent";
import { cameraType, sceneType, viewerType } from "./types";

export default class Camera extends CesiumComponent {

  static propTypes = {
    ...CesiumComponent.propTypes,
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
  }

  static contextTypes = {
    scene: sceneType
  }

  static childContextTypes = {
    camera: cameraType,
    scene: sceneType,
    viewer: viewerType
  }

  static cesiumProps = [
    "constrainedAxis",
    "defaultLookAmount",
    "defaultMoveAmount",
    "defaultRotateAmount",
    "defaultZoomAmount",
    "direction",
    "frustum",
    "maximumZoomFactor",
    "percentageChanged",
    "position",
    "right",
    "up"
  ]

  static cesiumEvents = [
    "changed",
    "moveEnd",
    "moveStart"
  ]

  getChildContext() {
    return {
      camera: this.getTarget(),
      scene: this.context.scene,
      viewer: this.context.viewer
    };
  }

  onMount(_, _2, { scene }) {
    return scene.camera;
  }

}
