import type {
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
  BufferPointCollection,
  BufferPolylineCollection,
  BufferPolygonCollection,
} from "cesium";
import { createContext, useContext } from "react";

import type { RootComponentInternalProps, RootComponentInternalValues } from "./component";
import type { eventManagerContextKey } from "./EventManager";
import type EventManager from "./EventManager";

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
  bufferPointCollection?: BufferPointCollection;
  bufferPolylineCollection?: BufferPolylineCollection;
  bufferPolygonCollection?: BufferPolygonCollection;
  __$internal?: RootComponentInternalProps & RootComponentInternalValues;
  [eventManagerContextKey]?: EventManager;
};

export const CesiumContext = createContext<ResiumContext>({});
export const { Provider, Consumer } = CesiumContext;
export const useCesium = (): ResiumContext => useContext(CesiumContext) || {};
