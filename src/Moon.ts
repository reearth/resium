import Cesium from "cesium";
import createCesiumComponent from "./core/CesiumComponent";

export interface MoonCesiumProps {
  ellipsoid?: Cesium.Ellipsoid;
  onlySunLighting?: boolean;
  show?: boolean;
  textureUrl?: string;
}

/* tslint:disable-next-line no-empty-interface */
export interface MoonProps extends MoonCesiumProps {}

export interface MoonContext {
  scene: Cesium.Scene;
}

const cesiumProps: Array<keyof MoonCesiumProps> = [
  "ellipsoid",
  "onlySunLighting",
  "show",
  "textureUrl",
];

const Moon = createCesiumComponent<Cesium.Moon, MoonProps, MoonContext>({
  name: "moon",
  create(cprops, props, context) {
    return context.scene.moon;
  },
  cesiumProps,
  setCesiumPropsAfterCreate: true,
});

export default Moon;
