import { ScreenSpaceEventHandler as CesiumScreenSpaceEventHandler } from "cesium";

import { createCesiumComponent } from "../core/component";

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

const ScreenSpaceEventHandler = createCesiumComponent<
  Cesium.ScreenSpaceEventHandler,
  ScreenSpaceEventHandlerProps,
  {
    scene?: Cesium.Scene;
    cesiumWidget?: Cesium.CesiumWidget;
  }
>({
  name: "ScreenSpaceEventHandler",
  create(context, props) {
    return props.useDefault
      ? context.cesiumWidget?.screenSpaceEventHandler
      : context.scene
      ? new CesiumScreenSpaceEventHandler(context.scene.canvas as HTMLCanvasElement)
      : undefined;
  },
  destroy(element) {
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
