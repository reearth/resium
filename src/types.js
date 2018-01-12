import {
  Camera,
  CesiumWidget,
  DataSourceCollection,
  EntityCollection,
  PointPrimitiveCollection,
  PrimitiveCollection,
  Scene,
  Viewer
} from "cesium";
import PropTypes from "prop-types";

export const cameraType = PropTypes.instanceOf(Camera);
export const cesiumWidgetType = PropTypes.instanceOf(CesiumWidget);
export const dataSourceCollectionType = PropTypes.instanceOf(DataSourceCollection);
export const entityCollectionType = PropTypes.instanceOf(EntityCollection);
export const pointPrimitiveCollectionType = PropTypes.instanceOf(PointPrimitiveCollection);
export const primitiveCollectionType = PropTypes.instanceOf(PrimitiveCollection);
export const sceneType = PropTypes.instanceOf(Scene);
export const viewerType = PropTypes.instanceOf(Viewer);
