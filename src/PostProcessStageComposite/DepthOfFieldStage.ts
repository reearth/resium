// @ignore
import { PostProcessStageLibrary } from "cesium";

import { createPostProcessStage } from "../core";

import { PostProcessStageCompositeProps } from "./PostProcessStageComposite";

type Props = {
  focalDistance?: number;
  delta?: number;
  sigma?: number;
  stepSize?: number;
};

export type DepthOfFieldStageProps = PostProcessStageCompositeProps & Props;

export const DepthOfFieldStage = createPostProcessStage<Props>({
  name: "DepthOfFieldStage",
  props: ["delta", "focalDistance", "sigma", "stepSize"],
  create: () => PostProcessStageLibrary.createDepthOfFieldStage(),
});

export default DepthOfFieldStage;
