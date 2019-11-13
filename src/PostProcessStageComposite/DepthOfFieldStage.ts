import { PostProcessStageLibrary } from "cesium";

import { createPostProcessStage } from "../core/PostProcessStage";

export const DepthOfFieldStage = createPostProcessStage<{
  focalDistance?: number;
  delta?: number;
  sigma?: number;
  stepSize?: number;
}>({
  name: "DepthOfFieldStage",
  props: ["delta", "focalDistance", "sigma", "stepSize"],
  create: () => PostProcessStageLibrary.createDepthOfFieldStage(),
});

export default DepthOfFieldStage;
