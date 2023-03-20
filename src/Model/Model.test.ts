import { expectType, TypeEqual } from "ts-expect";
import { it } from "vitest";

import { UnusedCesiumProps } from "../core";

import { ModalOtherProps, ModelProps, Target } from "./Model";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  Target,
  Omit<ModelProps, keyof ModalOtherProps>,
  {},
  IgnoredProps
>;
type IgnoredProps = "id" | "activeAnimations" | "gltf"; // gltf is actually used

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
