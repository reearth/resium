import { expectType, TypeEqual } from "ts-expect";
import { PointPrimitiveCollection } from "cesium";

import { UnusedCesiumProps } from "../core";
import { PointPrimitiveCollectionProps } from "./PointPrimitiveCollection";

// Unused prop check
type UnusedProps = UnusedCesiumProps<PointPrimitiveCollection, keyof PointPrimitiveCollectionProps>;
type IgnoredProps = "length";

expectType<TypeEqual<never, Exclude<UnusedProps, IgnoredProps>>>(true);

it("should be compiled", () => {});
