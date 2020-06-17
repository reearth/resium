// @ignore
import { PostProcessStageLibrary, Color } from "cesium";

import { createPostProcessStage } from "../core";

export const SilhouetteStage = createPostProcessStage<{
  color?: Color;
  length?: number;
}>({
  name: "SilhouetteStage",
  props: ["color", "length"],
  create: () => PostProcessStageLibrary.createSilhouetteStage(),
});

export default SilhouetteStage;
