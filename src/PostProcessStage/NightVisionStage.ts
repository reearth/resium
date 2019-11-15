// @ignore
import { PostProcessStageLibrary } from "cesium";

import { createPostProcessStage } from "../core/PostProcessStage";

export const NightVisionStage = createPostProcessStage<{}>({
  name: "NightVisionStage",
  props: [],
  create: () => PostProcessStageLibrary.createNightVisionStage(),
});

export default NightVisionStage;
