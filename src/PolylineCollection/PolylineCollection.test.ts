import { PolylineCollection } from "cesium";
import { expectType, TypeEqual } from "ts-expect";
import { it } from "vitest";

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
