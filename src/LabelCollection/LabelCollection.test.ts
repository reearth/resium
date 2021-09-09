import { expectType, TypeEqual } from "ts-expect";
import { LabelCollection } from "cesium";

import { UnusedCesiumProps } from "../core";
import { LabelCollectionProps } from "./LabelCollection";

// Unused prop check
type UnusedProps = UnusedCesiumProps<LabelCollection, keyof LabelCollectionProps>;
type IgnoredProps = "length";

expectType<TypeEqual<never, Exclude<UnusedProps, IgnoredProps>>>(true);

it("should be compiled", () => {});
