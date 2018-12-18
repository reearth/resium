import createCesiumComponent from "./core/CesiumComponent";
import Cesium from "cesium";

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

/* tslint:disable-next-line: no-empty-interface */
export interface FogProps extends FogCesiumProps {}

/* tslint:disable-next-line: no-empty-interface */
export interface FogContext {
  scene?: Cesium.Scene;
}

const cesiumProps: Array<keyof FogCesiumProps> = [
  "density",
  "enabled",
  "minimumBrightness",
  "screenSpaceErrorFactor",
];

const Fog = createCesiumComponent<Cesium.Fog, FogProps, FogContext>({
  name: "fog",
  create(cprops, props, context) {
    return new Cesium.Fog();
  },
  mount(element, context) {
    if (context.scene) {
      context.scene.fog = element;
    }
  },
  unmount(element, context) {
    if (context.scene && !context.scene.isDestroyed()) {
      context.scene.fog = new Cesium.Fog();
    }
  },
  cesiumProps,
  setCesiumPropsAfterCreate: true,
});

export default Fog;
