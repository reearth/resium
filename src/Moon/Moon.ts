import { Moon as CesiumMoon, Scene, Ellipsoid } from "cesium";
import { createCesiumComponent } from "../core/component";

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
  ellipsoid?: Ellipsoid;
}

export interface MoonProps extends MoonCesiumProps, MoonCesiumReadonlyProps {}

const cesiumProps: (keyof MoonCesiumProps)[] = ["onlySunLighting", "show", "textureUrl"];

const cesiumReadonlyProps: (keyof MoonCesiumReadonlyProps)[] = ["ellipsoid"];

const Moon = createCesiumComponent<
  CesiumMoon,
  MoonProps,
  {
    scene?: Scene;
  }
>({
  name: "Moon",
  create(context, props) {
    if (!context.scene) return;
    const element = new CesiumMoon(props);
    context.scene.moon = element;
    return element;
  },
  destroy(element, context) {
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
