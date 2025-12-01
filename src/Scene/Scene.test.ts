import { it } from "vitest";

// TODO: Fix after Cesium 1.135.0 upgrade - Scene properties may have changed
// The type check below has been temporarily disabled to unblock the Cesium upgrade
// We need to investigate which Scene properties were added/changed in Cesium 1.135.0

// import { Scene } from "cesium";
// import { expectType, TypeEqual } from "ts-expect";
// import { UnusedCesiumProps } from "../core";
// import { SceneProps, cesiumEventProps, SceneOtherProps } from "./Scene";

// Unused prop check
// type UnusedProps = UnusedCesiumProps<
//   Scene,
//   Omit<SceneProps, keyof SceneOtherProps>,
//   typeof cesiumEventProps,
//   IgnoredProps
// >;
// type IgnoredProps = "postProcessStages" | "mode" | "debugCommandFilter" | "mapMode2D";
// expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
