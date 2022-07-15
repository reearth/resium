import { expectType, TypeEqual } from "ts-expect";
import { Moon } from "cesium";

import { UnusedCesiumProps } from "../core";
import { MoonProps } from "./Moon";

// Unused prop check
type UnusedProps = UnusedCesiumProps<Moon, MoonProps, {}, IgnoredProps>;
type IgnoredProps = "ellipsoid";

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
