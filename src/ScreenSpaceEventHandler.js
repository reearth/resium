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

  state = {
    mounted: false
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

  mountCesiumElement() {
    this.setState({ mounted: true });
  }

  destroyCesiumElement(cesiumElement) {
    cesiumElement.destroy();
  }

  render() {
    const { children } = this.props;
    const { mounted } = this.state;
    return mounted ? children : null;
  }

}
