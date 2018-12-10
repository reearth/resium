import Cesium from "cesium";

import createCesiumComponent from "./core/CesiumComponent";

export interface ScreenSpaceEventHandlerContext {
  scene: Cesium.Scene;
  cesiumWidget: Cesium.CesiumWidget;
}

const ScreenSpaceEventHandler = createCesiumComponent<
  Cesium.ScreenSpaceEventHandler,
  { children?: React.ReactNode; useDefault?: boolean },
  ScreenSpaceEventHandlerContext
>({
  name: "ScreenSpaceEventHandler",
  create(cprops, props, context) {
    return props.useDefault
      ? context.cesiumWidget.screenSpaceEventHandler
      : new Cesium.ScreenSpaceEventHandler(context.scene.canvas as HTMLCanvasElement);
  },
  unmount(element) {
    if (!element.isDestroyed()) {
      element.destroy();
    }
  },
  provide(element) {
    return {
      screenSpaceEventHandler: element,
    };
  },
});

export default ScreenSpaceEventHandler;
