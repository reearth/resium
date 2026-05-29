import type { PostProcessStage } from "cesium";
import type { TypeEqual } from "ts-expect";
import { expectType } from "ts-expect";
import { it } from "vitest";

import type { PostProcessStageProps } from "./PostProcessStage";
import type { UnusedCesiumProps } from "./types";

// Unused prop check
type UnusedProps = UnusedCesiumProps<PostProcessStage, PostProcessStageProps>;
type IgnoredProps = never;

expectType<TypeEqual<Exclude<UnusedProps, IgnoredProps>, never>>(true);

it("should be compiled", () => {});
