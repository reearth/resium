import { expectType, TypeEqual } from "ts-expect";
import { PrimitiveCollection } from "cesium";

import { UnusedCesiumProps } from "../core";
import { GroundPrimitiveCollectionProps } from "./GroundPrimitiveCollection";

// Unused prop check
type UnusedProps = UnusedCesiumProps<PrimitiveCollection, keyof GroundPrimitiveCollectionProps>;
type IgnoredProps = never;

expectType<TypeEqual<never, Exclude<UnusedProps, IgnoredProps>>>(true);

it("should be compiled", () => {});
