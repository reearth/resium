import { it } from "vitest";
import { expectType, TypeEqual } from "ts-expect";
import { PolylineCollection } from "cesium";

import { UnusedCesiumProps } from "../core";
import { PolylineCollectionOtherProps, PolylineCollectionProps } from "./PolylineCollection";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  PolylineCollection,
  Omit<PolylineCollectionProps, keyof PolylineCollectionOtherProps>,
  {},
  IgnoredProps
>;
type IgnoredProps = never;

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
