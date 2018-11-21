import Cesium from "cesium";
import createCesiumComponent from "./core/CesiumComponent";

export interface SunCesiumProps {
  glowFactor?: number;
  show?: boolean;
}

/* tslint:disable-next-line no-empty-interface */
export interface SunProps extends SunCesiumProps {}

export interface SunContext {
  scene: Cesium.Scene;
}

const cesiumProps: Array<keyof SunCesiumProps> = ["glowFactor", "show"];

const Sun = createCesiumComponent<Cesium.Sun, SunProps, SunContext>({
  name: "sun",
  create() {
    return new Cesium.Sun();
  },
  mount(element, context) {
    context.scene.sun = element;
  },
  unmount(element, context) {
    context.scene.sun = new Cesium.Sun();
    if (!element.isDestroyed()) {
      element.destroy();
    }
  },
  cesiumProps,
  setCesiumPropsAfterCreate: true,
});

export default Sun;
