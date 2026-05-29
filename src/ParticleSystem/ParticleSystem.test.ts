import type { TypeEqual } from "ts-expect";
import { expectType } from "ts-expect";
import { it } from "vitest";

import type { UnusedCesiumProps } from "../core";

import type { ParticleSystemProps, cesiumEventProps, Target } from "./ParticleSystem";

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
