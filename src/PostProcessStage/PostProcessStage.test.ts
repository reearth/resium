import { expectType, TypeEqual } from "ts-expect";

import { UnusedCesiumProps } from "../core";
import { PostProcessStageProps, Target } from "./PostProcessStage";

// Unused prop check
type UnusedProps = UnusedCesiumProps<Target, PostProcessStageProps, {}, IgnoredProps>;
type IgnoredProps = "uniforms"; // uniforms is actually used

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
