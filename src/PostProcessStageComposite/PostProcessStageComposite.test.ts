import type { TypeEqual } from "ts-expect";
import { expectType } from "ts-expect";
import { it } from "vitest";

import type { UnusedCesiumProps } from "../core";

import type { PostProcessStageCompositeProps, Target } from "./PostProcessStageComposite";

// Unused prop check
type UnusedProps = UnusedCesiumProps<Target, PostProcessStageCompositeProps, {}, IgnoredProps>;
type IgnoredProps = "uniforms"; // uniforms is actually used

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
