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
  isTypeReferenceNode,
  isIntersectionTypeNode,
  TypeReferenceNode,
  isImportDeclaration,
  isNamedImports,
} from "typescript";
import { Prop, Doc, PropKind, Type } from "./types";
import { parsePropComment, parseDocComment } from "./comment";
import { parseType } from "./type";

const eventTypes = (t?: Type): { name: string; type: Type }[] =>
  !t
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

const rootEventType: { name: string; type: Type }[] = [
  ...eventTypes("any"),
  {
    name: "onWheel",
    type: {
      args: [{ name: "delta", type: "number", optional: false }],
      return: "void",
    },
  },
];

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

export function parseDoc(sourceFile: SourceFile): Doc {
  const name = parse(sourceFile.fileName).name;
  let doc: Doc = {
    name,
    cesiumElement: name,
    cesiumProps: [],
    cesiumReadonlyProps: [],
    cesiumEvents: [],
    props: [],
  };
  const eventMap: [string, string][] = [];
  let rootProps = false;
  let defaultEvents = false;

  const importMap = new Map<string, string>();

  sourceFile.forEachChild(node => {
    /*
    import { Viewer as CesiumViewer } from "cesium";
    */
    if (
      isImportDeclaration(node) &&
      node.importClause?.namedBindings &&
      isStringLiteral(node.moduleSpecifier) &&
      node.moduleSpecifier.text === "cesium" &&
      isNamedImports(node.importClause.namedBindings)
    ) {
      node.importClause.namedBindings.elements.forEach(e => {
        if (isIdentifier(e.name)) {
          importMap.set(e.name.text, e.propertyName ? e.propertyName.text : e.name.text);
        }
      });
      /*
    interface cesiumProps {
      hoge: foo;
    }
    or
    type cesiumProps = {
      hoge: foo;
    };
    */
    } else if (isInterfaceDeclaration(node) || isTypeAliasDeclaration(node)) {
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

      if (key) {
        const nodes =
          "type" in node
            ? isTypeLiteralNode(node.type)
              ? node.type.members
              : undefined
            : node.members;
        nodes?.forEach(node2 => {
          if (isPropertySignature(node2)) {
            const p = parseProp(node2, importMap);
            if (p) {
              doc[p.kind || key].push(p);
            }
          }
        });
      }

      if (key === "props") {
        if (!rootProps && extendedType(node, "RootEventProps")) {
          doc.props = [...doc.props, ...rootEventType];
          rootProps = true;
        }
        const EventProps = extendedType(node, "EventProps");
        const eventPropsType =
          EventProps && "typeArguments" in EventProps && EventProps.typeArguments?.[0];
        if (eventPropsType && !defaultEvents) {
          const targetType = parseType(eventPropsType, importMap);
          doc.props = [...doc.props, ...eventTypes(targetType)];
          defaultEvents = true;
        }
      }

      /*
    const cesiumEventProps = {
      onDefinitionChange: "definitionChanged",
    };
    */
    } else if (
      isVariableStatement(node) &&
      isIdentifier(node.declarationList.declarations[0]?.name) &&
      node.declarationList.declarations[0].name.escapedText === "cesiumEventProps" &&
      node.declarationList.declarations[0].initializer &&
      isObjectLiteralExpression(node.declarationList.declarations[0].initializer)
    ) {
      node.declarationList.declarations[0].initializer.properties.forEach(node2 => {
        if (
          isPropertyAssignment(node2) &&
          isIdentifier(node2.name) &&
          isStringLiteral(node2.initializer)
        ) {
          eventMap.push([node2.initializer.text, node2.name.text]);
        }
      });
    }

    const comment = parseDocComment(node);
    if (comment) {
      doc = { ...doc, ...comment };
    }
  });

  if (!doc.cesiumElement) {
    doc.cesiumElement = doc.name;
  }

  eventMap.forEach(ev => {
    const ev2 = doc.cesiumEvents.find(e => e.name === ev[0]);
    if (ev2) {
      ev2.mappedCesiumType = importMap.get(ev[1]) || ev[1];
    }
  });

  return doc;
}

function extendedType(node: Node, typeName: string) {
  // interface Hoge extends A {}
  return (
    (isInterfaceDeclaration(node) &&
      node.heritageClauses?.[0]?.types.find(
        t => isIdentifier(t.expression) && t.expression.escapedText === typeName,
      )) ||
    // type Hoge = A & {};
    (isTypeAliasDeclaration(node) &&
      isIntersectionTypeNode(node.type) &&
      node.type.types.find(
        (t): t is TypeReferenceNode =>
          isTypeReferenceNode(t) && isIdentifier(t.typeName) && t.typeName.escapedText === typeName,
      ))
  );
}
