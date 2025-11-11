import { expectType, TypeEqual } from "ts-expect";
import { it } from "vitest";

import { UnusedCesiumProps } from "../core";

import { PostProcessStageCompositeProps, Target } from "./PostProcessStageComposite";

// Unused prop check
type UnusedProps = UnusedCesiumProps<Target, PostProcessStageCompositeProps, {}, IgnoredProps>;
type IgnoredProps = "uniforms"; // uniforms is actually used

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
