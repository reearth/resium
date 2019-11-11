import { Moon as CesiumMoon } from "cesium";
import createCesiumComponent from "../core/CesiumComponent";

/*
@summary
`Moon` can operate the moon of the scene.
All properties are applied to single moon of the scene.
*/

/*
@scope
Moon is available inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) components.
It can not be used more than once for each Viewer or CesiumWidget.
*/

export interface MoonCesiumProps {
  onlySunLighting?: boolean;
  show?: boolean;
  textureUrl?: string;
}

export interface MoonCesiumReadonlyProps {
  ellipsoid?: Cesium.Ellipsoid;
}

export interface MoonProps extends MoonCesiumProps, MoonCesiumReadonlyProps {}

export interface MoonContext {
  scene?: Cesium.Scene;
}

const cesiumProps: (keyof MoonCesiumProps)[] = ["onlySunLighting", "show", "textureUrl"];

const cesiumReadonlyProps: (keyof MoonCesiumReadonlyProps)[] = ["ellipsoid"];

const Moon = createCesiumComponent<Cesium.Moon, MoonProps, MoonContext>({
  name: "Moon",
  create(cprops) {
    return new CesiumMoon(cprops);
  },
  mount(element, context) {
    if (context.scene) {
      context.scene.moon = element;
    }
  },
  unmount(element, context) {
    if (context.scene && !context.scene.isDestroyed()) {
      context.scene.moon = new CesiumMoon();
    }
    // if (!element.isDestroyed()) {
    //   element.destroy();
    // }
  },
  cesiumProps,
  cesiumReadonlyProps,
});

export default Moon;
