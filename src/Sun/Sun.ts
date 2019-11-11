import { Sun as CesiumSun } from "cesium";
import createCesiumComponent from "../core/CesiumComponent";

/*
@summary
`Sun` can operate the sun in the scene.
All properties are applied to single sun in the scene.
*/

/*
@scope
Sun is available inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) components.
It can not be used more than once for each Viewer or CesiumWidget.
*/

export interface SunCesiumProps {
  glowFactor?: number;
  show?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SunProps extends SunCesiumProps {}

export interface SunContext {
  scene?: Cesium.Scene;
}

const cesiumProps: (keyof SunCesiumProps)[] = ["glowFactor", "show"];

const Sun = createCesiumComponent<Cesium.Sun, SunProps, SunContext>({
  name: "Sun",
  create() {
    return new CesiumSun();
  },
  mount(element, context) {
    if (context.scene) {
      context.scene.sun = element;
    }
  },
  unmount(element, context) {
    if (context.scene && !context.scene.isDestroyed()) {
      context.scene.sun = new CesiumSun();
    }
    // if (!element.isDestroyed()) {
    //   element.destroy();
    // }
  },
  cesiumProps,
  setCesiumPropsAfterCreate: true,
});

export default Sun;
