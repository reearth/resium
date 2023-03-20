import { expectType, TypeEqual } from "ts-expect";
import { it } from "vitest";

import { UnusedCesiumProps } from "../core";

import { SkyBoxProps, Target } from "./SkyBox";

// Unused prop check
type UnusedProps = UnusedCesiumProps<Target, SkyBoxProps, {}, IgnoredProps>;
type IgnoredProps = "sources"; // sources is actually used

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
