import { parse } from "path";
import {
  Node,
  PropertySignature,
  isInterfaceDeclaration,
  isPropertySignature,
  isVariableStatement,
  isPropertyAssignment,
  SourceFile,
  isIdentifier,
  isTypeAliasDeclaration,
  isTypeLiteralNode,
  isObjectLiteralExpression,
  isStringLiteral,
  isIntersectionTypeNode,
  TypeNode,
  isTypeReferenceNode,
  isArrayTypeNode,
  isUnionTypeNode,
  isFunctionTypeNode,
  PropertyDeclaration,
  ExpressionWithTypeArguments,
  InterfaceDeclaration,
  TypeReferenceNode,
  isExpressionWithTypeArguments,
} from "typescript";
import { Prop, Doc, PropKind, Type, PropComment, DocComment, DocProps } from "./types";
import { CesiumTypeDefinition } from "./cesium";
import {
  createImportMap,
  getConstArrayElements,
  getLeadingComment,
  getVariableNameAndInitializer,
  getUnionStringLiterals,
  isTypeOf,
  entityNameToStringArray,
} from "./ast";

const rootEventProps: Prop[] = [
  ...getEventProps("any"),
  {
    name: "onWheel",
    type: {
      args: [{ name: "delta", type: "number", optional: false }],
      return: "void",
    },
  },
];

export function parseDoc(sourceFile: SourceFile, def: CesiumTypeDefinition): Doc {
  const name = parse(sourceFile.fileName).name;

  // create import map
  const importMap = createImportMap(sourceFile, "cesium");

  // get cesium prop field names
  const [cesiumProps, cesiumReadonlyProps] = getConstArrayElements(
    sourceFile,
    "cesiumProps",
    "cesiumReadonlyProps",
  );

  // parse doc comments
  const commentDoc = sourceFile.statements
    .map(parseDocComment)
    .reduce((a, b) => ({ ...a, ...b }), {});

  // parse props
  /*
    interface cesiumProps {
      hoge: foo;
    }
    or
    type cesiumProps = {
      hoge: foo;
    };
  */
  const propDoc = sourceFile.statements
    .map(node => parsePropDeclaration(node, cesiumProps, cesiumReadonlyProps, importMap, def))
    .reduce<DocProps>((a, b) => (b ? { ...a, [b[0]]: [...(a[b[0]] ?? []), ...b[1]] } : a), {});

  // parse event props
  /*
    const cesiumEventProps = {
      onDefinitionChange: "definitionChanged",
    };
  */
  if (propDoc.cesiumEvents) {
    sourceFile.statements
      .filter(isVariableStatement)
      .map(parseEventMap)
      .reduce((a, b) => [...a, ...b], [])
      .forEach(ev => {
        const ev2 = propDoc.cesiumEvents?.find(e => e.name === ev[0]);
        if (ev2) {
          ev2.mappedCesiumType = importMap.get(ev[1]) || ev[1];
        }
      });
  }

  return {
    name,
    cesiumElement: name,
    ...commentDoc,
    ...propDoc,
  };
}

function parsePropDeclaration(
  node: Node,
  cesiumProps: readonly string[],
  cesiumReadonlyProps: readonly string[],
  importMap: Map<string, string>,
  def: CesiumTypeDefinition,
): [PropKind, Prop[]] | undefined {
  if (!isInterfaceDeclaration(node) && !isTypeAliasDeclaration(node)) return;

  const name = node.name.text;
  const key: PropKind | undefined = /.+?CesiumProps$/.test(name)
    ? "cesiumProps"
    : /.+?CesiumReadonlyProps$/.test(name)
    ? "cesiumReadonlyProps"
    : /.+?CesiumEvents$/.test(name)
    ? "cesiumEvents"
    : /.+?Props$/.test(name)
    ? "props"
    : undefined;
  if (!key) return;

  const propNames =
    key === "cesiumProps" ? cesiumProps : key === "cesiumReadonlyProps" ? cesiumReadonlyProps : [];

  // parse props from declaration
  // type A = B & C & D & { ... } -> B, C, D, { ... }
  // interface A extends B, C, D { ... } => B, C, D, { ... }
  const typeNodes: (
    | TypeNode
    | InterfaceDeclaration
    | ExpressionWithTypeArguments
  )[] = isTypeAliasDeclaration(node)
    ? isTypeReferenceNode(node.type) || isTypeLiteralNode(node.type)
      ? [node.type]
      : isIntersectionTypeNode(node.type)
      ? [...node.type.types]
      : []
    : [...(node.heritageClauses?.[0].types ?? []), node];

  const props = typeNodes
    .map(n => {
      // PickCesiumProps<Hoge, foobar>
      if (propNames.length && (isTypeReferenceNode(n) || isExpressionWithTypeArguments(n))) {
        const cesiumProps = pickCesiumProps(n, propNames, importMap, def);
        if (cesiumProps) return cesiumProps;
      }

      // { member?: Hoge }
      if (isTypeLiteralNode(n) || isInterfaceDeclaration(n)) {
        return n.members
          .filter(isPropertySignature)
          .map(n2 => parseProp(n2, importMap))
          .filter((p): p is Prop => !!p);
      }

      const nameExpression = isTypeReferenceNode(n)
        ? n.typeName
        : isExpressionWithTypeArguments(n)
        ? n.expression
        : undefined;
      const name = nameExpression && isIdentifier(nameExpression) ? nameExpression.text : undefined;

      // RootEventProps
      if (name === "RootEventProps") {
        return rootEventProps;
      }

      const typeArgs =
        isTypeReferenceNode(n) || isExpressionWithTypeArguments(n) ? n.typeArguments : undefined;

      // EventProps<Hoge>
      const eventPropsType = name === "EventProps" && typeArgs?.[0];
      if (eventPropsType) {
        const targetType = parseType(eventPropsType, importMap);
        return getEventProps(targetType);
      }

      return [];
    })
    .reduce((a, b) => [...a, ...b], []);

  return [key, props];
}

function parseEventMap(node: Node): [string, string][] {
  const v = getVariableNameAndInitializer(node);
  if (v && v[0] === "cesiumEventProps" && isObjectLiteralExpression(v[1])) {
    return v[1].properties
      .map<[string, string] | undefined>(node2 => {
        if (
          isPropertyAssignment(node2) &&
          isIdentifier(node2.name) &&
          isStringLiteral(node2.initializer)
        ) {
          return [node2.initializer.text, node2.name.text];
        }
        return undefined;
      })
      .filter((n): n is [string, string] => !!n);
  }
  return [];
}

function parseProp(node: PropertySignature, typeNameMap?: Map<string, string>): Prop | undefined {
  if (!node.type) return undefined;
  const comment = parsePropComment(node);
  if (!comment.type) {
    delete comment.type;
  }
  const type = parseType(node.type, typeNameMap);
  return {
    name: isIdentifier(node.name) ? node.name.text : "",
    required: !node.questionToken,
    type,
    ...comment,
  };
}

function parsePropComment(node: Node): PropComment {
  const comments = getLeadingComment(node);

  let kind = undefined;
  const description: string[] = [];
  let hidden = false;
  let type: Type | undefined;

  comments.forEach(c => {
    if (/^@CesiumProp/.test(c)) {
      kind = "cesiumProps";
      return;
    }
    if (/^@CesiumReadonlyProp/.test(c)) {
      kind = "cesiumReadonlyProps";
      return;
    }
    if (/^@CesiumEvent/.test(c)) {
      kind = "cesiumEvents";
      return;
    }
    if (/^@prop/.test(c)) {
      kind = "props";
      return;
    }
    if (/^@hidden/.test(c)) {
      hidden = true;
    }
    const m = c.match(/^@type (.+?)$/);
    if (m) {
      type = parseTypeFromStr(m[1]);
      return;
    }
    // normal comment = description
    description.push(c.trim());
  });

  return {
    kind,
    description: description.join(" "),
    hidden,
    type,
  };
}

function parseDocComment(node: Node): DocComment | undefined {
  const comments = getLeadingComment(node);
  if (!comments.length) return;

  const doc = comments
    .map(c => {
      if (/^ *?@noCesiumElement/.test(c)) {
        return {
          noCesiumElement: true,
        };
      }
      if (/^ *?@cesiumElement/.test(c)) {
        return {
          cesiumElement: c.replace(/^ *?@cesiumElement/, "").trim(),
        };
      }
      if (/^ *?@summary/.test(c)) {
        return {
          summary: c.replace(/^ *?@summary/, "").trim(),
        };
      }
      if (/^ *?@scope/.test(c)) {
        return {
          scope: c.replace(/^ *?@scope/, "").trim(),
        };
      }
      if (/^ *?@ignore/.test(c)) {
        return {
          ignored: true,
        };
      }
      return undefined;
    })
    .filter(c => !!c)
    .reduce((a, b) => ({ ...a, ...b }), {});

  return doc;
}

export function parseType(node: TypeNode, map?: Map<string, string> | Set<string>): Type {
  if (isTypeReferenceNode(node)) {
    if (isIdentifier(node.typeName)) {
      const name = node.typeName.text;
      return {
        name: (map && map instanceof Map && map.get(name)) || name,
        cesium: !!map?.has(name),
        params: node.typeArguments?.map(n => parseType(n, map)),
      };
    } else if (isIdentifier(node.typeName.left)) {
      const leftName =
        (map && map instanceof Map && map.get(node.typeName.left.text)) || node.typeName.left.text;
      const rightName = node.typeName.right.text;
      return {
        name: [leftName, rightName].join("."),
        leftName,
        rightName,
        cesium: !!map?.has(node.typeName.left.text),
        params: node.typeArguments?.map(n => parseType(n, map)),
      };
    }
  } else if (isUnionTypeNode(node)) {
    return node.types.map(n => parseType(n, map));
  } else if (isFunctionTypeNode(node)) {
    return {
      args: node.parameters
        .map(p =>
          isIdentifier(p.name) && p.type
            ? {
                name: p.name.text,
                type: parseType(p.type, map),
                optional: !!p.questionToken,
              }
            : undefined,
        )
        .filter((p): p is { name: string; type: Type; optional: boolean } => !!p && !!p.type),
      return: parseType(node.type, map),
    };
  } else if (isArrayTypeNode(node)) {
    return { element: parseType(node.elementType, map) };
  }
  return node.getText();
}

export function parseTypeFromStr(str: string): Type {
  const types = str.split("|").map(t => t.trim());
  if (types.length > 1) {
    return types.map(t => ({ name: t.replace(/^Cesium\./, ""), cesium: /^Cesium\./.test(t) }));
  }
  return { name: types[0].replace(/^Cesium\./, ""), cesium: /^Cesium\./.test(types[0]) };
}

export function pickCesiumProps(
  node: TypeReferenceNode | ExpressionWithTypeArguments,
  props: readonly string[],
  importMap: Map<string, string>,
  def: CesiumTypeDefinition,
): Prop[] | undefined {
  if (!node.typeArguments || node.typeArguments.length < 2) return;

  const name = "typeName" in node ? node.typeName : node.expression;
  if (!isIdentifier(name) || name.text !== "PickCesiumProps") return;

  const typeArg = node.typeArguments[1];
  const propNames = Array.from(
    new Set(
      isTypeOf(typeArg, "cesiumProps") || isTypeOf(typeArg, "cesiumReadonlyProps")
        ? props ?? []
        : getUnionStringLiterals(typeArg) ?? [],
    ),
  );

  // PickCesiumProps<CesiumViewer> or PickCesiumProps<CesiumViewer & CesiumViewer.ConstructorOptions>
  const cesiumType = node.typeArguments[0];
  const cesiumTypeIdentifiers = isTypeReferenceNode(cesiumType)
    ? [cesiumType.typeName]
    : isIntersectionTypeNode(cesiumType)
    ? cesiumType.types.filter(isTypeReferenceNode).map(r => r.typeName)
    : undefined;
  // [["CesiumViewer"], ["CesiumViewer", "ConstructorOptions"]]
  const cesiumTypeNames = cesiumTypeIdentifiers
    ?.map(entityNameToStringArray)
    .map(n => [importMap.get(n[0]) ?? n[0], ...n.slice(1)]);

  const cesiumProps = cesiumTypeNames
    ?.map(n =>
      def
        .getPropertiesFromType(n)
        ?.map(p => parsePropertyDeclaration(p, def, false))
        .filter((p): p is Prop => !!p),
    )
    .reduce<Prop[]>((a, b) => (b ? [...a, ...b] : a), []);

  return cesiumProps
    ? propNames.map(p => cesiumProps.find(r => r.name === p)).filter((p): p is Prop => !!p)
    : [];
}

function parsePropertyDeclaration(
  p: PropertyDeclaration | PropertySignature,
  def: CesiumTypeDefinition,
  overrideRequired?: boolean,
): Prop | undefined {
  return isIdentifier(p.name) && p.type
    ? {
        name: p.name.text,
        type: parseType(p.type, def.identitifers),
        required: typeof overrideRequired === "boolean" ? overrideRequired : !p.questionToken,
        cesiumType: def.identitifers.has(p.type.getText()),
      }
    : undefined;
}

function getEventProps(t?: Type): Prop[] {
  return !t
    ? []
    : [
        "onClick",
        "onDoubleClick",
        "onMouseClick",
        "onMouseDown",
        "onMouseUp",
        "onMiddleClick",
        "onMiddleDown",
        "onMiddleUp",
        "onMouseMove",
        "onPinchEnd",
        "onPinchMove",
        "onPinchStart",
        "onRightClick",
        "onRightDown",
        "onRightUp",
        "onMouseEnter",
        "onMouseLeave",
      ].map(e => ({
        name: e,
        type: {
          args: [
            { name: "movement", type: "CesiumMovementEvent", optional: false },
            { name: "target", type: t, optional: false },
          ],
          return: "void",
        },
      }));
}
