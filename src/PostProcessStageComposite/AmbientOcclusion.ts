// @ignore
import { createPostProcessStage } from "../core/PostProcessStage";

export const AmbientOcclusion = createPostProcessStage<{
  intensity?: number;
  bias?: number;
  lengthCap?: number;
  stepSize?: number;
  frustumLength?: number;
  ambientOcclusionOnly?: boolean;
  delta?: number;
  sigma?: number;
}>({
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
