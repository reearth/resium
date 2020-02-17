import { PostProcessStage as CesiumPostProcessStage } from "cesium";

import { createCesiumComponent } from "../core/component";

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
  Cesium.PostProcessStage,
  PostProcessStageProps,
  {
    scene?: Cesium.Scene;
  }
>({
  name: "PostProcessStage",
  create(context, props) {
    if (!context.scene) return;
    const element = new CesiumPostProcessStage(props);
    if (typeof props.enabled === "boolean") {
      element.enabled = props.enabled;
    }
    if (props.selected) {
      element.selected = props.selected;
    }
    context.scene.postProcessStages.add(element);
    return element;
  },
  destroy(element, context) {
    if (context.scene && !context.scene.isDestroyed()) {
      context.scene.postProcessStages.remove(element);
    }
    if (!element.isDestroyed()) {
      element.destroy();
    }
  },
  cesiumProps,
  cesiumReadonlyProps,
});

export default PostProcessStage;
