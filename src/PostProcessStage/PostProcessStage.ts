import {
  PostProcessStage as CesiumPostProcessStage,
  PostProcessStageLibrary as CesiumPostProcessStageLibrary,
} from "cesium";
import { createPostProcessStage } from "../core/PostProcessStage";
import createCesiumComponent from "../core/CesiumComponent";

/*
@summary
`PostProcessStage` can add a post processing stage to the scene.

Bult-in PostProcessStage components are available with additional Cesium properties:

| Component | Property | Type |
|---|---|---|
| BlackAndWhiteStage | gradations | number |
| | delta | number |
| | sigma | number |
| | stepSize | number |
| BrightnessStage | brightness | number |
| LensFlareStage | dirtTexture | any |
| | starTexture | any |
| | intensity | number |
| | distortion | number |
| | ghostDispersal | number |
| | haloWidth | number |
| | earthRadius | number |
| | dirtTexture | number |
| | dirtTexture | number |
| Fxaa | - | - |

Note: `Fxaa` component can not be used multi time, as it refers to the single post process stage of the scene.

They can be imported and used normally:

```jsx
import { LensFlareStage } from "resium";

<Viewer>
  <LensFlareStage intensity={5} />
</Viewer>
```
*/

/*
@scope
Inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) components.
*/

export interface PostProcessStageCesiumProps {
  enabled?: boolean;
  selected?: any[];
}

export interface PostProcessStageCesiumReadonlyProps {
  fragmentShader: string;
  uniforms?: any;
  textureScale?: number;
  forcePowerOfTwo?: boolean;
  // @type Cesium.PostProcessStageSampleMode
  sampleMode?: any;
  pixelFormat?: Cesium.PixelFormat;
  // @type Cesium.PixelDatatype
  pixelDatatype?: any;
  clearColor?: Cesium.Color;
  scissorRectangle?: Cesium.BoundingRectangle;
  name?: string;
}

export interface PostProcessStageProps
  extends PostProcessStageCesiumProps,
    PostProcessStageCesiumReadonlyProps {}

export interface PostProcessStageContext {
  scene: Cesium.Scene;
}

const cesiumProps: (keyof PostProcessStageCesiumProps)[] = ["enabled", "selected"];

const cesiumReadonlyProps: (keyof PostProcessStageCesiumReadonlyProps)[] = [
  "clearColor",
  "forcePowerOfTwo",
  "fragmentShader",
  "name",
  "pixelDatatype",
  "pixelFormat",
  "sampleMode",
  "scissorRectangle",
  "textureScale",
  "uniforms",
];

export const PostProcessStage = createCesiumComponent<
  any /* PostProcessStage */,
  PostProcessStageProps,
  PostProcessStageContext
>({
  name: "PostProcessStage",
  create(cprops) {
    const ps = new CesiumPostProcessStage(cprops);
    if (typeof cprops.enabled === "boolean") {
      ps.enabled = cprops.enabled;
    }
    if (cprops.selected) {
      ps.selected = cprops.selected;
    }
    return ps;
  },
  mount(element, context) {
    if (context.scene && !context.scene.isDestroyed()) {
      (context.scene as any).postProcessStages.add(element);
    }
  },
  unmount(element, context) {
    if (context.scene && !context.scene.isDestroyed()) {
      (context.scene as any).postProcessStages.remove(element);
    }
    if (!element.isDestroyed()) {
      element.destroy();
    }
  },
  cesiumProps,
  cesiumReadonlyProps,
});

export const BlackAndWhiteStage = createPostProcessStage<{
  gradations?: number;
}>({
  name: "BlackAndWhiteStage",
  props: ["gradations"],
  create() {
    return CesiumPostProcessStageLibrary.createBlackAndWhiteStage();
  },
});

export const BrightnessStage = createPostProcessStage<{
  brightness?: number;
}>({
  name: "BrightnessStage",
  props: ["brightness"],
  create() {
    return CesiumPostProcessStageLibrary.createBrightnessStage();
  },
});

export const LensFlareStage = createPostProcessStage<{
  dirtTexture?: any;
  starTexture?: any;
  intensity?: number;
  distortion?: number;
  ghostDispersal?: number;
  haloWidth?: number;
  earthRadius?: number;
}>({
  name: "LensFlareStage",
  props: [
    "dirtTexture",
    "starTexture",
    "intensity",
    "distortion",
    "ghostDispersal",
    "haloWidth",
    "earthRadius",
  ],
  create() {
    return CesiumPostProcessStageLibrary.createLensFlareStage();
  },
});

export const NightVisionStage = createPostProcessStage<{}>({
  name: "NightVisionStage",
  props: [],
  create() {
    return CesiumPostProcessStageLibrary.createNightVisionStage();
  },
});

export const Fxaa = createPostProcessStage<{}>({
  name: "Fxaa",
  create(props, collection) {
    return collection.fxaa;
  },
  props: [],
});

export default PostProcessStage;
