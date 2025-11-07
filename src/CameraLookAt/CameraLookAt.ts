import { Camera } from "cesium";

import { createCameraOperation } from "../core";

// @noCesiumElement

/*
@summary
`CameraLookAt` is a kind of operation of the camera.

When it is mounted and its properties are changed, `camera.lookAt(target, offset)` will be executed.

See also: [Camera#flyTo](https://cesium.com/docs/cesiumjs-ref-doc/Camera.html?classFilter=camer#flyTo)
*/

/*
@scope
Inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) components.
*/

export type CameraLookAtProps = {
  target: Parameters<Camera["lookAt"]>[0];
  offset: Parameters<Camera["lookAt"]>[1];
};

const CameraLookAt = createCameraOperation<CameraLookAtProps>(
  "CameraLookAt",
  (camera, { target, offset }) => {
    camera.lookAt(target, offset);
  },
);

export default CameraLookAt;
