import { expectType, TypeEqual } from "ts-expect";
import { PostProcessStageComposite } from "cesium";

import { UnusedCesiumProps } from "../core";
import { PostProcessStageCompositeProps } from "./PostProcessStageComposite";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  PostProcessStageComposite,
  keyof PostProcessStageCompositeProps
>;
type IgnoredProps = never;

expectType<TypeEqual<never, Exclude<UnusedProps, IgnoredProps>>>(true);

it("should be compiled", () => {});
