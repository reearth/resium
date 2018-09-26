import PropTypes from "prop-types";
import { ScreenSpaceEventHandler as CesiumScreenSpaceEventHandler } from "cesium";

import CesiumComponent from "./CesiumComponent";
import { cesiumWidgetType, sceneType, screenSpaceEventHandlerType } from "./types";

export default class ScreenSpaceEventHandler extends CesiumComponent {
  static propTypes = {
    ...CesiumComponent.propTypes,
    useDefault: PropTypes.bool,
  };

  static contextTypes = {
    cesiumWidget: cesiumWidgetType,
    scene: sceneType,
  };

  static childContextTypes = {
    screenSpaceEventHandler: screenSpaceEventHandlerType,
  };

  static initCesiumComponentWhenComponentDidMount = true;

  getChildContext() {
    return {
      screenSpaceEventHandler: this.cesiumElement,
    };
  }

  get parent() {
    const { scene } = this.context;
    if (scene && !scene.isDestroyed()) {
      return scene;
    }
    return null;
  }

  createCesiumElement() {
    if (this.props.useDefault) {
      this._useDefault = true;
      return this.context.cesiumWidget.screenSpaceEventHandler;
    }
    return new CesiumScreenSpaceEventHandler(this.parent.canvas);
  }

  destroyCesiumElement(cesiumElement) {
    if (!this._useDefault) {
      cesiumElement.destroy();
    }
  }

  _useDefault = false;
}
