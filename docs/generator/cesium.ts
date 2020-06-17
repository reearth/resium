import {
  SourceFile,
  isClassDeclaration,
  isPropertyDeclaration,
  isIdentifier,
  isModuleDeclaration,
  ModuleDeclaration,
  isModuleBlock,
  PropertyDeclaration,
  isEnumDeclaration,
  TypeAliasDeclaration,
  isTypeAliasDeclaration,
  isTypeLiteralNode,
  isPropertySignature,
  PropertySignature,
  ClassDeclaration,
} from "typescript";

export class CesiumTypeDefinition {
  private declarations: (ClassDeclaration | ModuleDeclaration)[] | undefined;
  readonly identitifers: Set<string>;

  constructor(s: SourceFile) {
    this.identitifers = new Set();

    const body = s.statements.find(
      (s): s is ModuleDeclaration => isModuleDeclaration(s) && s.name.text === "cesium",
    )?.body;
    if (body && isModuleBlock(body)) {
      this.declarations = body.statements.filter(
        (s): s is ClassDeclaration | ModuleDeclaration =>
          isClassDeclaration(s) || isModuleDeclaration(s),
      );
      body.statements.forEach(s => {
        if (
          (isModuleDeclaration(s) || isClassDeclaration(s) || isEnumDeclaration(s)) &&
          s.name &&
          isIdentifier(s.name)
        ) {
          this.identitifers.add(s.name.text);
        }
      });
    }
  }

  getPropertiesFromType(names: string[]): (PropertyDeclaration | PropertySignature)[] | undefined {
    if (!names.length) return;

    const m = this.declarations?.filter(s => !!s.name && s.name.text === names[0]);

    if (!m?.length) return;

    // ["Viewer"] => Viewer class members
    if (names.length === 1) {
      const cls = m.find(isClassDeclaration);
      return cls?.members?.filter(isPropertyDeclaration);
    }

    // ["Viewer", "ConstructorOptions"] => ConstructorOptions type members in Viewer namespace
    const md = m.find(isModuleDeclaration);
    if (md?.body && isModuleBlock(md.body)) {
      const t = md.body.statements.find(
        (s): s is TypeAliasDeclaration => isTypeAliasDeclaration(s) && s.name.text === names[1],
      )?.type;
      if (!t) return undefined;
      if (t && isTypeLiteralNode(t)) {
        return t.members.filter(isPropertySignature);
      }
    }

    return undefined;
  }
}
