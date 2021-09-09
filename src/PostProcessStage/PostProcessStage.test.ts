import { expectType, TypeEqual } from "ts-expect";
import { PostProcessStage } from "cesium";

import { UnusedCesiumProps } from "../core";
import { PostProcessStageProps } from "./PostProcessStage";

// Unused prop check
type UnusedProps = UnusedCesiumProps<PostProcessStage, keyof PostProcessStageProps>;
type IgnoredProps = never;

expectType<TypeEqual<never, Exclude<UnusedProps, IgnoredProps>>>(true);

it("should be compiled", () => {});
