import { expectType, TypeEqual } from "ts-expect";
import { CloudCollection } from "cesium";

import { UnusedCesiumProps } from "../core";
import { CloudCollectionProps } from "./CloudCollection";

// Unused prop check
type UnusedProps = UnusedCesiumProps<CloudCollection, keyof CloudCollectionProps>;
type IgnoredProps = "length";

expectType<TypeEqual<never, Exclude<UnusedProps, IgnoredProps>>>(true);

it("should be compiled", () => {});
