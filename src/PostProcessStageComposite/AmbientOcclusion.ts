// @ignore
import { createPostProcessStage } from "../core";

import { PostProcessStageCompositeProps } from "./PostProcessStageComposite";

type Props = {
  intensity?: number;
  bias?: number;
  lengthCap?: number;
  stepSize?: number;
  frustumLength?: number;
  ambientOcclusionOnly?: boolean;
  delta?: number;
  sigma?: number;
};

export type AmbientOcclusionProps = PostProcessStageCompositeProps & Props;

export const AmbientOcclusion = createPostProcessStage<Props>({
  name: "AmbientOcclusion",
  create: (_props, collection) => collection.ambientOcclusion,
  props: [
    "ambientOcclusionOnly",
    "bias",
    "delta",
    "frustumLength",
    "intensity",
    "lengthCap",
    "sigma",
    "stepSize",
  ],
  noMount: true,
});

export default AmbientOcclusion;
