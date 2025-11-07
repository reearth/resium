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
  type: TypeExpr | undefined;
  required: boolean;
  desc?: string;
  mappedCesiumFieldName?: string;
};

export type TypeExpr = {
  text: string;
  cesiumTypes: CesiumTypeExpr[];
};

export type CesiumTypeExpr = {
  start: number;
  end: number;
  name: string;
  field?: string;
  fieldIsType?: boolean;
};

export type PropKind =
  | "cesiumProps"
  | "cesiumReadonlyProps"
  | "cesiumEvents"
  | "otherProps"
  | "props";
