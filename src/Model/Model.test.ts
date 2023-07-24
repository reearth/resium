import { expectType, TypeEqual } from "ts-expect";
import { it } from "vitest";

import { UnusedCesiumProps } from "../core";

import { ModelOtherProps, ModelProps, Target } from "./Model";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  Target,
  Omit<ModelProps, keyof ModelOtherProps>,
  {},
  IgnoredProps
>;
type IgnoredProps = "id" | "activeAnimations" | "gltf" | "url"; // gltf is actually used

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
