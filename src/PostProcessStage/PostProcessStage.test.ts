import type { TypeEqual } from "ts-expect";
import { expectType } from "ts-expect";
import { it } from "vitest";

import type { UnusedCesiumProps } from "../core";

import type { PostProcessStageProps, Target } from "./PostProcessStage";

// Unused prop check
type UnusedProps = UnusedCesiumProps<Target, PostProcessStageProps, {}, IgnoredProps>;
type IgnoredProps = "uniforms"; // uniforms is actually used

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
