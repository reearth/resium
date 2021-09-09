import { expectType, TypeEqual } from "ts-expect";
import { BillboardCollection } from "cesium";

import { UnusedCesiumProps } from "../core";
import { BillboardCollectionProps } from "./BillboardCollection";

// Unused prop check
type UnusedProps = UnusedCesiumProps<BillboardCollection, keyof BillboardCollectionProps>;
type IgnoredProps = "length";

expectType<TypeEqual<never, Exclude<UnusedProps, IgnoredProps>>>(true);

it("should be compiled", () => {});
