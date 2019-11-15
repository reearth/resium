import { createCesiumComponent } from "../core/component";

/*
@summary
`ShadowMap` is the shadow map of the scene.
*/

/*
@scope
Inside [Viewer](/components/Viewer) component or [CesiumWidget](/components/CesiumWidget) components.
*/

export interface ShadowMapProps {
  darkness?: number;
  enabled?: boolean;
  maximumDistance?: number;
  normalOffset?: boolean;
  size?: number;
  softShadows?: boolean;
}

const cesiumProps: (keyof ShadowMapProps)[] = [
  "darkness",
  "enabled",
  "maximumDistance",
  "normalOffset",
  "size",
  "softShadows",
];

const ShadowMap = createCesiumComponent<
  Cesium.ShadowMap,
  ShadowMapProps,
  {
    scene?: Cesium.Scene;
  }
>({
  name: "ShadowMap",
  create: context => context.scene?.shadowMap,
  cesiumProps,
});

export default ShadowMap;
