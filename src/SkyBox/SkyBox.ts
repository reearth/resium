import Cesium from "cesium";
import createCesiumComponent from "../core/CesiumComponent";

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

export interface SkyBoxCesiumProps {
  sources?: {
    positiveX: string | ImageData;
    negativeX: string | ImageData;
    positiveY: string | ImageData;
    negativeY: string | ImageData;
    positiveZ: string | ImageData;
    negativeZ: string | ImageData;
  };
  show?: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SkyBoxProps extends SkyBoxCesiumProps {}

export interface SkyBoxContext {
  scene: Cesium.Scene;
}

const cesiumProps: (keyof SkyBoxCesiumProps)[] = ["sources", "show"];

const SkyBox = createCesiumComponent<Cesium.SkyBox, SkyBoxProps, SkyBoxContext>({
  name: "SkyBox",
  create(cprops, props, context) {
    return context.scene.skyBox as Cesium.SkyBox;
  },
  cesiumProps,
  setCesiumPropsAfterCreate: true,
});

export default SkyBox;
