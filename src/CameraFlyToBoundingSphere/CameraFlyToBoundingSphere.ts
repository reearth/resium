import { Camera } from "cesium";

import { createCameraOperation, StaticMethodOptions2 } from "../core";

// @noCesiumElement

/*
@summary
`CameraFlyToBoundingSphere` is a kind of operation of the camera.

When it is mounted, `camera.flyToBoundingSphere(boundingSphere, options)` will be execute.

If any property is changed, the current camera flight will be canceled and a new one is executed.

See also: [Camera#flyToBoundingSphere](https://cesium.com/docs/cesiumjs-ref-doc/Camera.html?classFilter=camer#flyToBoundingSphere)
*/

/*
@scope
Inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) components.
*/

type Options = StaticMethodOptions2<Camera, "flyToBoundingSphere">;

export type CameraFlyToBoundingSphereProps = Omit<Options, "complete" | "cancel"> & {
  boundingSphere: Parameters<Camera["flyToBoundingSphere"]>[0];
  onComplete?: Options["complete"];
  onCancel?: Options["cancel"];
  /** If true, cancel camera flight if this component is unmounted. Default value is false. */
  cancelFlightOnUnmount?: boolean;
  /** If true, camera flight will be executed only once time. */
  once?: boolean;
};

const CameraFlyToBoundingSphere = createCameraOperation<CameraFlyToBoundingSphereProps>(
  "CameraFlyToBoundingSphere",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (camera, { boundingSphere, onComplete, onCancel, ...props }) => {
    camera.flyToBoundingSphere(boundingSphere, {
      ...props,
      complete: onComplete,
      cancel: onCancel,
    });
  },
);

export default CameraFlyToBoundingSphere;
