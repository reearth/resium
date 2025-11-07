// @ignore
import { PostProcessStageLibrary } from "cesium";

import { createPostProcessStage } from "../core";

export const NightVisionStage = createPostProcessStage<unknown>({
  name: "NightVisionStage",
  props: [],
  create: () => PostProcessStageLibrary.createNightVisionStage(),
});

export default NightVisionStage;
