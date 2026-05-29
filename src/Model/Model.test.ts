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
// gltf is actually used, pointCloudShading is readonly in practice, events are readonly
type IgnoredProps =
  | "id"
  | "activeAnimations"
  | "gltf"
  | "url"
  | "pointCloudShading"
  | "errorEvent"
  | "readyEvent"
  | "texturesReadyEvent";

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
