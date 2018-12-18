import Cesium from "cesium";

import createCesiumComponent from "./core/CesiumComponent";
import { createPostProcessStage } from "./core/PostProcessStage";

/*
@summary
`PostProcessStagComposite` can add a post processing stages to the scene.

Bult-in PostProcessStageComposite components are available with additional Cesium properties:

| Component | Property | Type |
|---|---|---|
| AmbientOcclusion | intensity | number |
| | bias | number |
| | lengthCap | number |
| | stepSize | number |
| | frustumLength | number |
| | ambientOcclusionOnly | boolean |
| | delta | number |
| | sigma | number |
| Bloom | contrast | number |
| | brightness | number |
| | glowOnly | boolean |
| | delta | number |
| | sigma | number |
| | stepSize | number |
| DepthOfFieldStage | focalDistance | number |
| | delta | number |
| | sigma | number |
| | stepSize | number |
| EdgeDetectionStage | color | [Cesium.Color](https://cesiumjs.org/Cesium/Build/Documentation/Color.html) |
| | length | number ||
| NightVisionStage | - | - |
| SilhouetteStage | color | [Cesium.Color](https://cesiumjs.org/Cesium/Build/Documentation/Color.html) |
| | length | number |

Note: `AmbientOcclusion` and `Bloom` components can not be used multi time for each components, as it refers to the single post process stage of the scene.

They can be imported and used normally:

```jsx
import { AmbientOcclusion, Bloom } from "resium";

<Viewer>
  <AmbientOcclusion />
  <Bloom />
</Viewer>
```
*/

/*
@scope
Inside [Viewer](/components/Viewer) or [CesiumWidget](/components/CesiumWidget) components.
*/

export interface PostProcessStageCompositeCesiumProps {
  enabled?: boolean;
  selected?: any[];
}

export interface PostProcessStageCompositeCesiumReadonlyProps {
  // @type Cesium.PostProcessStage
  stages: any[];
  inputPreviousStageTexture?: boolean;
  name?: string;
  uniforms?: any;
}

export interface PostProcessStageCompositeProps
  extends PostProcessStageCompositeCesiumProps,
    PostProcessStageCompositeCesiumReadonlyProps {}

export interface PostProcessStageCompositeContext {
  scene?: Cesium.Scene;
}

const cesiumProps: Array<keyof PostProcessStageCompositeCesiumProps> = ["enabled", "selected"];

const cesiumReadonlyProps: Array<keyof PostProcessStageCompositeCesiumReadonlyProps> = [
  "inputPreviousStageTexture",
  "name",
  "stages",
  "uniforms",
];

export const PostProcessStageComposite = createCesiumComponent<
  any /* Cesium.PostProcessStageComposite */,
  PostProcessStageCompositeProps,
  PostProcessStageCompositeContext
>({
  name: "PostProcessStageComposite",
  create(cprops) {
    const ps = new (Cesium as any).PostProcessStageComposite(cprops);
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

export const AmbientOcclusion = createPostProcessStage<{
  intensity?: number;
  bias?: number;
  lengthCap?: number;
  stepSize?: number;
  frustumLength?: number;
  ambientOcclusionOnly?: boolean;
  delta?: number;
  sigma?: number;
}>({
  name: "AmbientOcclusion",
  create(props, collection) {
    return collection.ambientOcclusion;
  },
  props: [
    "ambientOcclusionOnly",
    "bias",
    "delta",
    "frustumLength",
    "intensity",
    "lengthCap",
    "sigma",
    "stepSize",
  ],
  noMount: true,
});

export const Bloom = createPostProcessStage<{
  contrast?: number;
  brightness?: number;
  glowOnly?: boolean;
  delta?: number;
  sigma?: number;
  stepSize?: number;
}>({
  name: "Bloom",
  create(props, collection) {
    return collection.bloom;
  },
  props: ["brightness", "contrast", "delta", "glowOnly", "sigma", "stepSize"],
  noMount: true,
});

export const BlurStage = createPostProcessStage<{
  delta?: number;
  sigma?: number;
  stepSize?: number;
}>({
  name: "BlurStage",
  props: ["delta", "sigma", "stepSize"],
  create() {
    return (Cesium as any).PostProcessStageLibrary.createBlurStage();
  },
});

export const DepthOfFieldStage = createPostProcessStage<{
  focalDistance?: number;
  delta?: number;
  sigma?: number;
  stepSize?: number;
}>({
  name: "DepthOfFieldStage",
  props: ["delta", "focalDistance", "sigma", "stepSize"],
  create() {
    return (Cesium as any).PostProcessStageLibrary.createDepthOfFieldStage();
  },
});

export const EdgeDetectionStage = createPostProcessStage<{
  color?: Cesium.Color;
  length?: number;
}>({
  name: "EdgeDetectionStage",
  props: ["color", "length"],
  create() {
    return (Cesium as any).PostProcessStageLibrary.createEdgeDetectionStage();
  },
});

export const SilhouetteStage = createPostProcessStage<{
  color?: Cesium.Color;
  length?: number;
}>({
  name: "SilhouetteStage",
  props: ["color", "length"],
  create(props) {
    return (Cesium as any).PostProcessStageLibrary.createSilhouetteStage();
  },
});

export default PostProcessStageComposite;
