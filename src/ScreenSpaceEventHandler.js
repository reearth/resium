import { ScreenSpaceEventHandler as CesiumScreenSpaceEventHandler } from "cesium";

import CesiumComponent from "./CesiumComponent";
import { sceneType, screenSpaceEventHandlerType, viewerType } from "./types";

export default class ScreenSpaceEventHandler extends CesiumComponent {

  static propTypes = {
    ...CesiumComponent.propTypes,
  }

  static contextTypes = {
    scene: sceneType,
    viewer: viewerType
  }

  static childContextTypes= {
    screenSpaceEventHandler: screenSpaceEventHandlerType
  }

  getChildContext() {
    return {
      screenSpaceEventHandler: this.cesiumElement
    };
  }

  get parent() {
    const { scene, viewer } = this.context;
    if (scene && !scene.isDestroyed()) {
      return scene;
    }
    if (viewer && !viewer.isDestroyed()) {
      return viewer.scene;
    }
    return null;
  }

  createCesiumElement() {
    return new CesiumScreenSpaceEventHandler(this.parent.canvas);
  }

  destroyCesiumElement(cesiumElement) {
    cesiumElement.destroy();
  }

}
