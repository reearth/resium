import { expectType, TypeEqual } from "ts-expect";
import { ParticleSystem } from "cesium";

import { UnusedCesiumProps, ValueOf } from "../core";
import { ParticleSystemProps, cesiumEventProps } from "./ParticleSystem";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  ParticleSystem,
  keyof ParticleSystemProps | ValueOf<typeof cesiumEventProps>
>;
type IgnoredProps = "isComplete";

expectType<TypeEqual<never, Exclude<UnusedProps, IgnoredProps>>>(true);

it("should be compiled", () => {});
