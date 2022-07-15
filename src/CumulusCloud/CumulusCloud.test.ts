import { CumulusCloud } from "cesium";
import { expectType, TypeEqual } from "ts-expect";
import { it } from "vitest";

import { UnusedCesiumProps } from "../core";

import { CumulusCloudProps } from "./CumulusCloud";

// Unused prop check
type UnusedProps = UnusedCesiumProps<CumulusCloud, CumulusCloudProps, {}, IgnoredProps>;
type IgnoredProps = never;

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
