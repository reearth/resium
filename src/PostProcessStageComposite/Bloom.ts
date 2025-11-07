// @ignore
import { createPostProcessStage } from "../core";

import { PostProcessStageCompositeProps } from "./PostProcessStageComposite";

type Props = {
  contrast?: number;
  brightness?: number;
  glowOnly?: boolean;
  delta?: number;
  sigma?: number;
  stepSize?: number;
};

export type BloomProps = PostProcessStageCompositeProps & Props;

export const Bloom = createPostProcessStage<Props>({
  name: "Bloom",
  create: (_props, collection) => collection.bloom,
  props: ["brightness", "contrast", "delta", "glowOnly", "sigma", "stepSize"],
  noMount: true,
});

export default Bloom;
