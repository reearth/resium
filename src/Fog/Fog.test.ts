import { expectType, TypeEqual } from "ts-expect";
import { Fog } from "cesium";

import { UnusedCesiumProps } from "../core";
import { FogProps } from "./Fog";

// Unused prop check
type UnusedProps = UnusedCesiumProps<Fog, keyof FogProps>;
type IgnoredProps = never;

expectType<TypeEqual<never, Exclude<UnusedProps, IgnoredProps>>>(true);

it("should be compiled", () => {});
