import type { ImageryLayerCollection } from "cesium";
import type { TypeEqual } from "ts-expect";
import { expectType } from "ts-expect";
import { it } from "vitest";

import type { UnusedCesiumProps } from "../core";

import type { cesiumEventProps, ImageryLayerCollectionProps } from "./ImageryLayerCollection";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  ImageryLayerCollection,
  ImageryLayerCollectionProps,
  typeof cesiumEventProps,
  IgnoredProps
>;
type IgnoredProps = never;

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
