// @ignore
import { PostProcessStageLibrary } from "cesium";

import { createPostProcessStage } from "../core/PostProcessStage";

export const BrightnessStage = createPostProcessStage<{
  brightness?: number;
}>({
  name: "BrightnessStage",
  props: ["brightness"],
  create: () => PostProcessStageLibrary.createBrightnessStage(),
});

export default BrightnessStage;
