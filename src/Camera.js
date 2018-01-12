import PropTypes from "prop-types";

import CesiumComponent from "./CesiumComponent";
import { cameraType, sceneType } from "./types";

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
    up: PropTypes.any,
    view: PropTypes.object
  }

  static contextTypes = {
    scene: sceneType
  }

  static childContextTypes = {
    camera: cameraType
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
      camera: this.cesiumElement
    };
  }

  createCesiumElement(options) {
    const c = this.context.scene.camera;
    Object.keys(options).filter(k => typeof options[k] !== "undefined").forEach(k => {
      c[k] = options[k];
    });
    if (typeof this.props.view === "object") {
      c.setView(this.props.view);
    }
    return c;
  }

  updateCesiumElement(camera, prev) {
    if (this.props.view !== prev.view) {
      camera.setView(this.props.view);
    }
  }

}
