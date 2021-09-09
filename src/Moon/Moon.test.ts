import { expectType, TypeEqual } from "ts-expect";
import { Moon } from "cesium";

import { UnusedCesiumProps } from "../core";
import { MoonProps } from "./Moon";

// Unused prop check
type UnusedProps = UnusedCesiumProps<Moon, keyof MoonProps>;
type IgnoredProps = never;

expectType<TypeEqual<never, Exclude<UnusedProps, IgnoredProps>>>(true);

it("should be compiled", () => {});
