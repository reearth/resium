import { expectType, TypeEqual } from "ts-expect";
import { Billboard } from "cesium";

import { UnusedCesiumProps } from "../core";
import { BillboardProps } from "./Billboard";

// Unused prop check
type UnusedProps = UnusedCesiumProps<Billboard, keyof BillboardProps>;
type IgnoredProps = never;

expectType<TypeEqual<never, Exclude<UnusedProps, IgnoredProps>>>(true);

it("should be compiled", () => {});
