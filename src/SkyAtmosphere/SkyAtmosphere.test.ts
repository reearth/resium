import type { SkyAtmosphere } from "cesium";
import type { TypeEqual } from "ts-expect";
import { expectType } from "ts-expect";
import { it } from "vitest";

import type { UnusedCesiumProps } from "../core";

import type { SkyAtmosphereProps } from "./SkyAtmosphere";

// Unused prop check
type UnusedProps = UnusedCesiumProps<SkyAtmosphere, SkyAtmosphereProps, {}, IgnoredProps>;
type IgnoredProps = never;

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
