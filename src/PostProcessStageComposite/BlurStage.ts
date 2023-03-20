// @ignore
import { PostProcessStageLibrary } from "cesium";

import { createPostProcessStage } from "../core";

import { PostProcessStageCompositeProps } from "./PostProcessStageComposite";

type Props = {
  delta?: number;
  sigma?: number;
  stepSize?: number;
};

export type BlurStageProps = PostProcessStageCompositeProps & Props;

export const BlurStage = createPostProcessStage<Props>({
  name: "BlurStage",
  props: ["delta", "sigma", "stepSize"],
  create: () => PostProcessStageLibrary.createBlurStage(),
});

export default BlurStage;
