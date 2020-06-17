import {
  PostProcessStageComposite as CesiumPostProcessStageComposite,
  PostProcessStage,
} from "cesium";

import { createCesiumComponent } from "../core";

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
| EdgeDetectionStage | color | [Color](https://cesiumjs.org/Cesium/Build/Documentation/Color.html) |
| | length | number ||
| NightVisionStage | - | - |
| SilhouetteStage | color | [Color](https://cesiumjs.org/Cesium/Build/Documentation/Color.html) |
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
  stages: PostProcessStage[];
  inputPreviousStageTexture?: boolean;
  name?: string;
  uniforms?: any;
}

export interface PostProcessStageCompositeProps
  extends PostProcessStageCompositeCesiumProps,
    PostProcessStageCompositeCesiumReadonlyProps {}

const cesiumProps: (keyof PostProcessStageCompositeCesiumProps)[] = ["enabled", "selected"];

const cesiumReadonlyProps: (keyof PostProcessStageCompositeCesiumReadonlyProps)[] = [
  "inputPreviousStageTexture",
  "name",
  "stages",
  "uniforms",
];

export const PostProcessStageComposite = createCesiumComponent<
  CesiumPostProcessStageComposite,
  PostProcessStageCompositeProps
>({
  name: "PostProcessStageComposite",
  create(context, props) {
    if (!context.scene) return;
    const element = new CesiumPostProcessStageComposite(props);
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

export default PostProcessStageComposite;
