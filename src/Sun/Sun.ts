import { Sun as CesiumSun } from "cesium";
import { createCesiumComponent, PickCesiumProps, UnusedCesiumProps, AssertNever } from "../core";

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

export type SunCesiumProps = PickCesiumProps<CesiumSun, typeof cesiumProps>;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export type SunProps = SunCesiumProps;

const cesiumProps = ["glowFactor", "show"] as const;

// Unused prop check
type IgnoredProps = never;
type UnusedProps = UnusedCesiumProps<CesiumSun, typeof cesiumProps>;
type AssertUnusedProps = AssertNever<Exclude<UnusedProps, IgnoredProps>>;

const Sun = createCesiumComponent<CesiumSun, SunProps>({
  name: "Sun",
  create(context) {
    if (!context.scene) return;
    const element = new CesiumSun();
    context.scene.sun = element;
    return element;
  },
  destroy(_element, context) {
    if (context.scene && !context.scene.isDestroyed()) {
      context.scene.sun = new CesiumSun();
    }
  },
  cesiumProps,
  setCesiumPropsAfterCreate: true,
});

export default Sun;
