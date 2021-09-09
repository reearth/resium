import { expectType, TypeEqual } from "ts-expect";
import { Sun } from "cesium";

import { UnusedCesiumProps } from "../core";
import { SunProps } from "./Sun";

// Unused prop check
type UnusedProps = UnusedCesiumProps<Sun, keyof SunProps>;
type IgnoredProps = never;

expectType<TypeEqual<never, Exclude<UnusedProps, IgnoredProps>>>(true);

it("should be compiled", () => {});
