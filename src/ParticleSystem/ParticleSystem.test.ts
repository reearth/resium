import { expectType, TypeEqual } from "ts-expect";
import { it } from "vitest";

import { UnusedCesiumProps } from "../core";

import { ParticleSystemProps, cesiumEventProps, Target } from "./ParticleSystem";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  Target,
  ParticleSystemProps,
  typeof cesiumEventProps,
  IgnoredProps
>;
type IgnoredProps = "isComplete" | "image"; // image is actually used

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
