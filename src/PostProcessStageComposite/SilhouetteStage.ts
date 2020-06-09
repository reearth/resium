// @ignore
import { PostProcessStageLibrary, Color } from "cesium";

import { createPostProcessStage } from "../core/PostProcessStage";

export const SilhouetteStage = createPostProcessStage<{
  color?: Color;
  length?: number;
}>({
  name: "SilhouetteStage",
  props: ["color", "length"],
  // WORKAROUND: PostProcessStageLibrary must have createSilhouetteStage
  create: () => (PostProcessStageLibrary as any).createSilhouetteStage(),
});

export default SilhouetteStage;
