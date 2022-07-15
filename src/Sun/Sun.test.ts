import { Sun } from "cesium";
import { expectType, TypeEqual } from "ts-expect";
import { it } from "vitest";

import { UnusedCesiumProps } from "../core";

import { SunProps } from "./Sun";

// Unused prop check
type UnusedProps = UnusedCesiumProps<Sun, SunProps, {}, IgnoredProps>;
type IgnoredProps = never;

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
