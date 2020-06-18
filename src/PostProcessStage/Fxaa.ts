// @ignore
import { createPostProcessStage } from "../core";

export const Fxaa = createPostProcessStage<unknown>({
  name: "Fxaa",
  create: (_props, collection) => collection.fxaa,
  props: [],
});

export default Fxaa;
