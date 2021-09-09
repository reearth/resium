import { PostProcessStage } from "cesium";
import { expectType, TypeEqual } from "ts-expect";

import { UnusedCesiumProps } from "./types";
import { PostProcessStageProps } from "./PostProcessStage";

// Unused prop check
type UnusedProps = UnusedCesiumProps<PostProcessStage, keyof PostProcessStageProps>;
type IgnoredProps = never;

expectType<TypeEqual<Exclude<UnusedProps, IgnoredProps>, never>>(true);

it("should be compiled", () => {});
