import { expectType, TypeEqual } from "ts-expect";
import { Fog } from "cesium";

import { UnusedCesiumProps } from "../core";
import { FogProps } from "./Fog";

// Unused prop check
type UnusedProps = UnusedCesiumProps<Fog, FogProps, {}, IgnoredProps>;
type IgnoredProps = never;

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
