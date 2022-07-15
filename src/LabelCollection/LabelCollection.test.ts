import { expectType, TypeEqual } from "ts-expect";
import { LabelCollection } from "cesium";

import { UnusedCesiumProps } from "../core";
import { LabelCollectionOtherProps, LabelCollectionProps } from "./LabelCollection";

// Unused prop check
type UnusedProps = UnusedCesiumProps<
  LabelCollection,
  Omit<LabelCollectionProps, keyof LabelCollectionOtherProps>,
  {},
  IgnoredProps
>;
type IgnoredProps = "length";

expectType<TypeEqual<never, UnusedProps>>(true);

it("should be compiled", () => {});
