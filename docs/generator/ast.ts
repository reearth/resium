import {
  Node,
  isInterfaceDeclaration,
  isVariableStatement,
  SourceFile,
  isIdentifier,
  isTypeAliasDeclaration,
  isStringLiteral,
  isTypeReferenceNode,
  isIntersectionTypeNode,
  TypeReferenceNode,
  isImportDeclaration,
  isNamedImports,
  isArrayLiteralExpression,
  isAsExpression,
  getLeadingCommentRanges,
  Expression,
  isUnionTypeNode,
  isLiteralTypeNode,
  isTypeQueryNode,
  EntityName,
} from "typescript";

export function createImportMap(s: SourceFile, moduleName: string) {
  const map = new Map<string, string>();
  // import { Viewer as CesiumViewer } from "cesium";
  s.statements.filter(isImportDeclaration).forEach(node => {
    if (
      node.importClause?.namedBindings &&
      isStringLiteral(node.moduleSpecifier) &&
      node.moduleSpecifier.text === moduleName &&
      isNamedImports(node.importClause.namedBindings)
    ) {
      node.importClause.namedBindings.elements.forEach(e => {
        if (isIdentifier(e.name)) {
          map.set(e.name.text, e.propertyName ? e.propertyName.text : e.name.text);
        }
      });
    }
  });
  return map;
}

export function getVariableNameAndInitializer(node: Node): [string, Expression] | undefined {
  if (!isVariableStatement(node)) return;
  const d = node.declarationList.declarations[0];
  if (!d.initializer || !isIdentifier(d.name)) return;
  return [d.name.text, d.initializer];
}

export function getConstArrayElements(s: SourceFile, ...names: string[]) {
  const result = names.map<string[]>(() => []);
  s.statements.filter(isVariableStatement).forEach(node => {
    const v = getVariableNameAndInitializer(node);

    if (
      !v ||
      (!isArrayLiteralExpression(v[1]) &&
        (!isAsExpression(v[1]) ||
          !isTypeReferenceNode(v[1].type) ||
          !isIdentifier(v[1].type.typeName) ||
          v[1].type.typeName.text !== "const"))
    )
      return;

    const index = names.indexOf(v[0]);
    if (index === -1) return;

    const elements = isAsExpression(v[1])
      ? isArrayLiteralExpression(v[1].expression)
        ? v[1].expression.elements
        : undefined
      : v[1].elements;

    const strings = elements?.filter(isStringLiteral).map(s => s.text);
    if (strings) {
      result[index].push(...strings);
    }
  });

  return result;
}

export function getTypeNodeFromExtensions(node: Node, typeName: string) {
  // extract A from `interface Hoge extends A, {}`
  if (isInterfaceDeclaration(node)) {
    return node.heritageClauses?.[0]?.types.find(
      t => isIdentifier(t.expression) && t.expression.text === typeName,
    );
  }

  // extract A from `type Hoge = A & {}`
  if (isTypeAliasDeclaration(node)) {
    if (isIntersectionTypeNode(node.type)) {
      return node.type.types.find(
        (t): t is TypeReferenceNode =>
          isTypeReferenceNode(t) && isIdentifier(t.typeName) && t.typeName.text === typeName,
      );
    } else if (
      isTypeReferenceNode(node.type) &&
      isIdentifier(node.type.typeName) &&
      node.type.typeName.text === typeName
    ) {
      return node.type;
    }
  }

  return undefined;
}

export function getLeadingComment(node: Node) {
  const text = node.getFullText();
  const nodeStart = node.getStart();
  const comment: string[] = [];
  let start = 0;
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const comments = getLeadingCommentRanges(text, start);
    if (comments && comments[0]) {
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

export function getUnionStringLiterals(node: Node): string[] | undefined {
  if (isLiteralTypeNode(node) && isStringLiteral(node.literal)) return [node.literal.text];
  if (!isUnionTypeNode(node)) return undefined;
  return node.types
    .filter(isLiteralTypeNode)
    .map(s => s.literal)
    .filter(isStringLiteral)
    .map(s => s.text);
}

export function isTypeOf(node: Node, name: string) {
  return isTypeQueryNode(node) && isIdentifier(node.exprName) && node.exprName.text === name;
}

export function entityNameToStringArray(n: EntityName): string[] {
  if (isIdentifier(n)) return [n.text];
  return [...entityNameToStringArray(n.left), n.right.text];
}
