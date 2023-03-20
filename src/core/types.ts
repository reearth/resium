import {
  Billboard,
  BillboardCollection,
  Entity,
  Event,
  Label,
  LabelCollection,
  Model,
  ModelNode,
  PointPrimitive,
  PointPrimitiveCollection,
  Polyline,
  PolylineCollection,
  Primitive,
} from "cesium";

export type ValueOf<T> = T[keyof T];

export type ArrayKeys<K> = StringOnly<
  K extends readonly (infer E)[] ? E : K extends (infer E)[] ? E : K
>;

export type Merge<A, B> = Omit<A, keyof B> & B;

export type UnionMerge<A, B> = Omit<A, keyof A & keyof B> &
  Omit<B, keyof A & keyof B> & { [K in keyof A & keyof B]: A[K] | B[K] };

export type PickCesiumProps<
  T,
  K extends readonly any[] | string,
  Required extends ArrayKeys<K> = never,
> = RemoveReadOnlyAndPartial<Pick<T, ArrayKeys<K>>, Required>;

export type ConstructorOptions<T extends new (...args: any[]) => any> = NonNullable<
  ConstructorParameters<T>[0]
>;
export type ConstructorOptions2<T extends new (...args: any[]) => any> = NonNullable<
  ConstructorParameters<T>[1]
>;

export type StaticMethodOptions<
  T extends { [J in K]: (...args: any[]) => any },
  K extends keyof T,
> = NonNullable<Parameters<T[K]>[0]>;

export type StaticMethodOptions2<
  T extends { [J in K]: (...args: any[]) => any },
  K extends keyof T,
> = NonNullable<Parameters<T[K]>[1]>;

export type MethodOptions<
  T extends new (...args: any) => any & { [J in K]: (...args: any[]) => any },
  K extends keyof T,
> = NonNullable<Parameters<InstanceType<T>[K]>[0]>;

export type MethodOptions2<
  T extends new (...args: any) => any & { [J in K]: (...args: any[]) => any },
  K extends keyof T,
> = NonNullable<Parameters<InstanceType<T>[K]>[1]>;

export type UnusedCesiumProps<
  T,
  K,
  E extends { [e: string]: string } = {},
  I extends string = never,
> = Exclude<InvalidProps<CesiumPureProps<T>, ArrayKeys<keyof K>, E>, I>;

type InvalidProps<T extends string, K extends string, E extends { [e: string]: string } = {}> =
  | Exclude<T, K | E[keyof E]>
  | Exclude<K, T | keyof E>;

type CesiumPureProps<T> = Exclude<
  StringOnly<keyof T>,
  FunctionKeys<T> | Exclude<ReadonlyKeys<T>, CesiumEventKeys<T>> | "prototype"
>;
type StringOnly<K> = K extends string ? K : never;

type CesiumEventKeys<T> = {
  [K in keyof T]: T[K] extends Event ? K : never;
}[keyof T];

type FunctionKeys<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any ? K : never;
}[keyof T];

type IfEquals<X, Y, A = X, B = never> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? A
  : B;

type ReadonlyKeys<T> = {
  [P in keyof T]-?: IfEquals<{ [Q in P]: T[P] }, { -readonly [Q in P]: T[P] }, never, P>;
}[keyof T];

type RemoveReadOnlyAndPartial<T, Required extends keyof T = never> = {
  -readonly [key in keyof Pick<T, Required>]: T[key];
} & {
  -readonly [key in keyof Omit<T, Required>]?: T[key];
};

export type EventTarget = {
  id: Entity;
} & (
  | { primitive: Primitive }
  | {
      primitive: Model;
      node: ModelNode;
    }
  | { collection: BillboardCollection; primitive: Billboard }
  | { collection: LabelCollection; primitive: Label }
  | { collection: PointPrimitiveCollection; primitive: PointPrimitive }
  | { collection: PolylineCollection; primitive: Polyline }
);
