import type { TypeEqual } from "ts-expect";
import { expectType } from "ts-expect";
import { it } from "vitest";

import type { UnusedCesiumProps } from "../core";

import type { ShadowMapProps, Target } from "./ShadowMap";

// Unused prop check
type UnusedProps = UnusedCesiumProps<Target, ShadowMapProps, {}, IgnoredProps>;
type IgnoredProps = never;

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
