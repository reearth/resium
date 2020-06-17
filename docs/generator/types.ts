export type Doc = {
  name: string;
  cesiumElement: string;
} & DocProps &
  DocComment;

export type DocProps = {
  [kind in PropKind]?: Prop[];
};

export type DocComment = {
  noCesiumElement?: boolean;
  cesiumElement?: string;
  summary?: string;
  scope?: string;
  ignored?: boolean;
};

export type Prop = {
  name: string;
  required?: boolean;
  cesiumType?: boolean;
  mappedCesiumType?: string;
} & PropComment;

export type PropComment = {
  kind?: PropKind;
  type?: Type;
  hidden?: boolean;
  description?: string;
};

export type PropKind = "cesiumProps" | "cesiumReadonlyProps" | "cesiumEvents" | "props";

export type Type = TypeRef | UnionType | FunctionType | ArrayType;
export type TypeRef =
  | string
  | {
      name: string;
      leftName?: string;
      rightName?: string;
      cesium: boolean;
      params?: Type[];
    };
export type FunctionType = {
  args: { name: string; type: Type; optional: boolean }[];
  return: Type;
};
export type UnionType = Type[];
export type ArrayType = {
  element: Type;
};
