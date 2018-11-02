import {
  Camera,
  CesiumWidget,
  DataSourceCollection,
  EntityCollection,
  ImageryLayerCollection,
  PointPrimitiveCollection,
  PrimitiveCollection,
  Scene,
  ScreenSpaceEventHandler,
  Viewer,
} from "cesium";
import PropTypes from "prop-types";

export const cameraType = PropTypes.instanceOf(Camera);
export const cesiumWidgetType = PropTypes.instanceOf(CesiumWidget);
export const dataSourceCollectionType = PropTypes.instanceOf(DataSourceCollection);
export const entityCollectionType = PropTypes.instanceOf(EntityCollection);
export const imageryLayerCollectionType = PropTypes.instanceOf(ImageryLayerCollection);
export const pointPrimitiveCollectionType = PropTypes.instanceOf(PointPrimitiveCollection);
export const primitiveCollectionType = PropTypes.instanceOf(PrimitiveCollection);
export const sceneType = PropTypes.instanceOf(Scene);
export const screenSpaceEventHandlerType = PropTypes.instanceOf(ScreenSpaceEventHandler);
export const viewerType = PropTypes.instanceOf(Viewer);
