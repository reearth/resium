import { createCesiumComponent, PickCesiumProps, UnusedCesiumProps, AssertNever } from "../core";
import { Fog as CesiumFog } from "cesium";

/*
@summary
`Fog` can operate the fog of the scene.
All properties are applied to single fog of the scene.
*/

/*
@scope
Fog is available inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) components.
It can not be used more than once for each Viewer or CesiumWidget.
*/

export type FogCesiumProps = PickCesiumProps<CesiumFog, typeof cesiumProps>;

export type FogProps = FogCesiumProps;

const cesiumProps = ["density", "enabled", "minimumBrightness", "screenSpaceErrorFactor"] as const;

// Unused prop check
type IgnoredProps = never;
type UnusedProps = UnusedCesiumProps<CesiumFog, typeof cesiumProps>;
type AssertUnusedProps = AssertNever<Exclude<UnusedProps, IgnoredProps>>;

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
