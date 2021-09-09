import { expectType, TypeEqual } from "ts-expect";
import { ImageryLayer } from "cesium";

import { UnusedCesiumProps } from "../core";
import { ImageryLayerProps } from "./ImageryLayer";

// Unused prop check
type UnusedProps = UnusedCesiumProps<ImageryLayer, keyof ImageryLayerProps>;
type IgnoredProps = never;

expectType<TypeEqual<never, Exclude<UnusedProps, IgnoredProps>>>(true);

it("should be compiled", () => {});
