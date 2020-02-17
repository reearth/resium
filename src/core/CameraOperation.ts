import { useEffect, useRef } from "react";
import { useCesium } from "./context";

export interface CameraOperationProps {
  cancelFlightOnUnmount?: boolean;
  once?: boolean;
}

export const createCameraOperation = <P>(
  name: string,
  cameraOperationStart: (camera: Cesium.Camera, props: P, prevProps?: P) => void,
) => {
  /* eslint-disable react-hooks/rules-of-hooks */
  const component: React.FC<P & CameraOperationProps> = props => {
    const ctx = useCesium<{ camera?: Cesium.Camera; scene?: Cesium.Scene }>();
    const prevProps = useRef<P>();
    const first = useRef(false);

    useEffect(() => {
      return () => {
        if (ctx.camera && props.cancelFlightOnUnmount) {
          ctx.camera.cancelFlight();
        }
      };
    }, [ctx.camera, props.cancelFlightOnUnmount]);

    useEffect(() => {
      if (ctx.camera && ctx.scene && !ctx.scene.isDestroyed() && (!props.once || !first.current)) {
        ctx.camera.cancelFlight();
        cameraOperationStart(ctx.camera, props, prevProps.current);
        first.current = true;
      }
      prevProps.current = props;
    });

    return null;
  };
  /* eslint-enable react-hooks/rules-of-hooks */

  component.displayName = name;

  return component;
};
