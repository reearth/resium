// @ignore
import { PostProcessStageLibrary } from "cesium";

import { createPostProcessStage } from "../core";

import { PostProcessStageProps } from "./PostProcessStage";

type Props = {
  dirtTexture?: any;
  starTexture?: any;
  intensity?: number;
  distortion?: number;
  ghostDispersal?: number;
  haloWidth?: number;
  earthRadius?: number;
};

export type LensFlareStageProps = PostProcessStageProps & Props;

export const LensFlareStage = createPostProcessStage<Props>({
  name: "LensFlareStage",
  props: [
    "dirtTexture",
    "starTexture",
    "intensity",
    "distortion",
    "ghostDispersal",
    "haloWidth",
    "earthRadius",
  ],
  create: () => PostProcessStageLibrary.createLensFlareStage(),
});
export default LensFlareStage;
