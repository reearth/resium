// @ignore
import type { Color } from "cesium";
import { PostProcessStageLibrary } from "cesium";

import { createPostProcessStage } from "../core";

import type { PostProcessStageCompositeProps } from "./PostProcessStageComposite";

type Props = {
  color?: Color;
  length?: number;
};

export type EdgeDetectionStageProps = PostProcessStageCompositeProps & Props;

export const EdgeDetectionStage = createPostProcessStage<Props>({
  name: "EdgeDetectionStage",
  props: ["color", "length"],
  create: () => PostProcessStageLibrary.createEdgeDetectionStage(),
});

export default EdgeDetectionStage;
