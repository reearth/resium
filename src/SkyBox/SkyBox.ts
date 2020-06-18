import { SkyBox as CesiumSkyBox } from "cesium";

import { createCesiumComponent, PickCesiumProps, UnusedCesiumProps, AssertNever } from "../core";

/*
@summary
`SkyBox` can operate the SkyBox in the scene.
All properties are applied to single SkyBox in the scene.
*/

/*
@scope
SkyBox is available inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) components.
It can not be used more than once for each Viewer or CesiumWidget.
*/

export type SkyBoxCesiumProps = PickCesiumProps<CesiumSkyBox, typeof cesiumProps> & {
  sources?: {
    positiveX: string | ImageData;
    negativeX: string | ImageData;
    positiveY: string | ImageData;
    negativeY: string | ImageData;
    positiveZ: string | ImageData;
    negativeZ: string | ImageData;
  };
};

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export type SkyBoxProps = SkyBoxCesiumProps;

const cesiumProps = ["sources", "show"] as const;

// Unused prop check
type IgnoredProps = never;
type UnusedProps = UnusedCesiumProps<CesiumSkyBox, typeof cesiumProps>;
type AssertUnusedProps = AssertNever<Exclude<UnusedProps, IgnoredProps>>;

const SkyBox = createCesiumComponent<CesiumSkyBox, SkyBoxProps>({
  name: "SkyBox",
  create: context => context.scene?.skyBox,
  cesiumProps,
  setCesiumPropsAfterCreate: true,
});

export default SkyBox;
