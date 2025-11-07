// @ignore
import { PostProcessStageLibrary, Color } from "cesium";

import { createPostProcessStage } from "../core";

import { PostProcessStageCompositeProps } from "./PostProcessStageComposite";

type Props = {
  color?: Color;
  length?: number;
};

export type SilhouetteStageProps = PostProcessStageCompositeProps & Props;

export const SilhouetteStage = createPostProcessStage<Props>({
  name: "SilhouetteStage",
  props: ["color", "length"],
  create: () => PostProcessStageLibrary.createSilhouetteStage(),
});

export default SilhouetteStage;
