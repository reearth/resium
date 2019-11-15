// @ignore
import { createPostProcessStage } from "../core/PostProcessStage";

export const Fxaa = createPostProcessStage<{}>({
  name: "Fxaa",
  create: (props, collection) => collection.fxaa,
  props: [],
});

export default Fxaa;
