// @ignore
import { createPostProcessStage } from "../core/PostProcessStage";

export const Bloom = createPostProcessStage<{
  contrast?: number;
  brightness?: number;
  glowOnly?: boolean;
  delta?: number;
  sigma?: number;
  stepSize?: number;
}>({
  name: "Bloom",
  create: (_props, collection) => collection.bloom,
  props: ["brightness", "contrast", "delta", "glowOnly", "sigma", "stepSize"],
  noMount: true,
});

export default Bloom;
