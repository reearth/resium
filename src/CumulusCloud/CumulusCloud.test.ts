import type { CumulusCloud } from "cesium";
import type { TypeEqual } from "ts-expect";
import { expectType } from "ts-expect";
import { it } from "vitest";

import type { UnusedCesiumProps } from "../core";

import type { CumulusCloudProps } from "./CumulusCloud";

// Unused prop check
type UnusedProps = UnusedCesiumProps<CumulusCloud, CumulusCloudProps, {}, IgnoredProps>;
type IgnoredProps = never;

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
