import Cesium from "cesium";

import createCesiumComponent from "./core/CesiumComponent";

/*
@summary
`ScreenSpaceEventHandler` can change event callbacks for mouse or touch interactions on the Viewer or CesiumWidget.
`ScreenSpaceEvent` components can be its children.
*/

/*
@scope
ScreenSpaceEventHandler is available inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) components.
ScreenSpaceEventHandler components with useDefault prop can not be used more than once for each Viewer or CesiumWidget.
*/

export interface ScreenSpaceEventHandlerProps {
  // If true, use the default ScreenSpaceEventHandler of the CesiumWidget instead of creating a new ScreenSpaceEventHandler object. This property cannot be changed after mounting.
  useDefault?: boolean;
  children?: React.ReactNode;
}

export interface ScreenSpaceEventHandlerContext {
  scene: Cesium.Scene;
  cesiumWidget: Cesium.CesiumWidget;
}

const ScreenSpaceEventHandler = createCesiumComponent<
  Cesium.ScreenSpaceEventHandler,
  ScreenSpaceEventHandlerProps,
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
