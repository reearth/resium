import { SkyAtmosphere as CesiumSkyAtmosphere } from "cesium";

import { createCesiumComponent, PickCesiumProps } from "../core";

/*
@summary
`SkyAtmosphere` can operate the SkyAtmosphere in the scene.
All properties are applied to single SkyAtmosphere in the scene.
*/

/*
@scope
SkyAtmosphere can be mounted inside[Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) components.
It can not be mounted more than once for each Viewer or CesiumWidget.
*/

export type SkyAtmosphereCesiumProps = PickCesiumProps<CesiumSkyAtmosphere, typeof cesiumProps>;

export type SkyAtmosphereProps = SkyAtmosphereCesiumProps;

const cesiumProps = [
  "brightnessShift",
  "hueShift",
  "saturationShift",
  "show",
  "perFragmentAtmosphere",
  "atmosphereLightIntensity",
  "atmosphereRayleighCoefficient",
  "atmosphereMieCoefficient",
  "atmosphereRayleighScaleHeight",
  "atmosphereMieScaleHeight",
  "atmosphereMieAnisotropy",
] as const;

const SkyAtmosphere = createCesiumComponent<CesiumSkyAtmosphere, SkyAtmosphereProps>({
  name: "SkyAtmosphere",
  create: context => context.scene?.skyAtmosphere,
  cesiumProps,
  setCesiumPropsAfterCreate: true,
});

export default SkyAtmosphere;
