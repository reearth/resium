import fs from "fs";
import path from "path";
import globby from "globby";
import { ScriptTarget, createSourceFile } from "typescript";

import { renderDoc } from "./renderer";
import { parseDoc } from "./parser";
import { inspect } from "util";

const name = process.argv.slice(2).filter(a => !a.startsWith("-"));
const options = process.argv.slice(2).filter(a => a.startsWith("-"));
const preview = options.includes("--preview") || options.includes("-p");

console.log(
  `Generating documents...${name.length > 0 ? `: ${name.join(", ")}` : ""}${
    preview ? " (preview)" : ""
  }`,
);

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

componentFiles.forEach(cf => {
  const p = path.parse(cf);
  const nameWithExt = p.base;
  const name = p.name;
  const code = fs.readFileSync(cf, "utf8");

  const sourceFile = createSourceFile(nameWithExt, code, ScriptTarget.ES2020, true);

  const doc = parseDoc(sourceFile);
  if (doc.ignored) {
    return;
  }

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
