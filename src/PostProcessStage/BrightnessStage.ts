// @ignore
import { PostProcessStageLibrary } from "cesium";

import { createPostProcessStage } from "../core";

import { PostProcessStageProps } from "./PostProcessStage";

type Props = { brightness?: number };

export type BrightnessStageProps = PostProcessStageProps & Props;

export const BrightnessStage = createPostProcessStage<Props>({
  name: "BrightnessStage",
  props: ["brightness"],
  create: () => PostProcessStageLibrary.createBrightnessStage(),
});

export default BrightnessStage;
