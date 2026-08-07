import type { Cartesian3, Viewer as CesiumViewer } from "cesium";
import type { ReactNode} from "react";
import { useEffect, useMemo, useRef } from "react";

import type { CesiumComponentRef } from "../core";
import Viewer from "../Viewer";

import { applyDeterminism, offlineBaseLayer, signalWhenStable } from "./deterministic";

export type VrtViewerProps = {
  children?: ReactNode;
  /**
   * Camera destination used for the deterministic initial view. Defaults to a
   * globe-scale view of North America. Stories that need to see small features
   * must set this instead of layering a `<CameraFlyTo>` — child camera effects
   * race the setup effect and the winner has flipped across Cesium versions.
   */
  defaultView?: Cartesian3;
};

/**
 * A deterministic `<Viewer>` for visual regression tests: offline coarse
 * imagery, fixed clock/camera, no antialiasing or atmosphere, and a readiness
 * flag exposed on `window` once the scene is stable.
 */
const VrtViewer = ({ children, defaultView }: VrtViewerProps) => {
  const ref = useRef<CesiumComponentRef<CesiumViewer>>(null);
  const baseLayer = useMemo(() => offlineBaseLayer(), []);

  useEffect(() => {
    let raf = 0;
    let cleanup = () => {};

    const start = () => {
      const viewer = ref.current?.cesiumElement;
      if (!viewer) {
        raf = requestAnimationFrame(start);
        return;
      }
      applyDeterminism(viewer, defaultView);
      cleanup = signalWhenStable(viewer);
    };
    start();

    return () => {
      cancelAnimationFrame(raf);
      cleanup();
    };
  }, [defaultView]);

  return (
    <Viewer
      ref={ref}
      full
      baseLayer={baseLayer}
      shouldAnimate={false}
      animation={false}
      timeline={false}
      baseLayerPicker={false}
      geocoder={false}
      homeButton={false}
      sceneModePicker={false}
      navigationHelpButton={false}
      fullscreenButton={false}
      contextOptions={{ webgl: { antialias: false } }}>
      {children}
    </Viewer>
  );
};

export default VrtViewer;
