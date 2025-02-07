import { Fog as CesiumFog } from "cesium";

import { createCesiumComponent, PickCesiumProps } from "../core";

/*
@summary
`Fog` can operate the fog of the scene.
All properties are applied to single fog of the scene.
*/

/*
@scope
Fog can be mounted inside[Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) components.
It can not be mounted more than once for each Viewer or CesiumWidget.
*/

export type FogCesiumProps = PickCesiumProps<CesiumFog, typeof cesiumProps>;

export type FogProps = FogCesiumProps;

const cesiumProps = [
  "density",
  "enabled",
  "minimumBrightness",
  "screenSpaceErrorFactor",
  "heightScalar",
  "maxHeight",
  "visualDensityScalar",
  "heightFalloff",
  "renderable",
] as const;

const Fog = createCesiumComponent<CesiumFog, FogProps>({
  name: "Fog",
  create(context) {
    if (!context.scene) return;
    const element = new CesiumFog();
    context.scene.fog = element;
    return element;
  },
  destroy(_element, context) {
    if (context.scene && !context.scene.isDestroyed()) {
      context.scene.fog = new CesiumFog();
    }
  },
  cesiumProps,
  setCesiumPropsAfterCreate: true,
});

export default Fog;
