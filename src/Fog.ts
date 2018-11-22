import createCesiumComponent from "./core/CesiumComponent";
import Cesium from "cesium";

export interface FogCesiumProps {
  density?: number;
  enabled?: boolean;
  minimumBrightness?: number;
  screenSpaceErrorFactor?: number;
}

/* tslint:disable-next-line: no-empty-interface */
export interface FogProps extends FogCesiumProps {}

/* tslint:disable-next-line: no-empty-interface */
export interface FogContext {}

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
  cesiumProps,
  setCesiumPropsAfterCreate: true,
});

export default Fog;
