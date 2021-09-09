import { expectType, TypeEqual } from "ts-expect";
import { CumulusCloud } from "cesium";

import { UnusedCesiumProps } from "../core";
import { CumulusCloudProps } from "./CumulusCloud";

// Unused prop check
type UnusedProps = UnusedCesiumProps<CumulusCloud, keyof CumulusCloudProps>;
type IgnoredProps = never;

expectType<TypeEqual<never, Exclude<UnusedProps, IgnoredProps>>>(true);

it("should be compiled", () => {});
