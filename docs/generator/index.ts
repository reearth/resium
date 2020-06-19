import fs from "fs";
import path from "path";
import { inspect } from "util";
import globby from "globby";
import { ScriptTarget, createSourceFile, createProgram } from "typescript";

import { renderDoc } from "./renderer";
import { parseDoc } from "./parser";

const name = process.argv.slice(2).filter(a => !a.startsWith("-"));
const options = process.argv.slice(2).filter(a => a.startsWith("-"));
const preview = options.includes("--preview") || options.includes("-p");

console.log(
  `Generating documents...${name.length > 0 ? `: ${name.join(", ")}` : ""}${
    preview ? " (preview)" : ""
  }`,
);

// load cesium type definitions
const cesiumModulePath = path.dirname(require.resolve("cesium"));
const cesiumPackageJSON = JSON.parse(
  fs.readFileSync(path.resolve(cesiumModulePath, "package.json"), "utf8"),
);
const cesiumTypeDefPath = path.resolve(cesiumModulePath, cesiumPackageJSON.types);
const cesiumTypeDef = createSourceFile(
  path.basename(cesiumTypeDefPath),
  fs.readFileSync(cesiumTypeDefPath, "utf8"),
  ScriptTarget.ES2020,
  true,
);

// list component paths
const componentFiles = globby
  .sync([
    "../src/*/*.ts{,x}",
    "!../src/*/index.ts{,x}",
    "!../src/*/story.ts{,x}",
    "!../src/*/test.ts{,x}",
    "!../src/*/*.test.ts{,x}",
    "!../src/core/**/*",
  ])
  .filter(cf => !name.length || name.includes(path.parse(cf).name));

if (componentFiles.length > 0) {
  try {
    fs.mkdirSync(path.resolve(__dirname, "..", "api"));
  } catch (err) {
    // ignore
  }
}

const program = createProgram(componentFiles, {});
const tc = program.getTypeChecker();

// generate and write document
componentFiles.forEach(cf => {
  const p = path.parse(cf);
  const name = p.name;

  const sourceFile = program.getSourceFile(cf);
  if (!sourceFile) return;

  const doc = parseDoc(sourceFile, tc);
  if (doc.ignored) return;

  if (preview && name) {
    console.log(inspect(doc, false, null, true));
    return;
  }
  if (doc) {
    const result = renderDoc(doc);
    fs.writeFileSync(path.resolve(__dirname, "..", "api", `${name}.mdx`), result);
  }
});

if (!preview) {
  console.log(`${componentFiles.length} documents genereted!`);
}
