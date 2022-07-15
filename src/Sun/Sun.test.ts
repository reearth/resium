import { it } from "vitest";
import { expectType, TypeEqual } from "ts-expect";
import { Sun } from "cesium";

import { UnusedCesiumProps } from "../core";
import { SunProps } from "./Sun";

// Unused prop check
type UnusedProps = UnusedCesiumProps<Sun, SunProps, {}, IgnoredProps>;
type IgnoredProps = never;

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
