// @ignore
import { PostProcessStageLibrary } from "cesium";

import { createPostProcessStage } from "../core/PostProcessStage";

export const BlackAndWhiteStage = createPostProcessStage<{
  gradations?: number;
}>({
  name: "BlackAndWhiteStage",
  props: ["gradations"],
  create: () => PostProcessStageLibrary.createBlackAndWhiteStage(),
});

export default BlackAndWhiteStage;
