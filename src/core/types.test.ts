import { expectType, TypeEqual, TypeOf } from "ts-expect";
import { it } from "vitest";

import {
  ConstructorOptions,
  UnusedCesiumProps,
  PickCesiumProps,
  Merge,
  UnionMerge,
  ArrayKeys,
} from "./types";

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

const keys = ["hoge", "foo", "bar"] as const;
const readOnlyKeys: string[] = ["hoge", "foo", "bar"];

expectType<TypeEqual<ArrayKeys<[1, 2] | 1 | ["hoge"] | "foo" | undefined | null>, "hoge" | "foo">>(
  true,
);
expectType<
  TypeOf<
    Merge<{ a: string; b?: string }, { b: number; c?: boolean }>,
    { a: string; b: number; c?: boolean }
  >
>(true);
expectType<
  TypeOf<
    UnionMerge<{ a: string; b?: string }, { b: number; c?: boolean }>,
    { a: string; b: string | number | undefined; c?: boolean }
  >
>(true);
expectType<TypeEqual<ConstructorOptions<typeof Test>, { hoge: string }>>(true);
expectType<TypeEqual<UnusedCesiumProps<Test, { hoge: boolean }>, never>>(true);
expectType<TypeEqual<UnusedCesiumProps<Test, {}>, "hoge">>(true);
expectType<TypeEqual<UnusedCesiumProps<Test, { foo: boolean }>, "hoge" | "foo">>(true);
expectType<TypeEqual<UnusedCesiumProps<Test, { hoge: boolean; foo: string }>, "foo">>(true);
expectType<TypeEqual<UnusedCesiumProps<Test, { hoge: boolean }, {}, "foo">, never>>(true);
expectType<TypeOf<PickCesiumProps<Test, "hoge" | "foo" | "bar">, { hoge?: string | null }>>(true);
expectType<TypeOf<PickCesiumProps<Test, typeof keys>, { hoge?: string | null }>>(true);
expectType<TypeOf<PickCesiumProps<Test, typeof readOnlyKeys>, { hoge?: string | number }>>(true);
expectType<TypeOf<PickCesiumProps<Merge<Test, TestOptions>, "hoge">, { hoge?: string | number }>>(
  true,
);
expectType<
  TypeOf<PickCesiumProps<UnionMerge<Test, TestOptions>, "hoge">, { hoge?: string | number | null }>
>(true);

it("should be compiled", () => {});
