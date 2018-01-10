import {
  Camera,
  EntityCollection,
  PremitiveCollection,
  Scene,
  Viewer
} from "cesium";
import PropTypes from "prop-types";

export const cameraType = PropTypes.instanceOf(Camera);
export const entityCollectionType = PropTypes.instanceOf(EntityCollection);
export const premitiveCollectionType = PropTypes.instanceOf(PremitiveCollection);
export const sceneType = PropTypes.instanceOf(Scene);
export const viewerType = PropTypes.instanceOf(Viewer);
