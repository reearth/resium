import { ShadowMap as CesiumShadowMap } from "cesium";

import { ConstructorOptions, createCesiumComponent, Merge, PickCesiumProps } from "../core";

/*
@summary
`ShadowMap` is the shadow map of the scene.
*/

/*
@scope
Inside [Viewer](/components/Viewer) component or [CesiumWidget](/components/CesiumWidget) components.
*/

export type Target = Merge<CesiumShadowMap, ConstructorOptions<typeof CesiumShadowMap>>;

export type ShadowMapCesiumProps = PickCesiumProps<Target, typeof cesiumProps>;
export type ShadowMapCesiumReadonlyProps = PickCesiumProps<Target, typeof cesiumReadonlyProps>;

export type ShadowMapProps = ShadowMapCesiumProps & ShadowMapCesiumReadonlyProps;

const cesiumProps = [
  "darkness",
  "enabled",
  "maximumDistance",
  "normalOffset",
  "size",
  "softShadows",
  "fadingEnabled",
] as const;

const cesiumReadonlyProps = [
  "lightCamera",
  "isPointLight",
  "pointLightRadius",
  "cascadesEnabled",
  "numberOfCascades",
] as const;

const ShadowMap = createCesiumComponent<CesiumShadowMap, ShadowMapProps>({
  name: "ShadowMap",
  create: context => context.scene?.shadowMap,
  cesiumProps,
  cesiumReadonlyProps,
});

export default ShadowMap;
