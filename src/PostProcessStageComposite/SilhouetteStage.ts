// @ignore
import { PostProcessStageLibrary } from "cesium";

import { createPostProcessStage } from "../core/PostProcessStage";

export const SilhouetteStage = createPostProcessStage<{
  color?: Cesium.Color;
  length?: number;
}>({
  name: "SilhouetteStage",
  props: ["color", "length"],
  // WORKAROUND: Cesium.PostProcessStageLibrary must have createSilhouetteStage
  create: () => (PostProcessStageLibrary as any).createSilhouetteStage(),
});

export default SilhouetteStage;
