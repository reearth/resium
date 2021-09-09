import { ShadowMap as CesiumShadowMap } from "cesium";

import { createCesiumComponent, PickCesiumProps } from "../core";

/*
@summary
`ShadowMap` is the shadow map of the scene.
*/

/*
@scope
Inside [Viewer](/components/Viewer) component or [CesiumWidget](/components/CesiumWidget) components.
*/

export type ShadowMapCesiumProps = PickCesiumProps<CesiumShadowMap, typeof cesiumProps>;

export type ShadowMapProps = ShadowMapCesiumProps;

const cesiumProps = [
  "darkness",
  "enabled",
  "maximumDistance",
  "normalOffset",
  "size",
  "softShadows",
  "fadingEnabled",
] as const;

const ShadowMap = createCesiumComponent<CesiumShadowMap, ShadowMapProps>({
  name: "ShadowMap",
  create: context => context.scene?.shadowMap,
  cesiumProps,
});

export default ShadowMap;
