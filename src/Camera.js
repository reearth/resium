import PropTypes from "prop-types";

import CesiumComponent from "./core/CesiumComponent";
import { cameraType, sceneType } from "./core/types";

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
    view: PropTypes.object,
    viewBoundingSphere: PropTypes.shape({
      boundingSphere: PropTypes.any,
      offset: PropTypes.any,
    }),
  };

  static contextTypes = {
    scene: sceneType,
  };

  static childContextTypes = {
    camera: cameraType,
  };

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
    "up",
  ];

  static cesiumEvents = ["changed", "moveEnd", "moveStart"];

  static initCesiumComponentWhenComponentDidMount = true;

  static setCesiumOptionsAfterCreate = true;

  getChildContext() {
    return {
      camera: this.cesiumElement,
    };
  }

  createCesiumElement() {
    const c = this.context.scene.camera;
    if (typeof this.props.viewBoundingSphere === "object") {
      c.viewBoundingSphere(
        this.props.viewBoundingSphere.boundingSphere,
        this.props.viewBoundingSphere.offset,
      );
    } else if (typeof this.props.view === "object") {
      c.setView(this.props.view);
    }
    return c;
  }

  updateCesiumElement(camera, prev) {
    if (
      this.props.view !== prev.viewBoundingSphere &&
      typeof this.props.viewBoundingSphere === "object"
    ) {
      camera.viewBoundingSphere(
        this.props.viewBoundingSphere.boundingSphere,
        this.props.viewBoundingSphere.offset,
      );
    } else if (this.props.view !== prev.view && typeof this.props.view === "object") {
      camera.setView(this.props.view);
    }
  }
}
