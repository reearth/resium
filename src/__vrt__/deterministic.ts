import type {
  Viewer as CesiumViewer} from "cesium";
import {
  Cartesian3,
  Color,
  ImageryLayer,
  JulianDate,
  TileMapServiceImageryProvider,
  buildModuleUrl,
} from "cesium";

declare global {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Window {
    /** Set to true once the deterministic scene has rendered a stable frame. */
    __VRT_READY__?: boolean;
    /** The Cesium viewer of the current VRT story, for debugging. */
    __VRT_VIEWER__?: CesiumViewer;
  }
}

/**
 * Cesium's bundled, network-free coarse imagery (Natural Earth II). Using it
 * keeps VRT renders deterministic and offline (no ion token, no tile server).
 */
export const offlineBaseLayer = (): ImageryLayer =>
  ImageryLayer.fromProviderAsync(
    TileMapServiceImageryProvider.fromUrl(buildModuleUrl("Assets/Textures/NaturalEarthII")),
    {},
  );

const FIXED_TIME = JulianDate.fromIso8601("2020-01-01T00:00:00Z");

/**
 * Removes every known source of frame-to-frame and machine-to-machine variance
 * so that screenshots are byte-stable under software (SwiftShader) rendering.
 */
export const applyDeterminism = (viewer: CesiumViewer): void => {
  const { scene, clock, camera } = viewer;

  clock.shouldAnimate = false;
  clock.currentTime = FIXED_TIME.clone();

  scene.postProcessStages.fxaa.enabled = false;
  scene.fog.enabled = false;
  if (scene.sun) scene.sun.show = false;
  if (scene.moon) scene.moon.show = false;
  if (scene.skyBox) scene.skyBox.show = false;
  if (scene.skyAtmosphere) scene.skyAtmosphere.show = false;
  scene.globe.showGroundAtmosphere = false;
  scene.globe.enableLighting = false;
  scene.backgroundColor = Color.BLACK;

  viewer.resolutionScale = 1;
  viewer.useBrowserRecommendedResolution = true;

  camera.setView({
    destination: Cartesian3.fromDegrees(-100, 40, 15_000_000),
  });
};

/**
 * Resolves once the globe has finished loading tiles and a few stable frames
 * have been rendered, then flips `window.__VRT_READY__` for the test runner.
 * Returns a cleanup function.
 */
export const signalWhenStable = (viewer: CesiumViewer): (() => void) => {
  const { scene } = viewer;
  window.__VRT_VIEWER__ = viewer;
  window.__VRT_READY__ = false;

  let stableFrames = 0;
  const onPostRender = () => {
    if (scene.globe.tilesLoaded) {
      stableFrames += 1;
      if (stableFrames > 3) {
        window.__VRT_READY__ = true;
        scene.postRender.removeEventListener(onPostRender);
      }
    } else {
      stableFrames = 0;
    }
  };
  scene.postRender.addEventListener(onPostRender);

  return () => {
    scene.postRender.removeEventListener(onPostRender);
    window.__VRT_READY__ = false;
    window.__VRT_VIEWER__ = undefined;
  };
};
