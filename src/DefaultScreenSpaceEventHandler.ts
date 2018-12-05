import Cesium from "cesium";

import createCesiumComponent from "./core/CesiumComponent";

export interface DefaultScreenSpaceEventHandlerContext {
  cesiumWidget: Cesium.CesiumWidget;
}

const DefaultScreenSpaceEventHandler = createCesiumComponent<
  Cesium.ScreenSpaceEventHandler,
  {
    children?: React.ReactNode;
  },
  DefaultScreenSpaceEventHandlerContext
>({
  name: "ScreenSpaceEventHandler",
  create(cprops, props, context) {
    return context.cesiumWidget.screenSpaceEventHandler;
  },
  provide(element) {
    return {
      screenSpaceEventHandler: element,
    };
  },
});

export default DefaultScreenSpaceEventHandler;
