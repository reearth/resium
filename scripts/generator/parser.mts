import { parse } from "path";

import ts from "typescript";
import type { Node, SourceFile, TypeChecker, Type, Symbol, Expression } from "typescript";

import type { Prop, Doc, PropKind, DocComment, DocProps, TypeExpr } from "./types.mjs";

const {
  isVariableStatement,
  isPropertyAssignment,
  isIdentifier,
  isTypeAliasDeclaration,
  isObjectLiteralExpression,
  isStringLiteral,
  getLeadingCommentRanges,
  SymbolFlags,
} = ts;

export function parseDoc(sourceFile: SourceFile, tc: TypeChecker): Doc {
  const name = parse(sourceFile.fileName).name;

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
    .map(node => parsePropDeclaration(name, node, tc))
    .reduce<DocProps>((a, b) => (b ? { ...a, [b[0]]: [...(a[b[0]] ?? []), ...b[1]] } : a), {});

  // parse event props
  /*
    export const cesiumEventProps = {
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
          ev2.mappedCesiumFieldName = ev[1];
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
  name: string,
  node: Node,
  tc: TypeChecker,
): [PropKind, Prop[]] | undefined {
  if (!isTypeAliasDeclaration(node)) return;

  const nodeName = node.name.text;
  const key: PropKind | undefined =
    name + "CesiumProps" === nodeName
      ? "cesiumProps"
      : name + "CesiumReadonlyProps" === nodeName
      ? "cesiumReadonlyProps"
      : name + "CesiumEvents" === nodeName
      ? "cesiumEvents"
      : name + "OtherProps" === nodeName
      ? "otherProps"
      : name + "Props" === nodeName
      ? "props"
      : undefined;
  if (!key) return;

  const props = tc
    .getTypeAtLocation(node)
    .getApparentProperties()
    .map(s => {
      const d = s.getDeclarations()?.[0];
      const type = d ? tc.getTypeAtLocation(d) : undefined;
      return {
        name: s.name,
        type: toTypeExpr(type, tc),
        required: !!type && (type.flags ^ SymbolFlags.Optional) === 0,
        desc: isCesium(d) ? "" : getDesc(s, tc),
      };
    });

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

// eslint-disable-next-line @typescript-eslint/ban-types
function getDesc(s: Symbol | undefined, tc: TypeChecker) {
  return s
    ?.getDocumentationComment(tc)
    .filter(c => c.kind === "text")
    .map(c => c.text.replace(/\n/g, ""))
    .join("");
}

function toTypeExpr(t: Type | undefined, tc: TypeChecker): TypeExpr | undefined {
  if (!t) return;
  const text = tc.typeToString(t);

  // TODO: implement Cesium type detection
  return { text, cesiumTypes: [] };
}

function isCesium(d: { getSourceFile(): SourceFile } | undefined) {
  return !!d && /Cesium\.d\.ts$/.test(d.getSourceFile().fileName);
}

export function getVariableNameAndInitializer(node: Node): [string, Expression] | undefined {
  if (!isVariableStatement(node)) return;
  const d = node.declarationList.declarations[0];
  if (!d.initializer || !isIdentifier(d.name)) return;
  return [d.name.text, d.initializer];
}

export function getLeadingComment(node: Node) {
  const text = node.getFullText();
  const nodeStart = node.getStart();
  const comment: string[] = [];
  let start = 0;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const comments = getLeadingCommentRanges(text, start);
    if (comments?.[0]) {
      if (comments[0].pos >= nodeStart) {
        break;
      }
      comment.push(formatComment(text.slice(comments[0].pos, comments[0].end)));
      start = comments[0].end;
    } else {
      break;
    }
  }
  return comment;
}

function formatComment(comment: string): string {
  const multiline = /^\/\*/.test(comment);
  const jsdoc = /\/\*\*/.test(comment);
  return comment
    .split("\n")
    .map(c => (multiline ? c.replace(/^\/\*\*? ?|\*\/$/g, "") : c.replace(/^\/\/ ?/g, "")))
    .map(c => (!jsdoc ? c : c.replace(/^ \* ?/g, "")))
    .filter((c, i, a) => (i !== 0 && i !== a.length - 1) || c.trim().length !== 0)
    .join("\n");
}
