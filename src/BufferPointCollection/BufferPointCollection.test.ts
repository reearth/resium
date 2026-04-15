import { BufferPointCollection } from "cesium";
import { expectType, TypeEqual } from "ts-expect";
import { it } from "vitest";

import { UnusedCesiumProps } from "../core";

import {
  BufferPointCollectionOtherProps,
  BufferPointCollectionProps,
} from "./BufferPointCollection";

type UnusedProps = UnusedCesiumProps<
  BufferPointCollection,
  Omit<BufferPointCollectionProps, keyof BufferPointCollectionOtherProps | "primitiveCountMax">,
  {},
  IgnoredProps
>;
type IgnoredProps = "length";

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
