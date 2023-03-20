import { Camera } from "cesium";

import { createCameraOperation } from "../core";

// @noCesiumElement

/*
@summary
`CameraFlyTo` is a kind of operation of the camera.

When it is mounted, `camera.flyTo(options)` will be execute.

If any property is changed, the current camera flight will be canceled and a new one is executed.

See also: [Camera#flyTo](https://cesium.com/docs/cesiumjs-ref-doc/Camera.html?classFilter=camer#flyTo)
*/

/*
@scope
Inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) components.
*/

type Options = Parameters<Camera["flyTo"]>[0];

export type CameraFlyToProps = Omit<Options, "complete" | "cancel"> & {
  onComplete?: Options["complete"];
  onCancel?: Options["cancel"];
  /** If true, cancel camera flight if this component is unmounted. Default value is false. */
  cancelFlightOnUnmount?: boolean;
  /** If true, camera flight will be executed only once time. */
  once?: boolean;
};

const CameraFlyTo = createCameraOperation<CameraFlyToProps>(
  "CameraFlyTo",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (camera, { onComplete, onCancel, ...props }) => {
    camera.flyTo({ ...props, complete: onComplete, cancel: onCancel });
  },
);

export default CameraFlyTo;
