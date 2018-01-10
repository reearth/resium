import {
  Camera,
  EntityCollection,
  PrimitiveCollection,
  Scene,
  Viewer
} from "cesium";
import PropTypes from "prop-types";

export const cameraType = PropTypes.instanceOf(Camera);
export const entityCollectionType = PropTypes.instanceOf(EntityCollection);
export const primitiveCollectionType = PropTypes.instanceOf(PrimitiveCollection);
export const sceneType = PropTypes.instanceOf(Scene);
export const viewerType = PropTypes.instanceOf(Viewer);
