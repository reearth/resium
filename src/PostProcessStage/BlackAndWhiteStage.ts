// @ignore
import { PostProcessStageLibrary } from "cesium";

import { createPostProcessStage } from "../core";

import { PostProcessStageProps } from "./PostProcessStage";

type Props = { gradations?: number };

export type BlackAndWhiteStageProps = PostProcessStageProps & Props;

export const BlackAndWhiteStage = createPostProcessStage<Props>({
  name: "BlackAndWhiteStage",
  props: ["gradations"],
  create: () => PostProcessStageLibrary.createBlackAndWhiteStage(),
});

export default BlackAndWhiteStage;
