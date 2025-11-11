import { PostProcessStage } from "cesium";
import { expectType, TypeEqual } from "ts-expect";
import { it } from "vitest";

import { PostProcessStageProps } from "./PostProcessStage";
import { UnusedCesiumProps } from "./types";

// Unused prop check
type UnusedProps = UnusedCesiumProps<PostProcessStage, PostProcessStageProps>;
type IgnoredProps = never;

expectType<TypeEqual<Exclude<UnusedProps, IgnoredProps>, never>>(true);

it("should be compiled", () => {});
