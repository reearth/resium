import { createCesiumComponent } from "../core/component";
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

export interface FogCesiumProps {
  density?: number;
  enabled?: boolean;
  minimumBrightness?: number;
  screenSpaceErrorFactor?: number;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FogProps extends FogCesiumProps {}

const cesiumProps: (keyof FogCesiumProps)[] = [
  "density",
  "enabled",
  "minimumBrightness",
  "screenSpaceErrorFactor",
];

const Fog = createCesiumComponent<
  Cesium.Fog,
  FogProps,
  {
    scene?: Cesium.Scene;
  }
>({
  name: "Fog",
  create(context) {
    if (!context.scene) return;
    const element = new CesiumFog();
    context.scene.fog = element;
    return element;
  },
  destroy(element, context) {
    if (context.scene && !context.scene.isDestroyed()) {
      context.scene.fog = new CesiumFog();
    }
  },
  cesiumProps,
  setCesiumPropsAfterCreate: true,
});

export default Fog;
