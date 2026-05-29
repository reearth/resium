import type { Moon } from "cesium";
import type { TypeEqual } from "ts-expect";
import { expectType } from "ts-expect";
import { it } from "vitest";

import type { UnusedCesiumProps } from "../core";

import type { MoonProps } from "./Moon";

// Unused prop check
type UnusedProps = UnusedCesiumProps<Moon, MoonProps, {}, IgnoredProps>;
type IgnoredProps = "ellipsoid";

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
