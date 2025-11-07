import { expectType, TypeEqual } from "ts-expect";
import { it } from "vitest";

import { UnusedCesiumProps } from "../core";

import { ShadowMapProps, Target } from "./ShadowMap";

// Unused prop check
type UnusedProps = UnusedCesiumProps<Target, ShadowMapProps, {}, IgnoredProps>;
type IgnoredProps = never;

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
