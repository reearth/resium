import { expectType, TypeEqual } from "ts-expect";
import { Label } from "cesium";

import { UnusedCesiumProps } from "../core";
import { LabelProps } from "./Label";

// Unused prop check
type UnusedProps = UnusedCesiumProps<Label, keyof LabelProps>;
type IgnoredProps = "totalScale";

expectType<TypeEqual<never, Exclude<UnusedProps, IgnoredProps>>>(true);

it("should be compiled", () => {});
