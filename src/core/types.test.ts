/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  ConstructorOptions,
  UnusedCesiumProps,
  PickCesiumProps,
  Merge,
  UnionMerge,
  ArrayKeys,
} from "./types";

type Assert<Actual extends Expected, Expected> = Actual;

class Test {
  constructor({ hoge }: { hoge: string }) {
    this.hoge = hoge;
  }
  hoge: string | null;
  readonly foo = true;
  bar() {
    return 1;
  }
}

type TestOptions = {
  hoge?: string | number;
};

const keys: ["hoge", "foo", "bar"] = ["hoge", "foo", "bar"];
const readOnlyKeys = ["hoge", "foo", "bar"] as string[];

type ArrayKeysTest = Assert<
  ArrayKeys<[1, 2] | 1 | ["hoge"] | "foo" | undefined | null>,
  "hoge" | "foo"
>;
type MergeTest = Assert<
  Merge<{ a: string; b?: string }, { b: number; c?: boolean }>,
  { a: string; b: number; c?: boolean }
>;
type UnionMergeTest = Assert<
  UnionMerge<{ a: string; b?: string }, { b: number; c?: boolean }>,
  { a: string; b?: string | number; c?: boolean }
>;
type ConstructorOptionsTest = Assert<ConstructorOptions<typeof Test>, { hoge: string }>;
type UnusedCesiumPropsTest1 = Assert<UnusedCesiumProps<Test, "hoge">, never>;
type UnusedCesiumPropsTest2 = Assert<UnusedCesiumProps<Test, never>, "hoge">;
type PickCesiumPropsTest1 = Assert<
  PickCesiumProps<Test, "hoge" | "foo" | "bar">,
  { hoge?: string | null }
>;
type PickCesiumPropsTest2 = Assert<PickCesiumProps<Test, typeof keys>, { hoge?: string | null }>;
type PickCesiumPropsTest3 = Assert<
  PickCesiumProps<Test, typeof readOnlyKeys>,
  { hoge?: string | null }
>;
type PickCesiumPropsTest4 = Assert<PickCesiumProps<Test, "hoge", "hoge">, { hoge: string | null }>;
type PickCesiumPropsTest5 = Assert<
  PickCesiumProps<Merge<Test, TestOptions>, "hoge">,
  { hoge?: string | number }
>;
type PickCesiumPropsTest6 = Assert<
  PickCesiumProps<UnionMerge<Test, TestOptions>, "hoge">,
  { hoge?: string | number | null }
>;

describe("core/types", () => {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  it("should compile", () => {});
});
