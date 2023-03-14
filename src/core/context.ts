import {
  Viewer,
  CesiumWidget,
  Scene,
  Globe,
  Camera,
  ScreenSpaceEventHandler,
  Entity,
  DataSourceCollection,
  DataSource,
  EntityCollection,
  ImageryLayerCollection,
  PrimitiveCollection,
  BillboardCollection,
  LabelCollection,
  PolylineCollection,
  PointPrimitiveCollection,
  CloudCollection,
} from "cesium";
import { createContext, useContext } from "react";

import { RootComponentInternalProps } from "./component";
import EventManager, { eventManagerContextKey } from "./EventManager";

export type ResiumContext = {
  viewer?: Viewer;
  cesiumWidget?: CesiumWidget;
  scene?: Scene;
  globe?: Globe;
  camera?: Camera;
  screenSpaceEventHandler?: ScreenSpaceEventHandler;
  entity?: Entity;
  dataSourceCollection?: DataSourceCollection;
  dataSource?: DataSource;
  entityCollection?: EntityCollection;
  imageryLayerCollection?: ImageryLayerCollection;
  primitiveCollection?: PrimitiveCollection;
  billboardCollection?: BillboardCollection;
  labelCollection?: LabelCollection;
  polylineCollection?: PolylineCollection;
  pointPrimitiveCollection?: PointPrimitiveCollection;
  cloudCollection?: CloudCollection;
  __$internal?: RootComponentInternalProps;
  [eventManagerContextKey]?: EventManager;
};

export const CesiumContext = createContext<ResiumContext>({});
export const { Provider, Consumer } = CesiumContext;
export const useCesium = (): ResiumContext => useContext(CesiumContext) || {};
