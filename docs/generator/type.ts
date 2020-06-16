import {
  isTypeReferenceNode,
  isIdentifier,
  isUnionTypeNode,
  TypeNode,
  isFunctionTypeNode,
  isArrayTypeNode,
} from "typescript";
import { Type, UnionType } from "./types";

export function parseType(node: TypeNode, map?: Map<string, string>): Type {
  if (isTypeReferenceNode(node)) {
    if (isIdentifier(node.typeName)) {
      const name = node.typeName.text;
      return {
        name: map?.get(name) || name,
        cesium: !!map?.has(name),
        params: node.typeArguments?.map(n => parseType(n, map)),
      };
    } else if (isIdentifier(node.typeName.left)) {
      const leftName = map?.get(node.typeName.left.text) || node.typeName.left.text;
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
    return node.types.map(n => parseType(n, map)).filter((t): t is Type | UnionType => !!t);
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
