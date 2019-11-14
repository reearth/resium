import { PostProcessStageLibrary } from "cesium";

import { createPostProcessStage } from "../core/PostProcessStage";

export const SilhouetteStage = createPostProcessStage<{
  color?: Cesium.Color;
  length?: number;
}>({
  name: "SilhouetteStage",
  props: ["color", "length"],
  create: () => PostProcessStageLibrary.createSilhouetteStage(),
});

export default SilhouetteStage;
