import { expectType, TypeEqual } from "ts-expect";
import { ImageryLayerCollection } from "cesium";

import { UnusedCesiumProps, ValueOf } from "../core";
import { cesiumEventProps } from "./ImageryLayerCollection";

// Unused prop check
type UnusedProps = UnusedCesiumProps<ImageryLayerCollection, ValueOf<typeof cesiumEventProps>>;
type IgnoredProps = never;

expectType<TypeEqual<never, Exclude<UnusedProps, IgnoredProps>>>(true);

it("should be compiled", () => {});
