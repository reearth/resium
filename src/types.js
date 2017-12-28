import { Camera, Scene, Viewer } from "cesium";
import PropTypes from "prop-types";

export const cameraType = PropTypes.instanceOf(Camera);
export const sceneType = PropTypes.instanceOf(Scene);
export const viewerType = PropTypes.instanceOf(Viewer);
