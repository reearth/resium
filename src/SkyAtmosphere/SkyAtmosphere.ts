import Cesium from "cesium";
import createCesiumComponent from "../core/CesiumComponent";

/*
@summary
`SkyAtmosphere` can operate the SkyAtmosphere in the scene.
All properties are applied to single SkyAtmosphere in the scene.
*/

/*
@scope
SkyAtmosphere is available inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) components.
It can not be used more than once for each Viewer or CesiumWidget.
*/

export interface SkyAtmosphereCesiumProps {
  brightnessShift?: number;
  hueShift?: number;
  saturationShift?: number;
  show?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SkyAtmosphereProps extends SkyAtmosphereCesiumProps {}

export interface SunContext {
  scene: Cesium.Scene;
}

const cesiumProps: (keyof SkyAtmosphereCesiumProps)[] = [
  "brightnessShift",
  "hueShift",
  "saturationShift",
  "show",
];

const SkyAtmosphere = createCesiumComponent<Cesium.SkyAtmosphere, SkyAtmosphereProps, SunContext>({
  name: "SkyAtmosphere",
  create(cprops, props, context) {
    return context.scene.skyAtmosphere as Cesium.SkyAtmosphere;
  },
  cesiumProps,
  setCesiumPropsAfterCreate: true,
});

export default SkyAtmosphere;
