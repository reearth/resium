import { useEffect, useRef } from "react";
import { useCesiumContext } from "./context";

export interface CameraOperationProps {
  cancelCameraFlightOnUnmount?: boolean;
}

export const createCameraOperation = <P>(
  name: string,
  cameraOperationStart: (camera: Cesium.Camera, props: P, prevProps?: P) => void,
) => {
  /* eslint-disable react-hooks/rules-of-hooks */
  const component: React.FC<P & CameraOperationProps> = props => {
    const ctx = useCesiumContext<{ camera?: Cesium.Camera }>();
    const prevProps = useRef<P>();

    useEffect(() => {
      return () => {
        if (ctx.camera && props.cancelCameraFlightOnUnmount) {
          ctx.camera.cancelFlight();
        }
      };
    }, [ctx.camera, props.cancelCameraFlightOnUnmount]);

    useEffect(() => {
      if (ctx.camera) {
        ctx.camera.cancelFlight();
        cameraOperationStart(ctx.camera, props, prevProps.current);
      }
      prevProps.current = props;
    });

    return null;
  };
  /* eslint-enable react-hooks/rules-of-hooks */

  component.displayName = name;

  return component;
};
