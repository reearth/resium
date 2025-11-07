import { Moon } from "cesium";
import { expectType, TypeEqual } from "ts-expect";
import { it } from "vitest";

import { UnusedCesiumProps } from "../core";

import { MoonProps } from "./Moon";

// Unused prop check
type UnusedProps = UnusedCesiumProps<Moon, MoonProps, {}, IgnoredProps>;
type IgnoredProps = "ellipsoid";

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
