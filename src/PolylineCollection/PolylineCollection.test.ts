import { expectType, TypeEqual } from "ts-expect";
import { PolylineCollection } from "cesium";

import { UnusedCesiumProps } from "../core";
import { PolylineCollectionProps } from "./PolylineCollection";

// Unused prop check
type UnusedProps = UnusedCesiumProps<PolylineCollection, keyof PolylineCollectionProps>;
type IgnoredProps = never;

expectType<TypeEqual<never, Exclude<UnusedProps, IgnoredProps>>>(true);

it("should be compiled", () => {});
