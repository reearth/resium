// @ignore
import { PostProcessStageLibrary } from "cesium";

import { createPostProcessStage } from "../core/PostProcessStage";

export const EdgeDetectionStage = createPostProcessStage<{
  color?: Cesium.Color;
  length?: number;
}>({
  name: "EdgeDetectionStage",
  props: ["color", "length"],
  create: () => PostProcessStageLibrary.createEdgeDetectionStage(),
});

export default EdgeDetectionStage;
